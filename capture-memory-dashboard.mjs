import { chromium } from "playwright";
import { mkdirSync } from "fs";
import { resolve } from "path";

const SCREENSHOTS_DIR = resolve("public/screenshots");
mkdirSync(SCREENSHOTS_DIR, { recursive: true });

const BASE_URL = "http://localhost:3002"; // OpenClaw Memory Dashboard

async function main() {
  console.log("🚀 Launching browser...");
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

  // 1. Dashboard Overview
  console.log("📸 1/6 Dashboard Overview...");
  const dash = await context.newPage();
  try {
    await dash.goto(`${BASE_URL}/dashboard`, { waitUntil: "networkidle", timeout: 10000 });
    await dash.waitForTimeout(3000); // Let stats load
    await hideScrollbars(dash);
    await dash.screenshot({ path: `${SCREENSHOTS_DIR}/dashboard-overview.png`, type: "png", fullPage: true });
    console.log("  ✅ dashboard-overview.png");
  } catch (err) {
    console.log(`  ❌ Failed: ${err.message}`);
  } finally {
    await dash.close();
  }

  // 2. Memory Browser
  console.log("📸 2/6 Memory Browser...");
  const browser_page = await context.newPage();
  try {
    await browser_page.goto(`${BASE_URL}/browser`, { waitUntil: "networkidle", timeout: 10000 });
    await browser_page.waitForTimeout(2000);
    // Try to load memories
    try {
      await browser_page.click('button:has-text("Load")', { timeout: 3000 });
      await browser_page.waitForTimeout(2000);
    } catch {}
    await hideScrollbars(browser_page);
    await browser_page.screenshot({ path: `${SCREENSHOTS_DIR}/memory-browser.png`, type: "png", fullPage: true });
    console.log("  ✅ memory-browser.png");
  } catch (err) {
    console.log(`  ❌ Failed: ${err.message}`);
  } finally {
    await browser_page.close();
  }

  // 3. Graph Visualizer
  console.log("📸 3/6 Graph Visualizer...");
  const graph = await context.newPage();
  try {
    await graph.goto(`${BASE_URL}/graph`, { waitUntil: "networkidle", timeout: 10000 });
    await graph.waitForTimeout(2000);
    // Try to load a graph (if browse feature exists)
    try {
      // Click first memory in browse list if available
      await graph.click('[data-testid="memory-item"]:first-child', { timeout: 2000 });
      await graph.waitForTimeout(3000); // Let graph render
    } catch {}
    await hideScrollbars(graph);
    await graph.screenshot({ path: `${SCREENSHOTS_DIR}/graph-visualizer.png`, type: "png", fullPage: false });
    console.log("  ✅ graph-visualizer.png");
  } catch (err) {
    console.log(`  ❌ Failed: ${err.message}`);
  } finally {
    await graph.close();
  }

  // 4. Conflicts
  console.log("📸 4/6 Conflicts...");
  const conflicts = await context.newPage();
  try {
    await conflicts.goto(`${BASE_URL}/conflicts`, { waitUntil: "networkidle", timeout: 10000 });
    await conflicts.waitForTimeout(2000);
    await hideScrollbars(conflicts);
    await conflicts.screenshot({ path: `${SCREENSHOTS_DIR}/conflicts.png`, type: "png", fullPage: true });
    console.log("  ✅ conflicts.png");
  } catch (err) {
    console.log(`  ❌ Failed: ${err.message}`);
  } finally {
    await conflicts.close();
  }

  // 5. Expiration Queue
  console.log("📸 5/6 Expiration Queue...");
  const expiration = await context.newPage();
  try {
    await expiration.goto(`${BASE_URL}/expiration`, { waitUntil: "networkidle", timeout: 10000 });
    await expiration.waitForTimeout(2000);
    await hideScrollbars(expiration);
    await expiration.screenshot({ path: `${SCREENSHOTS_DIR}/expiration-queue.png`, type: "png", fullPage: true });
    console.log("  ✅ expiration-queue.png");
  } catch (err) {
    console.log(`  ❌ Failed: ${err.message}`);
  } finally {
    await expiration.close();
  }

  // 6. Operations
  console.log("📸 6/6 Operations...");
  const operations = await context.newPage();
  try {
    await operations.goto(`${BASE_URL}/operations`, { waitUntil: "networkidle", timeout: 10000 });
    await operations.waitForTimeout(2000);
    await hideScrollbars(operations);
    await operations.screenshot({ path: `${SCREENSHOTS_DIR}/operations.png`, type: "png", fullPage: true });
    console.log("  ✅ operations.png");
  } catch (err) {
    console.log(`  ❌ Failed: ${err.message}`);
  } finally {
    await operations.close();
  }

  await browser.close();
  console.log(`\n🎉 Done! Screenshots saved to ${SCREENSHOTS_DIR}`);
  console.log(`\nFiles created:`);
  console.log(`  - dashboard-overview.png`);
  console.log(`  - memory-browser.png`);
  console.log(`  - graph-visualizer.png`);
  console.log(`  - conflicts.png`);
  console.log(`  - expiration-queue.png`);
  console.log(`  - operations.png`);
}

main().catch((err) => {
  console.error("❌ Failed:", err);
  process.exit(1);
});
