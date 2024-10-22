import { test } from "@fixtures/fixture";
import { NEW_USER } from "@constants/generatedConst";

test.describe("Passer une commande avec un register pendant le checkout", () => {
  test("Passer une commande avec un register pendant le checkout", async ({
    page,
  }) => {
    await page.goto("https://www.amazon.fr"); // on va sur amazon.fr
    await page.click("#sp-cc-rejectall-link"); // on refuse les cookies
    await page.fill("input[name='field-keywords']", "laptop"); // on recherche un article
    await page.click('input.nav-input[type="submit"]'); // on effectue la recherche
    const firstProduct = await page
      .locator(".s-main-slot .s-result-item")
      .first();
    await firstProduct.click(); // on clique sur le premier article trouvé
    await page.click("#buy-now-button"); // acheter le produit
    await page.click("#createAccountSubmit"); //cliquer sur le bouton de création de compte
    await page.fill("#ap_customer_name", NEW_USER.NAME);
    await page.fill("#ap_email", NEW_USER.EMAIL);
    await page.fill("#ap_password", NEW_USER.PASSWORD);
    await page.fill("#ap_password_check", NEW_USER.PASSWORD);
    await page.click("#continue");
  });
});
