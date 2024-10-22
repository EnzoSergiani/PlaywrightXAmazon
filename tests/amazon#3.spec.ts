import { test } from "@fixtures/fixture";

test.describe("Acheter les produits fréquemment achetés ensemble", () => {
  test("Acheter les produits fréquemment achetés ensemble", async ({
    homePageAction,
    productAction,
  }) => {
    await homePageAction.navigateToHomePage();
    await homePageAction.dislikeCookies();
    await productAction.searchProduct("laptop");
    await productAction.selectFirstProduct();
    await productAction.addFrequentProductToCart();
    await productAction.goToCartPage();
    await productAction.orderCart();
    await homePageAction.login();
  });
});
