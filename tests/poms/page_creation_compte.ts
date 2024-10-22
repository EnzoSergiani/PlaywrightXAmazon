import { Locator, Page } from "@playwright/test";
import { NEW_USER, USER } from "@constants/generatedConst";

export class CreateAccountPageAction {
  readonly page: Page;
  readonly inputEmail: Locator;
  readonly inputCustomer: Locator;
  readonly inputPassword: Locator;
  readonly inputPasswordCheck: Locator;
  readonly buttonContinue: Locator;
  readonly buttonCreateAccount: Locator;
  readonly buttonSignInSubmit: Locator;
  readonly popupReuseEmail: Locator;

  constructor(page: Page) {
    this.page = page;
    this.inputEmail = page.locator("#ap_email");
    this.inputCustomer = page.locator("#ap_customer_name");
    this.inputPasswordCheck = page.locator("#ap_password_check");
    this.inputPassword = page.locator("#ap_password");
    this.buttonContinue = page.locator("#continue").first();
    this.buttonSignInSubmit = page.locator("#signInSubmit");
    this.buttonCreateAccount = page.locator("#createAccountSubmit");
    this.popupReuseEmail = page.locator("#auth-email-missing-alert");
  }

  // This method is used to log in
  async login() {
    await this.inputEmail.fill(USER.EMAIL);
    await this.buttonContinue.click();
    await this.inputPassword.fill(USER.PASSWORD);
    await this.buttonSignInSubmit.click();
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

  // This method is used to alert the reuse of an email
  async alertReuseEmail() {
    await this.popupReuseEmail.waitFor({ state: "visible" });
  }
}
