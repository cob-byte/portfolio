const { chromium } = require("playwright");
(async () => {
  const browser = await chromium.launch();
  const sizes = [
    { name: "mobile", w: 390, h: 844 },
    { name: "tablet", w: 768, h: 1024 },
    { name: "desktop", w: 1280, h: 900 },
  ];
  for (const size of sizes) {
    const page = await browser.newPage();
    await page.setViewportSize({ width: size.w, height: size.h });
    await page.goto("http://localhost:3333", { waitUntil: "networkidle" });
    await page.screenshot({ path: `C:/Users/jacob/AppData/Local/Temp/shot_${size.name}_hero.png` });
    await page.evaluate(() => document.getElementById("about").scrollIntoView());
    await page.waitForTimeout(400);
    await page.screenshot({ path: `C:/Users/jacob/AppData/Local/Temp/shot_${size.name}_about.png` });
    await page.evaluate(() => document.getElementById("projects").scrollIntoView());
    await page.waitForTimeout(400);
    await page.screenshot({ path: `C:/Users/jacob/AppData/Local/Temp/shot_${size.name}_projects.png` });
    await page.close();
  }
  await browser.close();
  console.log("done");
})();
