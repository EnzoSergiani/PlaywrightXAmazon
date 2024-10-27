import { test } from "@fixtures/fixture";

test.describe("Tests sur un produit", () => {
  test("Rechercher un produit, le mettre dans le panier, voir le panier puis le supprimer (ID: produit_001)", async ({
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
  test("Acheter les produits fréquemment achetés ensemble (ID: produit_002)", async ({
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
