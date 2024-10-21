import { Page } from "playwright";

export class CartPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async deleteFromCart() {
    await this.page.click('input[data-action="delete"]');
  }

}
