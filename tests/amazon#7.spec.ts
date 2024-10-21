import { test, expect } from "./poms/fixture";

test.describe("Passer une commande avec un register pendant le checkout", () => {
  test("Passer une commande avec un register pendant le checkout", async ({
    homePageAction,
    productAction,
    accountAction,
  }) => {
    await homePageAction.navigateToHomePage();
    await homePageAction.dislikeCookies();
    await productAction.searchProduct("laptop");
    await productAction.clickOnFirstProduct();
    await productAction.buyProduct();
    await accountAction.register();
    const checkEmailMessage = await homePageAction.page.locator("text=Créer un compte");
    await expect(checkEmailMessage).toHaveCount(0);
  });
});