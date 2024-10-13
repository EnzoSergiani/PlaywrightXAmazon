const { test, expect } = require("@playwright/test");

// test("<description_du_test>", async ({ page }) => {
//   //...    // await page.fill("#ap_email", "your-email@example.com");
// await page.click("#continue");
// await page.fill("#ap_password", "your-password");
// await page.click("#signInSubmit");
// });

test.describe("Amazon Feature Testing", () => {
  test("access to the page", async ({ page }) => {
    await page.goto("https://www.amazon.com/");
  });
});

test.describe("Amazon Login Testing", () => {
  test("access to the login page", async ({ page }) => {
    await page.goto("https://www.amazon.com");
    await page.click("#nav-link-accountList"); //! fonctione sur firefox mais pas sur chrome
    await page.fill("#ap_email", "your-email@example.com");
    await page.click("#continue");
    await page.fill("#ap_password", "your-password");
    await page.click("#signInSubmit");
  });
});
