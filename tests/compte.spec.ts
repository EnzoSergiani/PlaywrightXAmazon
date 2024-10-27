import { test } from "@fixtures/fixture";

test.describe("Tests sur un compte", () => {
  test("Accès à la page principale (ID: compte_001)", async ({
    homePageAction,
  }) => {
    await homePageAction.goToHomePage();
  });
  test("Création d'un compte (ID: compte_002)", async ({
    homePageAction,
    createAccountPageAction,
  }) => {
    await homePageAction.goToHomePage();
    await homePageAction.accessRegisterPage();
    await createAccountPageAction.register();
  });
  test("Connexion à un compte (ID: compte_003)", async ({
    homePageAction,
    createAccountPageAction,
  }) => {
    await homePageAction.goToHomePage();
    await homePageAction.accessLoginPage();
    await createAccountPageAction.login();
  });

  test("Tentative création de compte avec la même adresse mail (ID: compte_004)", async ({
    homePageAction,
    createAccountPageAction,
  }) => {
    await homePageAction.goToHomePage();
    await homePageAction.dislikeCookies();
    await homePageAction.accessRegisterPage();
    await createAccountPageAction.register(false);
    await createAccountPageAction.alertReuseEmail();
  });

  test("Déconnexion (ID: compte_005)", async ({
    homePageAction,
    createAccountPageAction,
  }) => {
    await homePageAction.goToHomePage();
    await homePageAction.accessLoginPage();
    await createAccountPageAction.login();
    await new Promise((resolve) => setTimeout(resolve, 3000));
    await homePageAction.goToHomePage();
    await homePageAction.accessLogOut();
  });
});
