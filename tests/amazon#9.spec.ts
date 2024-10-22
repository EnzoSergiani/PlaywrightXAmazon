import { test, expect } from "@playwright/test";
import { HomePage } from "./pages/home_page";

test.describe("Vérification panier", () => {
    test("Vérifier nombre acticle panier", async ({ page }) => {
        const homePage = new HomePage(page);

        await homePage.navigate();
        await homePage.noCookies();
        await homePage.searchForItem("souris");
        await homePage.clickOnFirstProduct(); 

        // on modifie la quantité de l'article à 2
        await page.click("#quantityRelocate_feature_div");
        await page.click("#quantity_1");
        await page.click("#add-to-cart-button"); // ajouter le produit au panier
        expect(await page.locator("#nav-cart-count").innerText()).toBe("2");
    });

    test("Vérifier le prix total du panier", async ({ page }) => {
        const homePage = new HomePage(page);

        await homePage.navigate();
        await homePage.noCookies();
        await homePage.searchForItem("Disque dur");
        await homePage.clickOnFirstProduct(); 

        // on modifie la quantité de l'article à 2
        await page.click("#quantityRelocate_feature_div");
        await page.click("#quantity_1");
        //recuperer le prix d'un article
        const price = (await page.locator('#corePrice_feature_div').getByText('€').first().innerText()).replace(' €', '').replace(',', '.').trim();
        const totalPriceNumber: number = parseFloat(price);
        //console.log("totalPrice", totalPriceNumber);
        await page.click("#add-to-cart-button"); // ajouter le produit au panier
        expect(await page.locator("#nav-cart-count").innerText()).toBe("2");

        // on vérifie le prix total du panier
        await page.click("#nav-cart");

        const expectedTotalPrice = (totalPriceNumber * 2).toString().replace('.', ',');
        const actualTotalPrice = (await page.locator("#sc-subtotal-amount-activecart").innerText()).replace("€", "").trim();
        expect(actualTotalPrice).toBe(expectedTotalPrice);
    });

    test("Mettre un article de côté", async ({ page }) => {
        const homePage = new HomePage(page);

        await homePage.navigate();
        await homePage.noCookies();
        await homePage.searchForItem("Disque dur");
        await homePage.clickOnFirstProduct(); 

        await page.click("#add-to-cart-button"); // ajouter le produit au panier

        await page.click("#nav-cart");

        await page.locator("input[data-action='save-for-later']").first().click();

        expect(await page.locator("#nav-cart-count").innerText()).toBe("0");
    });

    test("Remettre l'article dans le panier", async ({ page }) => {
        const homePage = new HomePage(page);

        await homePage.navigate();
        await homePage.noCookies();
        await homePage.searchForItem("Disque dur");
        await homePage.clickOnFirstProduct(); 

        await page.click("#add-to-cart-button"); // ajouter le produit au panier

        await page.click("#nav-cart");

        await page.locator("input[data-action='save-for-later']").first().click();

        await page.locator("input[data-action='move-to-cart']").first().click();
            
            expect(await page.locator("#nav-cart-count").innerText()).toBe("1");
    });
});