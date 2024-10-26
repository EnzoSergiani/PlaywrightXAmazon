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

  // Cette méthode est utilisée pour naviguer vers la page d'accueil
  async goToHomePage() {
    await this.page.goto("https://www.amazon.fr/");
  }

  // Cette méthode est utilisée pour refuser les cookies
  async dislikeCookies() {
    await this.refuseCookies.click();
  }

  // Cette méthode est utilisée pour accéder à la page d'inscription
  async accessRegisterPage() {
    await this.buttonAccessAccount.click();
  }

  // Cette méthode est utilisée pour accéder à la page de connexion
  async accessLoginPage() {
    await this.buttonAccessAccount.click();
  }

  // Cette méthode est utilisée pour afficher le bouton de déconnexion
  async accessLogOut() {
    await this.hoverLogin.hover();
    await this.logOut();
  }

  // Cette méthode est utilisée pour se déconnecter
  async logOut() {
    await this.buttonLogOut.click();
  }

  // Cette méthode est utilisée pour accéder à la page d'adresse de livraison
  async goToDeliveryAddress() {
    await this.buttonDeliveryAddress.click();
  }
}
