import { Locator, Page } from "@playwright/test";

export class CategoryPageAction {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }
}
