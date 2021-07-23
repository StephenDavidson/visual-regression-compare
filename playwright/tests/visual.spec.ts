import { test, expect } from '@playwright/test';

const urls = [
  'docs/core-concepts',
  'docs/intro',
  'docs/debug'
]

const baseUrl = 'https://playwright.dev'

for (const path of urls) {
  test(`Visual regression - ${path}`, async ({ page }) => {
    await page.goto(`${baseUrl}/${path}`);
    expect(await page.screenshot()).toMatchSnapshot(`${path.replace('/\//g', '-')}-snaphot.png`);
  }); 
}
