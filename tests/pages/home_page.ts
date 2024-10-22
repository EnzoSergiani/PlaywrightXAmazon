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

  async selectFirstProduct() {
    const firstProduct = await this.page
      .locator(".s-main-slot .s-result-item")
      .first();
    await firstProduct.click();
  }

  async clickCart() {
    await this.page.click("#nav-cart");
  }

  async noCookies() {
    await this.page.click("#sp-cc-rejectall-link");
  }

  async clickShippingAdresses() {
    await this.page.click("#nav-global-location-popover-link");
  }

  async shippingAdressesSignIn() {
    await this.page.click("#GLUXSignInButton");
  }
}
