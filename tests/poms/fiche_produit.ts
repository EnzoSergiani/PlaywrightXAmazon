import { Locator, Page } from "@playwright/test";
import { homePageAction } from "./home_page";

export class ProductAction {
  readonly page: Page;
  readonly dislikeCookies: Page;
  readonly searchBar: Locator;
  readonly buttonSearch: Locator;
  readonly goToCart: Locator;
  readonly deleteProduct: Locator;
  readonly firstProduct: Locator;
  readonly firstFrequentProduct: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchBar = page.locator("#twotabsearchtextbox");
    this.buttonSearch = page.locator("#nav-search-submit-button");
    this.goToCart = page.locator("#nav-cart");
    this.deleteProduct = page.locator(".sc-action-delete");
    this.firstProduct = page.locator(".s-main-slot .s-result-item").first();
    this.firstFrequentProduct = page.locator(
      "#AddToCartLibrary-AddToCartButton-Personalization"
    );
  }

  async searchProduct(product: string) {
    await this.searchBar.fill(product);
    await this.buttonSearch.click();
  }

  async clickOnFirstProduct() {
    await this.firstProduct.click();
  }

  async addFirstProductToCart() {
    await this.firstProduct.click();
  }

  async addFrequentProductToCart() {
    await this.firstFrequentProduct.click();
  }

  async goToCartPage() {
    await this.goToCart.click();
  }

  async deleteProductInBasket() {
    await this.deleteProduct.click();
  }
}
