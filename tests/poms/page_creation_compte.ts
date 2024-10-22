import { Locator, Page } from "@playwright/test";

export class CreateAccountPageAction {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }
}
