import { test } from "@fixtures/fixture";
import { USER } from "@constants/generatedConst";

test.describe("Tests sur la livraison", () => {
  test("Vérifier l'adresse de livraison (ID: livraison_001)", async ({
    homePageAction,
    createAccountPageAction,
  }) => {
    await homePageAction.goToHomePage();
    await homePageAction.dislikeCookies();
    await homePageAction.accessLoginPage();
    await createAccountPageAction.login();
    await new Promise((r) => setTimeout(r, 3000));
    await createAccountPageAction.goToDeliveryAddress();
    await createAccountPageAction.verifyDeliveryAddress(
      USER.ADDRESS,
      USER.CITY,
      USER.COUNTRY
    );
  });
});
