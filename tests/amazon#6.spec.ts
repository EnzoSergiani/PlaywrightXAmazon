import { test, expect } from "@playwright/test";
import { faker } from "@faker-js/faker";

test.describe("Amazon Search Testing", () => {
    test("access to the search page", async ({ page }) => {
      await page.goto("https://www.amazon.fr");
      await page.fill("#twotabsearchtextbox", "mac mini m1"); //remplir le champ de recherche
      await page.click("#sp-cc-accept"); //cliquer sur accepter les cookies
      await page.click("#nav-search-submit-button"); //cliquer sur le bouton de recherche
    });
  });
  
  test.describe("Amazon Cart Testing", () => {
    test("access to the cart page", async ({ page }) => {
      await page.goto("https://www.amazon.fr");
      await page.fill("#twotabsearchtextbox", "mac mini m1"); //remplir le champ de recherche
      await page.click("#sp-cc-accept"); //cliquer sur accepter les cookies
      await page.click("#nav-search-submit-button"); //cliquer sur le bouton de recherche
      const firstProduct = await page
      .locator(".s-main-slot .s-result-item")
      .first();
      await firstProduct.click();   //cliquer sur le premier produit
      await page.click("#add-to-cart-button"); //ajouter au panier
    });
  });
  
  test.describe("Amazon Payment Testing", () => {
    test("access to the payment page", async ({ page }) => {
      await page.goto("https://www.amazon.fr");
      await page.fill("#twotabsearchtextbox", "mac mini m1"); //remplir le champ de recherche
      await page.click("#sp-cc-accept"); //cliquer sur accepter les cookies
      await page.click("#nav-search-submit-button"); //cliquer sur le bouton de recherche
      const firstProduct = await page
      .locator(".s-main-slot .s-result-item")
      .first();
      await firstProduct.click();   //cliquer sur le premier produit
      await page.click("#add-to-cart-button"); //ajouter au panier
      await page.click("#sc-buy-box-ptc-button"); //passer à la caisse
      //utilisation de faker pour remplir les champs
        await page.fill("#ap_email", faker.internet.email());
        await page.click("#continue");
        await page.fill("#ap_password", faker.internet.password());
        await page.click("#signInSubmit");
        
    });
  });
