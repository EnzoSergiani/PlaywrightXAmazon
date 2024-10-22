import { test } from "./poms/fixture";

test.describe("Vérifier les adresses de livraison", () => {
  test("Vérifier les adresses de livraison", async ({ homePageAction }) => {
    await homePageAction.navigateToHomePage();
    await homePageAction.dislikeCookies();
    await homePageAction.goToDeliveryAddress();
    await new Promise((resolve) => setTimeout(resolve, 1000));
    await homePageAction.loginDeliveryAddress();
  });
});
