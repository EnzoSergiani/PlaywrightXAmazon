import { Page } from "playwright";

export class CategoriePage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigateTo(): Promise<void> {
    await this.page.goto("https://www.amazon.fr/s?i=stripbooks");
  }

  async getCategoryTitle(): Promise<string | null> {
    return this.page.textContent("h1");
  }

  async selectCategory(categoryName: string): Promise<void> {
    await this.page.click(`text=${categoryName}`);
  }

  async searchProduct(productName: string): Promise<void> {
    await this.page.fill("#twotabsearchtextbox", productName);
    await this.page.click('input[type="submit"]');
  }

  async getProductTitles(): Promise<string[]> {
    return this.page.$$eval(".s-title", (elements) =>
      elements
        .map((el) => el.textContent)
        .filter((text): text is string => text !== null)
    );
  }
}
