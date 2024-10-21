/*import { test, expect } from "@playwright/test";
import { faker } from "@faker-js/faker";

test("rechercher un produit dans le moteur de recherche puis l’acheter", async ({
  page,
}) => {
  await page.goto("https://www.amazon.fr"); // on va sur amazon.fr

  await page.fill("input[name='field-keywords']", "laptop"); // on met laptop dans la barre de recherche
  await page.click('input.nav-input[type="submit"]'); // on clique sur le bouton de recherche
  const firstProduct = await page // on ajoute le premier article au panier
    .locator(".s-main-slot .s-result-item")
    .first();
  await firstProduct.click(); // on clique sur le premier article
  await page.click("#add-to-cart-button"); // on ajoute le premier article au panier
  await page.click("input[name='proceedToRetailCheckout']"); // on clique sur le bouton pour acheter
});*/

import { test, expect } from "./poms/fixture";

test.describe("Rechercher un produit dans le moteur de recherche puis l’acheter", () => {
  test("Rechercher un produit dans le moteur de recherche puis l’acheter", async ({
    homePageAction,
    productAction,
    accountAction,
  }) => {
    await homePageAction.navigateToHomePage();
    await homePageAction.dislikeCookies();
    await productAction.searchProduct("laptop");
    await productAction.clickOnFirstProduct();
    await productAction.addToCart();
    await productAction.proceedToRetailCheckout();
  });
});