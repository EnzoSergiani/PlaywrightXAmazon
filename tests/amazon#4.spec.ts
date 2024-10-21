import { test } from "./poms/fixture";

function delay(milliseconds) {
  return new Promise((resolve) => {
    setTimeout(resolve, milliseconds);
  });
}

test.describe("Vérifier les adresses de livraison", () => {
  test("Vérifier les adresses de livraison", async ({ homePageAction }) => {
    await homePageAction.navigateToHomePage();
    await homePageAction.dislikeCookies();
    await homePageAction.goToDeliveryAddress();
    await delay(1000);
    await homePageAction.loginDeliveryAddress();
  });
});
