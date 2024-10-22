import { Locator, Page } from "@playwright/test";

export class CheckoutPageAction {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }
}
