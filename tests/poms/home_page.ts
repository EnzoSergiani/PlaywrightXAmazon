import { Locator, Page } from "@playwright/test";
import { NEW_USER, USER } from "@constants/generatedConst";

export class homePageAction {
  readonly page: Page;
  readonly refuseCookies: Locator;
  readonly buttonAccessAccount: Locator;
  readonly buttonCreateAccount: Locator;
  readonly inputEmail: Locator;
  readonly inputCustomer: Locator;
  readonly inputPassword: Locator;
  readonly inputPasswordCheck: Locator;
  readonly buttonContinue: Locator;
  readonly buttonSignInSubmit: Locator;
  readonly buttonDeliveryAddress: Locator;
  readonly buttonLoginDeliveryAddress: Locator;
  readonly hoverLogin: Locator;
  readonly buttonLogOut: Locator;

  constructor(page: Page) {
    this.page = page;
    this.refuseCookies = page.locator("#sp-cc-rejectall-link");
    this.buttonAccessAccount = page.locator("#nav-link-accountList");
    this.buttonCreateAccount = page.locator("#createAccountSubmit");
    this.inputEmail = page.locator("#ap_email");
    this.inputCustomer = page.locator("#ap_customer_name");
    this.inputPassword = page.locator("#ap_password");
    this.inputPasswordCheck = page.locator("#ap_password_check");
    this.buttonContinue = page.locator("#continue").first();
    this.buttonSignInSubmit = page.locator("#signInSubmit");
    this.buttonDeliveryAddress = page.locator(
      "#nav-global-location-popover-link"
    );
    this.buttonLoginDeliveryAddress = page.locator("#GLUXSignInButton");
    this.hoverLogin = page.locator("#nav-link-accountList");
    this.buttonLogOut = page.locator("#nav-item-signout");
  }

  // This method is used to navigate to the home page
  async navigateToHomePage() {
    await this.page.goto("https://www.amazon.fr/");
  }

  // This method is used to refuse the cookies
  async dislikeCookies() {
    await this.refuseCookies.click();
  }

  // This method is used to access the registration page
  async accessRegisterPage() {
    await this.buttonAccessAccount.click();
    await this.register();
  }

  // This method is used to register a new user
  async register() {
    await this.buttonCreateAccount.click();
    await this.inputCustomer.fill(NEW_USER.NAME);
    await this.inputEmail.fill(NEW_USER.EMAIL);
    await this.inputPassword.fill(NEW_USER.PASSWORD);
    await this.inputPasswordCheck.fill(NEW_USER.PASSWORD);
    await this.buttonContinue.click();
  }

  // This method is used to access the login page
  async accessLoginPage() {
    await this.buttonAccessAccount.click();
    this.login();
  }

  // This method is used to log in
  async login() {
    await this.inputEmail.fill(USER.EMAIL);
    await this.buttonContinue.click();
    await this.inputPassword.fill(USER.PASSWORD);
    await this.buttonSignInSubmit.click();
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
    await this.login();
  }
}
