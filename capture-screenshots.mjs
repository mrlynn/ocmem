import { chromium } from "playwright";
import { mkdirSync } from "fs";
import { resolve } from "path";

const SCREENSHOTS_DIR = resolve("public/screenshots");
mkdirSync(SCREENSHOTS_DIR, { recursive: true });

const BASE_URL = "http://localhost:3000";

async function main() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 2,
    colorScheme: "dark",
  });

  // Hide scrollbars globally
  const hideScrollbars = async (page) => {
    await page.addStyleTag({
      content: `::-webkit-scrollbar { display: none !important; } * { scrollbar-width: none !important; }`,
    });
  };

  // 1. Dashboard
  console.log("📸 Dashboard...");
  const dash = await context.newPage();
  await dash.goto(`${BASE_URL}/dashboard`, { waitUntil: "networkidle" });
  await dash.waitForTimeout(5000);
  await hideScrollbars(dash);
  await dash.screenshot({ path: `${SCREENSHOTS_DIR}/dashboard.png`, type: "png" });
  console.log("  ✅ dashboard.png");
  await dash.close();

  // 2. Memories — click "Load All" to populate
  console.log("📸 Memories...");
  const mem = await context.newPage();
  await mem.goto(`${BASE_URL}/memories`, { waitUntil: "networkidle" });
  await mem.waitForTimeout(1500);
  try {
    await mem.click('button:has-text("Load All")', { timeout: 3000 });
    await mem.waitForTimeout(3000);
  } catch { /* button may not exist */ }
  await hideScrollbars(mem);
  await mem.screenshot({ path: `${SCREENSHOTS_DIR}/memories.png`, type: "png" });
  console.log("  ✅ memories.png");
  await mem.close();

  // 3. Search — type a query and search
  console.log("📸 Search...");
  const search = await context.newPage();
  await search.goto(`${BASE_URL}/search?query=mongodb+embeddings+configuration`, { waitUntil: "networkidle" });
  await search.waitForTimeout(3000);
  await hideScrollbars(search);
  await search.screenshot({ path: `${SCREENSHOTS_DIR}/search.png`, type: "png" });
  console.log("  ✅ search.png");
  await search.close();

  // 4. Usage
  console.log("📸 Usage...");
  const usage = await context.newPage();
  await usage.goto(`${BASE_URL}/usage`, { waitUntil: "networkidle" });
  await usage.waitForTimeout(3000);
  await hideScrollbars(usage);
  await usage.screenshot({ path: `${SCREENSHOTS_DIR}/usage.png`, type: "png" });
  console.log("  ✅ usage.png");
  await usage.close();

  // 5. Graph — try to load graph
  console.log("📸 Graph...");
  const graph = await context.newPage();
  await graph.goto(`${BASE_URL}/graph`, { waitUntil: "networkidle" });
  await graph.waitForTimeout(1500);
  try {
    await graph.click('button:has-text("Load Graph")', { timeout: 3000 });
    await graph.waitForTimeout(3000);
  } catch { /* button may not exist */ }
  await hideScrollbars(graph);
  await graph.screenshot({ path: `${SCREENSHOTS_DIR}/graph.png`, type: "png" });
  console.log("  ✅ graph.png");
  await graph.close();

  await browser.close();
  console.log(`\n🎉 Done! Screenshots in ${SCREENSHOTS_DIR}`);
}

main().catch((err) => {
  console.error("Failed:", err);
  process.exit(1);
});
