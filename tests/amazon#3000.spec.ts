const { test, expect } = require("@playwright/test");

test.describe("Amazon Product Search Testing", () => {
  test("search for a product by category", async ({ page }) => {
    await page.goto("https://www.amazon.fr");
    await page.selectOption("#searchDropdownBox", "High-Tech");
    await page.fill("#twotabsearchtextbox", "macbook pro");

    await page.click('input.nav-input[type="submit"]');
    const firstProduct = await page
      .locator(".s-main-slot .s-result-item")
      .first();
    await firstProduct.click();
    // await page.press("#twotabsearchtextbox", "Enter
    // await page.click(".s-result-item"); // click on the first search result
    await page.click("#add-to-cart-button"); // click on the "Add to Cart" button

    const proceedToCheckoutButton = await page.$(
      "#attachSiNoCoverage-ptc-btn-native"
    );
    if (proceedToCheckoutButton) {
      await proceedToCheckoutButton.click(); // click on the "Proceed to checkout" button
    }
  });
});
