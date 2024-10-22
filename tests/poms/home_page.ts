import { Locator, Page } from "@playwright/test";

export class homePageAction {
  readonly page: Page;
  readonly refuseCookies: Locator;
  readonly buttonAccessAccount: Locator;
  readonly buttonCreateAccount: Locator;
  readonly buttonDeliveryAddress: Locator;
  readonly buttonLoginDeliveryAddress: Locator;
  readonly buttonLogOut: Locator;
  readonly hoverLogin: Locator;

  constructor(page: Page) {
    this.page = page;
    this.refuseCookies = page.locator("#sp-cc-rejectall-link");
    this.buttonAccessAccount = page.locator("#nav-link-accountList");
    this.buttonCreateAccount = page.locator("#createAccountSubmit");
    this.buttonDeliveryAddress = page.locator(
      "#nav-global-location-popover-link"
    );
    this.buttonLoginDeliveryAddress = page.locator("#GLUXSignInButton");
    this.hoverLogin = page.locator("#nav-link-accountList");
    this.buttonLogOut = page.locator("#nav-item-signout");
  }

  // This method is used to navigate to the home page
  async goToHomePage() {
    await this.page.goto("https://www.amazon.fr/");
  }

  // This method is used to refuse the cookies
  async dislikeCookies() {
    await this.refuseCookies.click();
  }

  // This method is used to access the registration page
  async accessRegisterPage() {
    await this.buttonAccessAccount.click();
  }

  // This method is used to access the login page
  async accessLoginPage() {
    await this.buttonAccessAccount.click();
  }

  // This method is used to access to log out
  async accessLogOut() {
    await this.hoverLogin.hover();
    await this.logOut();
  }

  // This method is used to log out
  async logOut() {
    await this.buttonLogOut.click();
  }

  // This method is used to go to the delivery address page
  async goToDeliveryAddress() {
    await this.buttonDeliveryAddress.click();
  }

  // This method is used to log in to the delivery address popup
  async loginDeliveryAddress() {
    await this.buttonLoginDeliveryAddress.click();
  }
}
