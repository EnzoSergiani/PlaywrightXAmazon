import { test, expect } from '@playwright/test';
import { USER } from "./generatedConst";
import { HomePage } from './pages/home_page';
import { ProductPage } from './pages/fiche_produit';
import { CartPage } from './pages/cart_page';

test.describe("Acheter les produits fréquemment achetés ensemble", () => {
  test("Acheter les produits fréquemment achetés ensemble", async ({ page }) => {
    const homePage = new HomePage(page);
    const productPage = new ProductPage(page);
    const cartPage = new CartPage(page);

    await homePage.navigate(); // on va sur amazon.fr
    await homePage.noCookies(); // on refuse les cookies
    await homePage.searchForItem("laptop"); // on recherche un article
    await homePage.clickOnFirstProduct(); // on clique sur le premier article trouvé
    await productPage.buyArticlesFrequentlyBoughtTogether(); // on ajoute les produits fréquemment achetés ensemble au panier
    await homePage.clickCart(); // on accède au panier
    await cartPage.buy(); // on passe la commande
    await page.fill("#ap_email", USER.EMAIL); // on entre l'email
    await page.click("#continue"); // on clique sur continuer
    await page.fill("#ap_password", USER.PASSWORD); // on entre le mot de passe
    await page.click("#auth-signin-button"); // on clique sur s'identifier
  });
});