import { test, expect } from '@playwright/test';
import { USER } from "./generatedConst";

test.describe("Passer une commande avec un login pendant le checkout", () => {
  test("Passer une commande avec un login pendant le checkout", async ({ page }) => {
    await page.goto("https://www.amazon.fr"); // on va sur amazon.fr
    await page.click("#sp-cc-rejectall-link"); // on refuse les cookies
    await page.fill("input[name='field-keywords']", "laptop"); // on recherche un article
    await page.click('input.nav-input[type="submit"]'); // on effectue la recherche
    const firstProduct = await page
      .locator(".s-main-slot .s-result-item")
      .first();
    await firstProduct.click(); // on clique sur le premier article trouvé
    await page.click("#buy-now-button"); // acheter le produit
    await page.fill("#ap_email", USER.EMAIL); // on entre l'email
    await page.click("#continue"); // on clique sur continuer
    await page.fill("#ap_password", USER.PASSWORD); // on entre le mot de passe
    await page.click("#auth-signin-button"); // on clique sur s'identifier
  });
});