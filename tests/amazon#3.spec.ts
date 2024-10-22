import { test } from "@fixtures/fixture";

test.describe("Acheter les produits fréquemment achetés ensemble", () => {
  test("Acheter les produits fréquemment achetés ensemble", async ({
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
