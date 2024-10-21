import { test } from "./poms/fixture";

test.describe("Rechercher un produit, le mettre dans le panier, voir le panier puis le supprimer", () => {
  test("Rechercher un produit, le mettre dans le panier, voir le panier puis le supprimer", async ({
    homePageAction,
    productAction,
  }) => {
    await homePageAction.navigateToHomePage();
    await homePageAction.dislikeCookies();
    await productAction.searchProduct("souris");
    await productAction.addFirstProductToCart();
    await productAction.goToCartPage();
    await productAction.deleteProductInBasket();
  });
});
