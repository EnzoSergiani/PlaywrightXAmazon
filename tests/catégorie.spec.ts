import { test } from "@fixtures/fixture";

test.describe("Tests sur une catégorie", () => {
  test("accéder à une catégorie spécifique", async ({
    homePageAction,
    categoryPageAction,
  }) => {
    await homePageAction.goToHomePage();
    await homePageAction.dislikeCookies();
    await categoryPageAction.openMenu();
    await categoryPageAction.selectCategory("High-Tech");
    // await categoryPageAction.selectSubCategory("Objets connectés");
  });
});
