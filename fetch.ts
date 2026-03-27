import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://endless-instant-leads-508394260723.us-west1.run.app/thank-you', { waitUntil: 'networkidle' });
  const html = await page.content();
  console.log(html);
  await browser.close();
})();
