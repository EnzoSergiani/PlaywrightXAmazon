import { test, expect } from '@playwright/test';

test.describe("Rechercher un produit, le mettre dans le panier, voir le panier puis le supprimer", () => {
  test("Rechercher un produit, le mettre dans le panier, voir le panier puis le supprimer", async ({ page }) => {
    await page.goto("https://www.amazon.fr"); // on va sur amazon.fr
    await page.click("#sp-cc-rejectall-link"); // on refuse les cookies
    await page.fill("#twotabsearchtextbox", "souris"); // on met souris dans la barre de recherhe
    await page.click("#nav-search-submit-button"); // on clique sur le bouton de recherche
    const firstProduct = await page
      .locator(".s-main-slot .s-result-item")
      .first();
    await firstProduct.click(); // on clique sur le premier article trouvé
    await page.click("#add-to-cart-button"); // ajouter le produit au panier
    await page.click("#nav-cart"); // on clique sur le panier
    const deleteFromCart = await page
      .locator(".sc-action-delete")
      .first();
    await deleteFromCart.click(); // on supprime l'article du panier
  })
});