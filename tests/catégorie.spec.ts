import { th } from "@faker-js/faker/.";
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

  test("Trier les produits par prix croissant (ID: produit_003)", async ({
    homePageAction,
    productAction,
    checkoutPageAction,
    categoryPageAction,
  }) => {
    await homePageAction.goToHomePage();
    await homePageAction.dislikeCookies();
    await productAction.searchProduct("Lego");
    await new Promise((r) => setTimeout(r, 2000));
    await categoryPageAction.sortByPriceAsc();

    // Comparaison des prix des deux premiers produits
    const allPrices = await productAction.getAllProductPrices();
    if(allPrices[1] < allPrices[0]) {
      throw new Error("Le premier produit n'est pas le moins cher.");
    } 
  })

  test("Trier les produits par prix decroissant (ID: produit_004)", async ({
    homePageAction,
    productAction,
    checkoutPageAction,
    categoryPageAction,
  }) => {
    await homePageAction.goToHomePage();
    await homePageAction.dislikeCookies();
    await productAction.searchProduct("Lego");
    await new Promise((r) => setTimeout(r, 2000));
    await categoryPageAction.sortByPriceDesc();

    // Comparaison des prix des deux premiers produits
    const allPrices = await productAction.getAllProductPrices();
    if(allPrices[1] > allPrices[0]) {
      throw new Error("Le premier produit n'est pas le plus cher.");
    }
  })

  test("Trier par les commentaires clients (ID: produit_005)", async ({
    homePageAction,
    productAction,
    checkoutPageAction,
    categoryPageAction,
  }) => {
    await homePageAction.goToHomePage();
    await homePageAction.dislikeCookies();
    await productAction.searchProduct("Poubelle");
    await new Promise((r) => setTimeout(r, 2000));
    await categoryPageAction.sortByPriceDesc();
    await new Promise((r) => setTimeout(r, 2000));
    await categoryPageAction.sortByRate();

    const allProductRatings = await productAction.getAllProductRatings();
    if(await !checkoutPageAction.checkPricesAreDescending(allProductRatings)) {
      throw new Error("Les produits ne sont pas triés par note des clients.");
    }
  })

});
