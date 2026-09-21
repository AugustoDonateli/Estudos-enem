import { defineConfig, devices } from '@playwright/test';
import { existsSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

/**
 * Resolve o Chromium a usar.
 *
 * Ambientes de CI e contêineres costumam trazer um Chromium pré-instalado em
 * versão diferente da que o @playwright/test espera. Em vez de baixar outro,
 * aproveitamos o que já existe. Sem nenhum deles, o Playwright usa o próprio.
 */
function chromiumDoAmbiente(): string | undefined {
  if (process.env.CHROMIUM_PATH) return process.env.CHROMIUM_PATH;
  const raiz = process.env.PLAYWRIGHT_BROWSERS_PATH ?? '/opt/pw-browsers';
  if (!existsSync(raiz)) return undefined;
  const pasta = readdirSync(raiz)
    .filter((n) => n.startsWith('chromium-'))
    .sort()
    .pop();
  if (!pasta) return undefined;
  const binario = join(raiz, pasta, 'chrome-linux', 'chrome');
  return existsSync(binario) ? binario : undefined;
}

const executavel = chromiumDoAmbiente();

export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  reporter: [['list']],
  timeout: 30_000,
  use: {
    baseURL: 'http://127.0.0.1:4173',
    trace: 'off',
    launchOptions: executavel ? { executablePath: executavel } : {},
  },
  projects: [
    { name: 'desktop', use: { ...devices['Desktop Chrome'] } },
    { name: 'celular', use: { ...devices['Pixel 7'] } },
  ],
  webServer: {
    command: 'npm run preview -- --port 4173 --host 127.0.0.1',
    url: 'http://127.0.0.1:4173',
    reuseExistingServer: true,
    timeout: 60_000,
  },
});
