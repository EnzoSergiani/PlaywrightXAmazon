import { test } from "@fixtures/fixture";

test.describe("Rechercher un produit dans le moteur de recherche puis l’acheter", () => {
  test("Rechercher un produit dans le moteur de recherche puis l’acheter", async ({
    homePageAction,
    productAction,
    checkoutPageAction,
  }) => {
    await homePageAction.goToHomePage();
    await homePageAction.dislikeCookies();
    await productAction.searchProduct("laptop");
    await productAction.selectFirstProduct();
    await productAction.addProductToCart();
    await checkoutPageAction.goToCartPage();
    await checkoutPageAction.orderCart();
  });
});
