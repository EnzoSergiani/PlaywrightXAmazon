import { test } from "@fixtures/fixture";

test.describe("Passer une commande avec un register pendant le checkout", () => {
  test("Passer une commande avec un register pendant le checkout", async ({
    homePageAction,
    productAction,
    createAccountPageAction,
  }) => {
    await homePageAction.goToHomePage();
    await homePageAction.dislikeCookies();
    await productAction.searchProduct("laptop");
    await productAction.selectFirstProduct();
    await productAction.buyProduct();
    await createAccountPageAction.register();
    const checkEmailMessage = await homePageAction.page.locator(
      "text=Créer un compte"
    );
    await expect(checkEmailMessage).toHaveCount(0);
  });
});
