// import { test, expect } from '@playwright/test';
import { test } from "./poms/fixture";
import { USER } from "./generatedConst";

/*
test.describe("Acheter les produits fréquemment achetés ensemble", () => {
  test("Acheter les produits fréquemment achetés ensemble", async ({
    page,
  }) => {
    await page.goto("https://www.amazon.fr"); // on va sur amazon.fr
    await page.click("#sp-cc-rejectall-link"); // on refuse les cookies
    await page.fill("input[name='field-keywords']", "laptop"); // on recherche un article
    await page.click('input.nav-input[type="submit"]'); // on effectue la recherche
    const firstProduct = await page
      .locator(".s-main-slot .s-result-item")
      .first();
    await firstProduct.click(); // on clique sur le premier article trouvé
    await page.click("#AddToCartLibrary-AddToCartButton-Personalization"); // on ajoute les produits fréquemment achetés ensemble au panier
    await page.click("#nav-cart"); // on accède au panier
    await page.click("#sc-buy-box-ptc-button"); // on passe la commande
    await page.fill("#ap_email", USER.EMAIL); // on entre l'email
    await page.click("#continue"); // on clique sur continuer
    await page.fill("#ap_password", USER.PASSWORD); // on entre le mot de passe
    await page.click("#auth-signin-button"); // on clique sur s'identifier
  });
});
*/

test.describe("Acheter les produits fréquemment achetés ensemble", () => {
  test("Acheter les produits fréquemment achetés ensemble", async ({
    homePageAction,
    productAction,
  }) => {
    await homePageAction.navigateToHomePage();
    await homePageAction.dislikeCookies();
    await productAction.searchProduct("laptop");
    await productAction.clickOnFirstProduct();
    await productAction.addFrequentProductToCart();
    await productAction.goToCartPage();
    await homePageAction.command();
    await homePageAction.login();
  });
});
