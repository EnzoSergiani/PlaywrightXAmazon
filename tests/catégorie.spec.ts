import { test } from "@fixtures/fixture";

test.describe("Tests sur une catégorie", () => {
  test("accéder à un section et sous-section spécifique (ID: catégorie_001)", async ({
    homePageAction,
    categoryPageAction,
  }) => {
    await homePageAction.goToHomePage();
    await homePageAction.dislikeCookies();
    await categoryPageAction.openMenu();
    await categoryPageAction.selectSection("High-Tech");
    await categoryPageAction.selectSubSection("Objets connectés");
  });

  test("rechercher un produit puis filtrer avec une marque (ID: catégorie_002)", async ({
    homePageAction,
    productAction,
    categoryPageAction,
  }) => {
    await homePageAction.goToHomePage();
    await homePageAction.dislikeCookies();
    await productAction.searchProduct("souris");
    await categoryPageAction.filterBrand("Logitech");
  });
});
