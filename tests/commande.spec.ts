import { test, expect } from "@fixtures/fixture";

test.describe("Tests sur une commande", () => {
  test("Acheter les produits fréquemment achetés ensemble (ID: commande_001)", async ({
    homePageAction,
    productAction,
    checkoutPageAction,
    createAccountPageAction,
  }) => {
    await homePageAction.goToHomePage();
    await homePageAction.dislikeCookies();
    await productAction.searchProduct("disque dur");
    await productAction.selectFirstProduct();
    await productAction.addFrequentProductToCart();
    await checkoutPageAction.goToCartPage();
    await checkoutPageAction.orderCart();
    await createAccountPageAction.login();
  });
  test("Passer une commande avec un login pendant le checkout (ID: commande_002)", async ({
    homePageAction,
    productAction,
    createAccountPageAction,
  }) => {
    await homePageAction.goToHomePage();
    await homePageAction.dislikeCookies();
    await productAction.searchProduct("badge");
    await productAction.selectFirstProduct();
    await productAction.buyProduct();
    await createAccountPageAction.login();
  });
  test("Rechercher un produit dans le moteur de recherche puis l’acheter (ID: commande_003)", async ({
    homePageAction,
    productAction,
    createAccountPageAction,
    checkoutPageAction,
  }) => {
    await homePageAction.goToHomePage();
    await homePageAction.dislikeCookies();
    await productAction.searchProduct("nintendo switch");
    await productAction.selectFirstProduct();
    await productAction.addProductToCart();
    await checkoutPageAction.goToCartPage();
    await checkoutPageAction.orderCart();
    await createAccountPageAction.login();
  });
  test("Vérification du panier (ID: commande_004)", async ({
    homePageAction,
    productAction,
    checkoutPageAction,
  }) => {
    await homePageAction.goToHomePage();
    await homePageAction.dislikeCookies();
    await productAction.searchProduct("disque dur");
    await productAction.selectFirstProduct();
    await productAction.setQuantityTo(2);
    await productAction.addProductToCart();
    await checkoutPageAction.checkQuantity(2);
  });
  test("Vérification du prix total du panier (ID: commande_005)", async ({
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
    await new Promise((r) => setTimeout(r, 2000));
    const unitPrice = await productAction.getPrice();
    const expectedTotalPrice = unitPrice * quantity;
    await productAction.addProductToCart();
    await checkoutPageAction.goToCartPage();
    await checkoutPageAction.checkTotalPrice(expectedTotalPrice);
  });
  test("Mettre un article de côté (ID: commande_006)", async ({
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
  test("Remettre un article dans le panier (ID: commande_007)", async ({
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
  test("Supprimer un produit du panier (ID: commande_008)", async ({
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
    await checkoutPageAction.deleteProductInCart();
    await new Promise((r) => setTimeout(r, 2000));
    const emptyCartMessage = await checkoutPageAction.getEmptyCartMessage();
    expect(emptyCartMessage?.trim()).toBe("Votre panier Amazon est vide");
  });
  test("Supprimer un produit du panier > actualisation du panier (ID: commande_009)", async ({
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
    await checkoutPageAction.deleteProductInCart();
    await new Promise((r) => setTimeout(r, 2000));
    await checkoutPageAction.checkQuantity(0);
  });
});
