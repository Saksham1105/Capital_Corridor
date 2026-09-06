import { chromium } from 'playwright';

async function verifyLive() {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  console.log('Navigating to live URL...');
  await page.goto('https://capital-corridor.sswaggyiirush.workers.dev/services', { waitUntil: 'networkidle' });
  
  const title = await page.title();
  console.log(`Title: ${title}`);
  
  const h3Count = await page.evaluate(() => document.querySelectorAll('h3').length);
  const h3Texts = await page.evaluate(() => Array.from(document.querySelectorAll('h3')).map(el => el.innerText));
  
  console.log(`Found ${h3Count} categories:`);
  h3Texts.forEach((text, i) => console.log(`${i + 1}. ${text}`));
  
  const hasOverflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth);
  console.log(`Has Overflow: ${hasOverflow}`);
  
  const consoleErrors = [];
  page.on('console', msg => {
    if (msg.type() === 'error') consoleErrors.push(msg.text());
  });
  
  console.log(`Console Errors: ${consoleErrors.length}`);
  
  // Check responsive sizes
  const sizes = [
    { width: 1440, height: 900 },
    { width: 1280, height: 800 },
    { width: 1024, height: 768 },
    { width: 768, height: 1024 },
    { width: 430, height: 932 },
    { width: 390, height: 844 },
    { width: 375, height: 812 }
  ];
  
  for (const size of sizes) {
    await page.setViewportSize(size);
    await page.waitForTimeout(100);
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth);
    console.log(`Viewport ${size.width}x${size.height} - Overflow: ${overflow}`);
  }
  
  await browser.close();
}

verifyLive().catch(console.error);
