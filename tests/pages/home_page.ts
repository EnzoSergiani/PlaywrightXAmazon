import { Page } from "playwright";

export class HomePage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigate() {
    await this.page.goto("https://www.amazon.fr");
  }

  async searchForItem(item: string) {
    await this.page.fill("#twotabsearchtextbox", item);
    await this.page.click('input[type="submit"]');
  }

  async getFirstResultTitle(): Promise<string | null> {
    return this.page.textContent(".s-title-instructions-style");
  }
}
