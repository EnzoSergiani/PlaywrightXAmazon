import { test, expect } from "./poms/fixture";

test.describe("Rechercher un produit, le mettre dans le panier, voir le panier puis le supprimer", () => {
  test("Rechercher un produit, le mettre dans le panier, voir le panier puis le supprimer", async ({
    homePageAction,
    productAction,
  }) => {
    await homePageAction.navigateToHomePage();
    await homePageAction.dislikeCookies();
    await productAction.searchProduct("laptop");
    await productAction.clickOnFirstProduct();
    await productAction.addToCart();
    await productAction.goToCartPage();
    await productAction.deleteProductInBasket();
    const emptyCartMessage = await homePageAction.page.locator('text=Votre panier Amazon est vide');
    await expect(emptyCartMessage).toBeVisible();
  });
});