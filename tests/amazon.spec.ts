<<<<<<< HEAD
const { test, expect } = require("@playwright/test");

// test("<description_du_test>", async ({ page }) => {
//   //...    // await page.fill("#ap_email", "your-email@example.com");
// await page.click("#continue");
// await page.fill("#ap_password", "your-password");
// await page.click("#signInSubmit");
// });

test.describe("Amazon Feature Testing", () => {
  test("access to the page", async ({ page }) => {
    await page.goto("https://www.amazon.fr/");
  });
});

test.describe("Amazon Login Testing", () => {
  test("access to the login page", async ({ page }) => {
    await page.goto("https://www.amazon.fr");
    await page.click("#nav-link-accountList"); //! fonctione sur firefox mais pas sur chrome
    await page.fill("#ap_email", "your-email@example.com");
    await page.click("#continue");
    await page.fill("#ap_password", "your-password");
    await page.click("#signInSubmit");
  });
});

test.describe("Amazon Search Testing", () => {
  test("access to the search page", async ({ page }) => {
    await page.goto("https://www.amazon.fr");
    await page.fill("#twotabsearchtextbox", "mac mini m1"); //remplir le champ de recherche
    await page.click("#sp-cc-accept"); //cliquer sur accepter les cookies
    await page.click("#nav-search-submit-button"); //cliquer sur le bouton de recherche
  });
});

test.describe("Amazon Cart Testing", () => {
  test("access to the cart page", async ({ page }) => {
    await page.goto("https://www.amazon.fr");
    await page.fill("#twotabsearchtextbox", "mac mini m1"); //remplir le champ de recherche
    await page.click("#sp-cc-accept"); //cliquer sur accepter les cookies
    await page.click("#nav-search-submit-button"); //cliquer sur le bouton de recherche
    const firstProduct = await page
    .locator(".s-main-slot .s-result-item")
    .first();
    await firstProduct.click();   //cliquer sur le premier produit
    await page.click("#add-to-cart-button"); //ajouter au panier
  });
});

test.describe("Amazon Payment Testing", () => {
  test("access to the payment page", async ({ page }) => {
    await page.goto("https://www.amazon.fr");
    await page.fill("#twotabsearchtextbox", "mac mini m1"); //remplir le champ de recherche
    await page.click("#sp-cc-accept"); //cliquer sur accepter les cookies
    await page.click("#nav-search-submit-button"); //cliquer sur le bouton de recherche
    const firstProduct = await page
    .locator(".s-main-slot .s-result-item")
    .first();
    await firstProduct.click();   //cliquer sur le premier produit
    await page.click("#add-to-cart-button"); //ajouter au panier
    await page.click("#sc-buy-box-ptc-button"); //passer à la caisse
  });
});
=======
>>>>>>> main
