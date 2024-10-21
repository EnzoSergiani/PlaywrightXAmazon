import { test } from "./poms/fixture";

test.describe("Create a new user", () => {
  test("access to the page", async ({ homePageAction }) => {
    await homePageAction.navigateToHomePage();
  });
  test("access to the register page", async ({ homePageAction }) => {
    await homePageAction.navigateToHomePage();
    await homePageAction.accessRegisterPage();
    await homePageAction.register();
  });
  test("access to the login page", async ({ homePageAction }) => {
    await homePageAction.navigateToHomePage();
    await homePageAction.accessLoginPage();
    await homePageAction.login();
  });
});

test.describe("log out", () => {
  test("access to the login page and log out", async ({ homePageAction }) => {
    await homePageAction.navigateToHomePage();
    await homePageAction.accessLoginPage();
    await new Promise((resolve) => setTimeout(resolve, 3000));
    await homePageAction.navigateToHomePage();
    await homePageAction.accessLogOut();
  });
});
