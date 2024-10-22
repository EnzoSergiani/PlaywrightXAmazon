import { test } from "@fixtures/fixture";

test.describe("Passer une commande avec un login pendant le checkout", () => {
  test("Passer une commande avec un login pendant le checkout", async ({
    homePageAction,
    productAction,
  }) => {
    await homePageAction.navigateToHomePage();
    await homePageAction.dislikeCookies();
    await productAction.searchProduct("laptop");
    await productAction.selectFirstProduct();
    await productAction.buyIt();
    await homePageAction.login();
  });
});
