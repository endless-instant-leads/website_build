const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  await page.goto('https://endless-instant-leads-508394260723.us-west1.run.app/example-leads', { waitUntil: 'networkidle0' });
  
  const html = await page.content();
  fs.writeFileSync('example_page.html', html);
  
  const text = await page.evaluate(() => document.body.innerText);
  fs.writeFileSync('example_page.txt', text);
  
  await browser.close();
})();
