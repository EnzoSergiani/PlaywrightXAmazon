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
  readonly alertMessageRegister: Locator;

  constructor(page: Page) {
    this.page = page;
    this.inputEmail = page.locator("#ap_email");
    this.inputCustomer = page.locator("#ap_customer_name");
    this.inputPasswordCheck = page.locator("#ap_password_check");
    this.inputPassword = page.locator("#ap_password");
    this.buttonContinue = page.locator("#continue").first();
    this.buttonSignInSubmit = page.locator("#signInSubmit");
    this.buttonCreateAccount = page.locator("#createAccountSubmit");
    this.alertMessageRegister = page.locator("#register-mase-inlineerror");
  }

  // Cette méthode est utilisée pour se connecter
  async login() {
    await this.inputEmail.fill(USER.EMAIL);
    await this.buttonContinue.click();
    await this.inputPassword.fill(USER.PASSWORD);
    await this.buttonSignInSubmit.click();
  }

  // Cette méthode est utilisée pour enregistrer un nouvel utilisateur ou un utilisateur déjà existant
  // isNewUser: true pour un nouvel utilisateur, false pour un utilisateur existant (utile si on veut vérifier la réutilisation d'un email)
  async register(isNewUser: boolean = true) {
    if (isNewUser) {
      await this.buttonCreateAccount.click();
      await this.inputCustomer.fill(NEW_USER.NAME);
      await this.inputEmail.fill(NEW_USER.EMAIL);
      await this.inputPassword.fill(NEW_USER.PASSWORD);
      await this.inputPasswordCheck.fill(NEW_USER.PASSWORD);
      await this.buttonContinue.click();
      return;
    } else {
      await this.buttonCreateAccount.click();
      await this.inputCustomer.fill(USER.NAME);
      await this.inputEmail.fill(USER.EMAIL);
      await this.inputPassword.fill(USER.PASSWORD);
      await this.inputPasswordCheck.fill(USER.PASSWORD);
      await this.buttonContinue.click();
      return;
    }
  }

  // Cette méthode est utilisée pour alerter la réutilisation d'un email
  async alertReuseEmail() {
    await this.alertMessageRegister.waitFor({ state: "visible" });
  }

  // Cette méthode est utilisée pour aller à la page de l'adresse de livraison
  async goToDeliveryAddress() {
    await this.page.goto("https://www.amazon.fr/a/addresses?ref_=ya_d_c_addr");
  }

  // Cette méthode est utilisée pour vérifier l'adresse de livraison
  async verifyDeliveryAddress(
    expectedDeliveryAddress: string,
    expectedCity: string,
    expectedCountry: string
  ) {
    const actualDeliveryAddress = await this.page.textContent(
      "#address-ui-widgets-AddressLineOne"
    );
    const actualCity = await this.page.textContent(
      "#address-ui-widgets-CityStatePostalCode"
    );
    const actualCountry = await this.page.textContent(
      "#address-ui-widgets-Country"
    );

    if (actualDeliveryAddress !== expectedDeliveryAddress) {
      throw new Error(
        `Expected delivery address to be ${expectedDeliveryAddress}, but got ${actualDeliveryAddress}`
      );
    }
    if (actualCity !== expectedCity) {
      console.log(actualCity);
      console.log(expectedCity);
      throw new Error(
        `Expected delivery address to be ${expectedCity}, but got ${actualCity}`
      );
    }
    if (actualCountry !== expectedCountry) {
      throw new Error(
        `Expected delivery address to be ${expectedCountry}, but got ${actualCountry}`
      );
    }
  }
}
