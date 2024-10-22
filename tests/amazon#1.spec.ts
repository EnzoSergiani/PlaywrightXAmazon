import { test } from "@fixtures/fixture";

test.describe("Create a new user", () => {
  test("access to the page", async ({ homePageAction }) => {
    await homePageAction.goToHomePage();
  });
  test("access to the register page", async ({
    homePageAction,
    createAccountPageAction,
  }) => {
    await homePageAction.goToHomePage();
    await homePageAction.accessRegisterPage();
    await createAccountPageAction.register();
  });
  test("access to the login page", async ({
    homePageAction,
    createAccountPageAction,
  }) => {
    await homePageAction.goToHomePage();
    await homePageAction.accessLoginPage();
    await createAccountPageAction.login();
  });

  test("create an account with the same email", async ({
    homePageAction,
    createAccountPageAction,
  }) => {
    await homePageAction.goToHomePage();
    await homePageAction.accessRegisterPage();
    await createAccountPageAction.register();
    await createAccountPageAction.alertReuseEmail();
  });

  test.describe("log out", () => {
    test("access to the login page and log out", async ({
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
});
