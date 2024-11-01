import { th } from "@faker-js/faker/.";
import { Locator, Page } from "@playwright/test";

export class ProductAction {
  readonly page: Page;
  readonly searchBar: Locator;
  readonly buttonSearch: Locator;
  readonly buttonAddToCart: Locator;
  readonly firstProduct: Locator;
  readonly firstFrequentProduct: Locator;
  readonly buttonBuyProduct: Locator;
  readonly buttonProceedToRetailCheckout: Locator;
  readonly divQuantity: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchBar = page.locator("#twotabsearchtextbox");
    this.buttonSearch = page.locator("#nav-search-submit-button");
    this.firstProduct = page.locator(".s-main-slot .s-result-item").first();
    this.firstFrequentProduct = page
      .locator("#AddToCartLibrary-AddToCartButton-Personalization")
      .first();
    this.buttonAddToCart = page.locator("#add-to-cart-button");
    this.buttonBuyProduct = page.locator("#buy-now-button");
    this.buttonProceedToRetailCheckout = page.locator(
      'input[name="proceedToRetailCheckout"]'
    );
    this.divQuantity = page.locator("#quantityRelocate_feature_div");
  }

  // Cette méthode est utilisée pour rechercher un produit dans la barre de recherche
  async searchProduct(product: string) {
    await this.searchBar.fill(product);
    await this.buttonSearch.click();
  }

  // Cette méthode est utilisée pour sélectionner le premier produit dans le résultat de la recherche
  async selectFirstProduct() {
    await this.firstProduct.click();
  }

  // Cette méthode est utilisée pour ajouter le premier produit fréquent au panier
  async addFrequentProductToCart() {
    await this.firstFrequentProduct.click();
  }

  // Cette méthode est utilisée pour ajouter le produit sur la page actuelle au panier
  async addProductToCart() {
    await this.buttonAddToCart.click();
  }

  // Cette méthode est utilisée pour acheter un produit à partir de la page du produit
  async buyProduct() {
    await this.buttonBuyProduct.click();
  }

  // Cette méthode est utilisée pour passer à la caisse de détail
  async proceedToRetailCheckout() {
    await this.buttonProceedToRetailCheckout.click();
  }

  // Cette méthode est utilisée pour définir la quantité d'un produit
  async setQuantityTo(quantity: number) {
    await this.divQuantity.click();
    //await this.page.waitForSelector(`#quantity_${quantity -1}"]`);
    await this.page.locator(`#quantity_${quantity - 1}`).click();
  }

  // Cette méthode est utilisée pour retourner le prix du produit
  async getPrice() {
    const price = (
      await this.page
        .locator("#corePrice_feature_div")
        .getByText("€")
        .first()
        .innerText()
    )
      .replace(" €", "")
      .replace(",", ".")
      .trim();
    return parseFloat(price);
  }

  // Cette méthode est utilisée pour retourner un tableau de tous les prix des produits
  async getAllProductPrices() {
    await this.page.waitForSelector('.a-price', { timeout: 5000 });
    console.log("Le conteneur des prix est visible.");
    // Récupère tous les éléments de prix
    const priceElements = await this.page.locator('.a-price .a-offscreen');
    
    // Utilise une boucle pour extraire le texte de chaque prix et les stocker dans un tableau
    const prices = [];

    // Vérification du nombre d'éléments de prix trouvés
    const count = await priceElements.count();
    console.log(`Nombre d'éléments de prix trouvés :`, count);

    for (let i = 0; i < count; i++) {
        const priceText = await priceElements.nth(i).textContent();
        // Convertir le texte en nombre flottant et l'ajouter au tableau
        if(priceText !== null) {
          const priceValue = parseFloat(priceText.replace('€', '').replace(',', '.').trim());
          prices.push(priceValue);
        }
    }

    return prices;
}

async getAllProductRatings() {
  // Attendre visibilité
  await this.page.waitForSelector('.a-row.a-size-small span[aria-label]');

  // Récupérer tous les éléments de note
  const ratingElements = await this.page.locator('.a-row.a-size-small span[aria-label]');
  
  const ratings = [];
  const count = await ratingElements.count();

  for (let i = 0; i < count; i++) {
    if(i%2 === 0) {
      const ratingText = await ratingElements.nth(i).getAttribute('aria-label');
      if(ratingText === null) continue;
      const ratingValue = parseFloat(ratingText.split(' ')[0].replace(',', '.')); // Convertir la note en nombre
      ratings.push(ratingValue); // Ajouter la note au tableau
    }
  }
  return ratings;
}



}
