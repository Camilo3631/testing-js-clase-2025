const { test, expect } = require('@playwright/test');

test('basic test', async ({ page }) => {
   await page.goto('https://playwright.dev/');
   // Url productiva
    // await page.goto('https://qa.playwright.dev/');
    // Para una serie de pruebas
   const title = page.locator('.navbar__inner .navbar__title');
   await expect(title).toHaveText('Playwright');
});
