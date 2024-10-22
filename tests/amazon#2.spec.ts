import { test } from "@fixtures/fixture";

test.describe("Rechercher un produit, le mettre dans le panier, voir le panier puis le supprimer", () => {
  test("Rechercher un produit, le mettre dans le panier, voir le panier puis le supprimer", async ({
    homePageAction,
    productAction,
    checkoutPageAction,
  }) => {
    await homePageAction.goToHomePage();
    await homePageAction.dislikeCookies();
    await productAction.searchProduct("souris");
    await productAction.selectFirstProduct();
    await productAction.addProductToCart();
    await checkoutPageAction.goToCartPage();
    await await new Promise((resolve) => setTimeout(resolve, 2000));
    await checkoutPageAction.deleteProductInCart();
  });
});
