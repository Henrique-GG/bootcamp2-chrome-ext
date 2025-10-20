import { test, expect, chromium } from '@playwright/test';
import path from 'node:path';

const dist = path.resolve(__dirname, '..', 'dist');

test('Popup da extensão carrega e exibe elemento principal', async () => {
  const context = await chromium.launchPersistentContext('', {
    headless: true,
    args: [
      `--disable-extensions-except=${dist}`,
      `--load-extension=${dist}`
    ]
  });

  const serviceWorker = context.serviceWorkers().find(sw => sw.url().includes('service-worker.js'));
  const extensionId = serviceWorker?.url().split('/')[2];
  
  expect(extensionId).toBeDefined();

  if (extensionId) {
    const popupUrl = `chrome-extension://${extensionId}/src/popup/popup.html`;
    const popupPage = await context.newPage();
    await popupPage.goto(popupUrl);
    
    // VERIFICA SE O CORPO (BODY) DO POPUP CARREGOU
    const mainElement = popupPage.locator('body'); 
    await expect(mainElement).toBeVisible();
  }

  await context.close();
});