import { test, expect } from '@playwright/test';
import { HomePage } from './pages/home_page';

test.describe("Vérification panier", () => {
    test("Vérifier nombre acticle panier", async ({ page }) => {
        const homePage = new HomePage(page);

        await homePage.navigate();
        await page.click("#sp-cc-rejectall-link"); // on refuse les cookies
        await page.fill("#twotabsearchtextbox", "souris"); // on met souris dans la barre de recherhe
        await page.click("#nav-search-submit-button"); // on clique sur le bouton de recherche
        const firstProduct = await page
            .locator(".s-main-slot .s-result-item")
            .first();

        await page.waitForTimeout(2000);
        await firstProduct.click(); // on clique sur le premier article trouvé
        // on modifie la quantité de l'article à 2
        await page.click("#quantityRelocate_feature_div");
        await page.click("#quantity_1");
        await page.click("#add-to-cart-button"); // ajouter le produit au panier
        expect(await page.locator("#nav-cart-count").innerText()).toBe("2");
    });
});