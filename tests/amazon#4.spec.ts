import { test } from "@fixtures/fixture";

test.describe("Vérifier les adresses de livraison", () => {
  test("Vérifier les adresses de livraison", async ({
    homePageAction,
    createAccountPageAction,
  }) => {
    await homePageAction.goToHomePage();
    await homePageAction.dislikeCookies();
    await homePageAction.goToDeliveryAddress();
    await new Promise((resolve) => setTimeout(resolve, 1000));
    await homePageAction.loginDeliveryAddress();
    await createAccountPageAction.login();
  });
});
