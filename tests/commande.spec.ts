import { test } from "@fixtures/fixture";

test.describe("Tests sur une commande", () => {
  test("acheter les produits fréquemment achetés ensemble", async ({
    homePageAction,
    productAction,
    checkoutPageAction,
    createAccountPageAction,
  }) => {
    await homePageAction.goToHomePage();
    await homePageAction.dislikeCookies();
    await productAction.searchProduct("laptop");
    await productAction.selectFirstProduct();
    await productAction.addFrequentProductToCart();
    await checkoutPageAction.goToCartPage();
    await checkoutPageAction.orderCart();
    await createAccountPageAction.login();
  });
  test("passer une commande avec un login pendant le checkout", async ({
    homePageAction,
    productAction,
    createAccountPageAction,
  }) => {
    await homePageAction.goToHomePage();
    await homePageAction.dislikeCookies();
    await productAction.searchProduct("laptop");
    await productAction.selectFirstProduct();
    await productAction.buyProduct();
    await createAccountPageAction.login();
  });
  test("rechercher un produit dans le moteur de recherche puis l’acheter", async ({
    homePageAction,
    productAction,
    checkoutPageAction,
  }) => {
    await homePageAction.goToHomePage();
    await homePageAction.dislikeCookies();
    await productAction.searchProduct("laptop");
    await productAction.selectFirstProduct();
    await productAction.addProductToCart();
    await checkoutPageAction.goToCartPage();
    await checkoutPageAction.orderCart();
    await productAction.proceedToRetailCheckout();
  });
  test("vérification du panier", async ({
    homePageAction,
    productAction,
    checkoutPageAction,
  }) => {
    await homePageAction.goToHomePage();
    await homePageAction.dislikeCookies();
    await productAction.searchProduct("souris");
    await productAction.selectFirstProduct();
    await productAction.setQuantityTo(2);
    await productAction.addProductToCart();
    await checkoutPageAction.checkQuantity(2);
  });
  test("vérification du prix total du panier", async ({
    homePageAction,
    productAction,
    checkoutPageAction,
  }) => {
    await homePageAction.goToHomePage();
    await homePageAction.dislikeCookies();
    await productAction.searchProduct("Disque dur");
    await productAction.selectFirstProduct();
    const quantity = 2;
    await productAction.setQuantityTo(quantity);
    const unitPrice = await productAction.getPrice();
    const expectedTotalPrice = unitPrice * quantity;
    await productAction.addProductToCart();
    await checkoutPageAction.goToCartPage();
    await checkoutPageAction.checkTotalPrice(expectedTotalPrice);
  });
  test("mettre un article de côté", async ({
    homePageAction,
    productAction,
    checkoutPageAction,
  }) => {
    await homePageAction.goToHomePage();
    await homePageAction.dislikeCookies();
    await productAction.searchProduct("Disque dur");
    await productAction.selectFirstProduct();
    await productAction.addProductToCart();
    await checkoutPageAction.goToCartPage();
    await checkoutPageAction.saveForLater();
    await checkoutPageAction.goToCartPage();
    await new Promise((r) => setTimeout(r, 2000));
    await checkoutPageAction.checkQuantity(0);
  });
  test("remettre l'article dans le panier", async ({
    homePageAction,
    productAction,
    checkoutPageAction,
  }) => {
    await homePageAction.goToHomePage();
    await homePageAction.dislikeCookies();
    await productAction.searchProduct("Disque dur");
    await productAction.selectFirstProduct();
    await productAction.addProductToCart();
    await checkoutPageAction.goToCartPage();
    await checkoutPageAction.saveForLater();
    await new Promise((r) => setTimeout(r, 2000));
    await checkoutPageAction.moveSavedProductToCart();
    await checkoutPageAction.goToCartPage();
    await new Promise((r) => setTimeout(r, 2000));
    await checkoutPageAction.checkQuantity(1);
  });
});
