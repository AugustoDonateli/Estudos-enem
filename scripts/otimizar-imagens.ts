/**
 * Otimizador de imagens.
 *
 * O problema que este script resolve: pedir para alguém redimensionar a
 * imagem à mão antes de subir é um passo que vai ser esquecido ou feito
 * errado. Foi o que aconteceu — os dois arquivos chegaram como PNG de
 * 2688×1536 com a extensão trocada para `.webp`, somando 3,7 MB para um site
 * cujo bundle inteiro tem 1,2 MB.
 *
 * Agora o contrato é outro: **jogue o arquivo em `public/imagens/`, com
 * qualquer nome, qualquer formato e qualquer tamanho.** Este script cuida do
 * resto.
 *
 * O que ele faz com cada imagem encontrada:
 *
 * 1. Detecta o formato real pelo conteúdo, não pela extensão.
 * 2. Gera três larguras (640, 1280, 1920) em WebP de verdade, para o
 *    navegador baixar só a que couber na tela — celular não tem por que
 *    puxar 1920 px.
 * 3. Apaga o original, que já não serve para nada depois de gerados.
 *
 * Roda sob demanda (`npm run imagens`), não no build: assim o deploy não
 * depende do sharp compilar na máquina do host, e o que vai para produção é
 * exatamente o que foi conferido aqui.
 */
import { readdir, readFile, unlink, stat } from 'node:fs/promises';
import { join, parse } from 'node:path';
import sharp from 'sharp';

const PASTA = 'public/imagens';

/** Larguras geradas. A maior existe para telas retina em desktop. */
const LARGURAS = [640, 1280, 1920] as const;

/** Acima disto não há ganho visível e o peso dispara. */
const QUALIDADE = 78;

const EXTENSOES_DE_ENTRADA = new Set(['.png', '.jpg', '.jpeg', '.webp', '.avif', '.tif', '.tiff']);

function kb(bytes: number): string {
  return `${Math.round(bytes / 1024)} KB`;
}

/** O sufixo que marca um arquivo já gerado por este script. */
function ehDerivado(nome: string): boolean {
  return /-\d+w\.webp$/.test(nome);
}

async function main(): Promise<void> {
  let arquivos: string[];
  try {
    arquivos = await readdir(PASTA);
  } catch {
    console.log(`Pasta ${PASTA} não existe — nada a fazer.`);
    return;
  }

  const entradas = arquivos.filter(
    (n) => EXTENSOES_DE_ENTRADA.has(parse(n).ext.toLowerCase()) && !ehDerivado(n),
  );

  if (entradas.length === 0) {
    console.log('Nenhuma imagem nova para otimizar.');
    return;
  }

  for (const nome of entradas) {
    const caminho = join(PASTA, nome);
    const { name: base } = parse(nome);
    const original = await readFile(caminho);
    const meta = await sharp(original).metadata();

    if (!meta.width || !meta.height) {
      console.error(`  ${nome}: não consegui ler as dimensões — pulando.`);
      continue;
    }

    console.log(`\n${nome} — ${meta.format} ${meta.width}×${meta.height}, ${kb(original.length)}`);

    let total = 0;
    for (const largura of LARGURAS) {
      // Não faz sentido ampliar: se a original é menor, gera no tamanho dela.
      const alvo = Math.min(largura, meta.width);
      const saida = join(PASTA, `${base}-${largura}w.webp`);
      await sharp(original)
        .resize({ width: alvo, withoutEnlargement: true })
        .webp({ quality: QUALIDADE, effort: 6 })
        .toFile(saida);
      const { size } = await stat(saida);
      total += size;
      console.log(`  → ${base}-${largura}w.webp  ${alvo}px  ${kb(size)}`);
    }

    // O original já cumpriu o papel. Mantê-lo dobraria o peso do repositório
    // sem que nada no site o use.
    await unlink(caminho);
    const economia = 1 - total / original.length;
    console.log(`  original removido · conjunto ficou ${(economia * 100).toFixed(0)}% menor`);
  }

  console.log('\nPronto. Os arquivos gerados são os que o site usa.');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
