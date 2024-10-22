import { chromium } from "playwright";
import { USER } from "@constants/generatedConst";
const { test, expect } = require("@playwright/test");

test.describe("Amazon Address Verification", () => {
  test("verify delivery address", async ({ page }) => {
    await page.goto("https://www.amazon.fr");

    await page.click("#nav-link-accountList");
    await page.fill("#ap_email", USER.EMAIL);
    await page.click("#continue");
    await page.fill("#ap_password", USER.PASSWORD);
    await page.click("#signInSubmit");

    await page.waitForTimeout(3000);
    await page.click("#nav-link-accountList");

    // Navigate to the "Your Addresses" page
    await page.goto("https://www.amazon.fr/a/addresses?ref_=ya_d_c_addr");

    // Verify the delivery address
    const deliveryAddress = await page.textContent(
      "#address-ui-widgets-AddressLineOne"
    );
    // console.log(
    //   await page.locator("#address-ui-widgets-AddressLineOne").innerText()
    // );
    let text = await page
      .locator("#address-ui-widgets-AddressLineOne")
      .nth(0)
      .innerText();
    text += await page
      .locator("#address-ui-widgets-CityStatePostalCode")
      .nth(0)
      .innerText();

    // Vérifiez que le texte est correct
    expect(text).toBe("8 Rue de la LibertéArnac-la-Poste, 87160");
    // console.log(`Delivery Address: ${deliveryAddress}`);
  });
});
