import { test, expect } from '@playwright/test';

test.describe("Rechercher un produit, le mettre dans le panier, voir le panier puis le supprimer", () => {
  test("Rechercher un produit, le mettre dans le panier, voir le panier puis le supprimer", async ({ page }) => {
    await page.goto("https://www.amazon.fr"); // on va sur amazon.fr
    await page.click("#sp-cc-rejectall-link"); // on refuse les cookies
    await page.fill("#twotabsearchtextbox", "souris"); // on met souris dans la barre de recherhe
    await page.click("#nav-search-submit-button"); // on clique sur le bouton de recherche
    await page.click("#a-autoid-7-announce"); // on ajoute le premier article au panier
    await page.click("#nav-cart"); // on clique sur le panier
    await page.click(".sc-action-delete"); // on supprime l'article du panier
  })
});