import { test, expect } from '@playwright/test';
import { USER } from "./generatedConst";

function delay(milliseconds){
  return new Promise(resolve => {
      setTimeout(resolve, milliseconds);
  });
}

test.describe("Vérifier les adresses de livraison", () => {
  test("Vérifier les adresses de livraison", async ({ page }) => {
    await page.goto("https://www.amazon.fr"); // on va sur amazon.fr
    await page.click("#sp-cc-rejectall-link"); // on refuse les cookies
    await page.click("#nav-global-location-popover-link"); // on clique sur l'adresse de livraison
    await delay(1000); // on attend 1 seconde le temps que ça charge
    await page.click("#GLUXSignInButton"); // on clique sur s'identifier
    await page.fill("#ap_email", USER.EMAIL); // on entre l'email
    await page.click("#continue"); // on clique sur continuer
    await page.fill("#ap_password", USER.PASSWORD); // on entre le mot de passe
    await page.click("#auth-signin-button"); // on clique sur s'identifier
  });
});