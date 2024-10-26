import { test } from "@fixtures/fixture";

test.describe("Tests sur un produit", () => {
  test("rechercher un produit, le mettre dans le panier, voir le panier puis le supprimer", async ({
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
  test("acheter les produits fréquemment achetés ensemble", async ({
    homePageAction,
    productAction,
    checkoutPageAction,
    createAccountPageAction,
  }) => {
    await homePageAction.goToHomePage();
    await homePageAction.dislikeCookies();
    await productAction.searchProduct("laptop");
    await productAction.selectFirstProduct();
    await productAction.addFrequentProductToCart();
    await checkoutPageAction.goToCartPage();
    await checkoutPageAction.orderCart();
    await createAccountPageAction.login();
  });
});
