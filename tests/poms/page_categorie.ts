import { Locator, Page } from "@playwright/test";
import { NEW_USER, USER } from "../generatedConst";

export class CategoryPageAction {
  readonly page: Page;
  //   readonly buttonAccessAccount: Locator;
  //   readonly buttonCreateAccount: Locator;
  //   readonly inputEmail: Locator;
  //   readonly inputCustomer: Locator;
  //   readonly inputPassword: Locator;
  //   readonly inputPasswordCheck: Locator;
  //   readonly buttonContinue: Locator;
  //   readonly buttonSignInSubmit: Locator;

  constructor(page: Page) {
    this.page = page;
    // this.buttonAccessAccount = page.locator("#nav-link-accountList");
    // this.buttonCreateAccount = page.locator("#createAccountSubmit");
    // this.inputEmail = page.locator("#ap_email");
    // this.inputCustomer = page.locator("#ap_customer_name");
    // this.inputPassword = page.locator("#ap_password");
    // this.inputPasswordCheck = page.locator("#ap_password_check");
    // this.buttonContinue = page.locator("#continue");
    // this.buttonSignInSubmit = page.locator("#signInSubmit");
  }

  //   async navigateToHomePage() {
  //     await this.page.goto("https://www.amazon.fr/");
  //   }

  //   async accessRegisterPage() {
  //     await this.page.goto("https://www.amazon.fr/");
  //     await this.buttonAccessAccount.click();
  //     await this.buttonCreateAccount.click();
  //     await this.inputCustomer.fill(NEW_USER.NAME);
  //     await this.inputEmail.fill(NEW_USER.EMAIL);
  //     await this.inputPassword.fill(NEW_USER.PASSWORD);
  //     await this.inputPasswordCheck.fill(NEW_USER.PASSWORD);
  //     await this.buttonContinue.click();
  //   }

  //   async accessLoginPage() {
  //     await this.page.goto("https://www.amazon.fr/");
  //     await this.buttonAccessAccount.click();
  //     await this.inputEmail.fill(USER.EMAIL);
  //     await this.buttonContinue.click();
  //     await this.inputPassword.fill(USER.PASSWORD);
  //     await this.buttonSignInSubmit.click
  //   }
}
