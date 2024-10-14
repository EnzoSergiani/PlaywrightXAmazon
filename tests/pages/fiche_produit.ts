import { Page } from "@playwright/test";

export class ProductPage {
  readonly page: Page;
  readonly addToCartButton: string;
  readonly productTitle: string;
  readonly productPrice: string;

  constructor(page: Page) {
    this.page = page;
    this.addToCartButton = "#add-to-cart-button";
    this.productTitle = "#productTitle";
    this.productPrice = ".a-price .a-offscreen";
  }

  async goto(productUrl: string) {
    await this.page.goto(productUrl);
  }

  async getProductTitle(): Promise<string | null> {
    return await this.page.textContent(this.productTitle);
  }

  async getProductPrice(): Promise<string | null> {
    return await this.page.textContent(this.productPrice);
  }

  async addToCart() {
    await this.page.click(this.addToCartButton);
  }
}
