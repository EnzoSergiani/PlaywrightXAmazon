import { test, expect } from '@playwright/test';
import { HomePage } from './pages/home_page';
import { ProductPage } from './pages/fiche_produit';
import { CartPage } from './pages/cart_page';

test.describe("Rechercher un produit, le mettre dans le panier, voir le panier puis le supprimer", () => {
  test("Rechercher un produit, le mettre dans le panier, voir le panier puis le supprimer", async ({ page }) => {
    const homePage = new HomePage(page);
    const productPage = new ProductPage(page);
    const cartPage = new CartPage(page);
    
    await homePage.navigate(); // on va sur amazon.fr
    await homePage.noCookies(); // on refuse les cookies
    await homePage.searchForItem("laptop"); // on fait une recherche
    await homePage.clickOnFirstProduct(); // on clique sur le premier article trouvé
    await productPage.addToCart(); // ajouter le produit au panier
    await homePage.clickCart(); // on clique sur le panier
    await cartPage.deleteFromCart(); // on supprime l'article du panier
    const emptyCartMessage = await page.locator('text=Votre panier Amazon est vide');
    await expect(emptyCartMessage).toBeVisible(); // on vérifie que le panier est vide
  })
});