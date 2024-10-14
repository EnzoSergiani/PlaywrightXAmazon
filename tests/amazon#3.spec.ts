import { test, expect } from '@playwright/test';

test.describe("Acheter les produits fréquemment achetés ensemble", () => {
  test("Acheter les produits fréquemment achetés ensemble", async ({ page }) => {
    await page.goto("https://www.amazon.fr"); // on va sur amazon.fr
    await page.click("#sp-cc-rejectall-link"); // on refuse les cookies
    await page.fill("input[name='field-keywords']", "laptop"); // on recherche un article
    await page.click('input.nav-input[type="submit"]'); // on effectue la recherche
    const firstProduct = await page
      .locator(".s-main-slot .s-result-item")
      .first();
    await firstProduct.click(); // on clique sur le premier article trouvé
    await page.click("#AddToCartLibrary-AddToCartButton-Personalization"); // on ajoute les produits fréquemment achetés ensemble au panier
    await page.click("#nav-cart"); // on accède au panier
    await page.click("#sc-buy-box-ptc-button"); // on passe la commande
  });
});