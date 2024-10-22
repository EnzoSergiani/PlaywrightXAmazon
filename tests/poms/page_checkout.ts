import { Locator, Page } from "@playwright/test";

export class CheckoutPageAction {
  readonly page: Page;
  readonly buttonGoToCart: Locator;
  readonly buttonDeleteProduct: Locator;
  readonly buttonBuyCart: Locator;

  constructor(page: Page) {
    this.page = page;
    this.buttonGoToCart = page.locator("#nav-cart");
    this.buttonDeleteProduct = page.locator('input[data-action="delete"]');
    this.buttonBuyCart = page.locator("#sc-buy-box-ptc-button");
  }

  // This method is used to go to the cart page
  async goToCartPage() {
    await this.buttonGoToCart.click();
  }

  // This method is used to delete a product in the cart
  async deleteProductInCart() {
    await this.buttonDeleteProduct.click();
  }

  // This method is used to order the cart
  async orderCart() {
    await this.buttonBuyCart.click();
  }
}
