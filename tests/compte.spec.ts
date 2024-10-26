import { test } from "@fixtures/fixture";

test.describe("Tests sur un compte", () => {
  test("accès à la page principale.", async ({ homePageAction }) => {
    await homePageAction.goToHomePage();
  });
  test("création d'un compte.", async ({
    homePageAction,
    createAccountPageAction,
  }) => {
    await homePageAction.goToHomePage();
    await homePageAction.accessRegisterPage();
    await createAccountPageAction.register();
  });
  test("connexion à un compte.", async ({
    homePageAction,
    createAccountPageAction,
  }) => {
    await homePageAction.goToHomePage();
    await homePageAction.accessLoginPage();
    await createAccountPageAction.login();
  });

  test("tentative création de compte avec la même adresse mail.", async ({
    homePageAction,
    createAccountPageAction,
  }) => {
    await homePageAction.goToHomePage();
    await homePageAction.dislikeCookies();
    await homePageAction.accessRegisterPage();
    await createAccountPageAction.register(false);
    await createAccountPageAction.alertReuseEmail();
  });

  test("déconnexion.", async ({ homePageAction, createAccountPageAction }) => {
    await homePageAction.goToHomePage();
    await homePageAction.accessLoginPage();
    await createAccountPageAction.login();
    await new Promise((resolve) => setTimeout(resolve, 3000));
    await homePageAction.goToHomePage();
    await homePageAction.accessLogOut();
  });
});
