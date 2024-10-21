import { Page } from "playwright";

export class CheckoutPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigate() {
    await this.page.goto(
      "https://www.amazon.fr/gp/buy/spc/handlers/display.html"
    );
  }

  async enterShippingAddress(address: {
    name: string;
    addressLine1: string;
    city: string;
    postalCode: string;
    country: string;
  }) {
    await this.page.fill("#enterAddressFullName", address.name);
    await this.page.fill("#enterAddressAddressLine1", address.addressLine1);
    await this.page.fill("#enterAddressCity", address.city);
    await this.page.fill("#enterAddressPostalCode", address.postalCode);
    await this.page.selectOption("#enterAddressCountryCode", address.country);
  }

  async selectShippingOption(option: string) {
    await this.page.click(`text=${option}`);
  }

  async enterPaymentDetails(payment: {
    cardNumber: string;
    nameOnCard: string;
    expiryDate: string;
    securityCode: string;
  }) {
    await this.page.fill("#addCreditCardNumber", payment.cardNumber);
    await this.page.fill("#ccName", payment.nameOnCard);
    await this.page.fill("#ccMonth", payment.expiryDate.split("/")[0]);
    await this.page.fill("#ccYear", payment.expiryDate.split("/")[1]);
    await this.page.fill(
      "#addCreditCardVerificationNumber",
      payment.securityCode
    );
  }

  async placeOrder() {
    await this.page.click("#placeYourOrder");
  }
}
