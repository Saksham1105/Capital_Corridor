import { chromium } from 'playwright';

const routes = [
  '/',
  '/about',
  '/why-us',
  '/services',
  '/capital-markets',
  '/challenging-cases',
  '/our-team',
  '/our-process',
  '/contact',
  '/legal-disclaimer'
];

async function run() {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  for (const route of routes) {
    const url = `http://localhost:3000${route}`;
    const response = await page.goto(url, { waitUntil: 'networkidle' });
    
    console.log(`\n--- ROUTE: ${route} ---`);
    console.log(`Status: ${response?.status()}`);
    
    const title = await page.title();
    const h1Count = await page.evaluate(() => document.querySelectorAll('h1').length);
    const metaDesc = await page.evaluate(() => document.querySelector('meta[name="description"]')?.getAttribute('content'));
    const canonical = await page.evaluate(() => document.querySelector('link[rel="canonical"]')?.getAttribute('href'));
    const jsonLd = await page.evaluate(() => document.querySelector('script[type="application/ld+json"]')?.textContent);
    
    console.log(`Title: ${title}`);
    console.log(`H1 Count: ${h1Count}`);
    console.log(`Meta Desc: ${metaDesc}`);
    console.log(`Canonical: ${canonical}`);
    console.log(`JSON-LD: ${jsonLd ? 'Present' : 'Missing'}`);
    
    const consoleErrors = [];
    page.on('console', msg => {
      if (msg.type() === 'error') consoleErrors.push(msg.text());
    });
    if (consoleErrors.length > 0) {
      console.log(`Console Errors:`, consoleErrors);
    }
  }
  
  await browser.close();
}

run().catch(console.error);
