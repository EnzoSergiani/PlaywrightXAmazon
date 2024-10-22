import { Locator, Page } from "@playwright/test";

export class ProductAction {
  readonly page: Page;
  readonly searchBar: Locator;
  readonly buttonSearch: Locator;
  readonly goToCart: Locator;
  readonly deleteProduct: Locator;
  readonly firstProduct: Locator;
  readonly firstFrequentProduct: Locator;
  readonly addToCartButton: Locator;
  readonly buyProduct: Locator;
  readonly buttonOrderCart: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchBar = page.locator("#twotabsearchtextbox");
    this.buttonSearch = page.locator("#nav-search-submit-button");
    this.goToCart = page.locator("#nav-cart");
    this.deleteProduct = page.locator('input[data-action="delete"]');
    this.firstProduct = page.locator(".s-main-slot .s-result-item").first();
    this.firstFrequentProduct = page
      .locator("#AddToCartLibrary-AddToCartButton-Personalization")
      .first();
    this.addToCartButton = page.locator("#add-to-cart-button");
    this.buyProduct = page.locator("#buy-now-button");
    this.buttonOrderCart = page.locator("#sc-buy-box-ptc-button");
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

  // This method is used to go to the cart page
  async goToCartPage() {
    await this.goToCart.click();
  }

  // This method is used to delete a product in the cart
  async deleteProductInCart() {
    await this.deleteProduct.click();
  }

  // This method is used to buy a product from the product page
  async buyIt() {
    await this.buyProduct.click();
  }

  // This method is used to add a product to the cart
  async addToCart() {
    await this.addToCartButton.click();
  }

  // This method is used to order the cart
  async orderCart() {
    await this.buttonOrderCart.click();
  }
}
