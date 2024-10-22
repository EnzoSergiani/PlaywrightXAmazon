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
  }

  // This method is used to search a product in the search bar
  async searchProduct(product: string) {
    await this.searchBar.fill(product);
    await this.buttonSearch.click();
  }

  // This method is used to select the first product in the search result
  async selectFirstProduct() {
    await this.firstProduct.click();
  }

  // This method is used to add the first frequent product to the cart
  async addFrequentProductToCart() {
    await this.firstFrequentProduct.click();
  }

  // This method is used to add a product to the cart
  async addProductToCart() {
    await this.buttonAddToCart.click();
  }
  // This method is used to buy a product from the product page
  async buyProduct() {
    await this.buttonBuyProduct.click();
  }

  // This method is used to proceed to the retail checkout
  async proceedToRetailCheckout() {
    await this.buttonProceedToRetailCheckout.click();
  }
}
