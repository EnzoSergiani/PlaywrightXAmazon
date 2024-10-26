import { Locator, Page } from "@playwright/test";

export class CheckoutPageAction {
  readonly page: Page;
  readonly buttonGoToCart: Locator;
  readonly buttonDeleteProduct: Locator;
  readonly buttonBuyCart: Locator;
  readonly divQuantity: Locator;
  readonly buttonSaveForLater: Locator;
  readonly buttonMoveSavedProductToCart: Locator;

  constructor(page: Page) {
    this.page = page;
    this.buttonGoToCart = page.locator("#nav-cart");
    this.buttonDeleteProduct = page.locator('input[data-action="delete"]');
    this.buttonBuyCart = page.locator("#sc-buy-box-ptc-button");
    this.divQuantity = page.locator("#nav-cart-count");
    this.buttonSaveForLater = page
      .locator('input[name^="submit.save-for-later"]')
      .first();
    this.buttonMoveSavedProductToCart = page
      .locator('input[name^="submit.move-to-cart"]')
      .first();
  }

  // Cette méthode est utilisée pour aller à la page du panier
  async goToCartPage() {
    await this.buttonGoToCart.click();
  }

  // Cette méthode est utilisée pour supprimer un produit du panier
  async deleteProductInCart() {
    await this.buttonDeleteProduct.click();
  }

  // Cette méthode est utilisée pour commander le panier
  async orderCart() {
    await this.buttonBuyCart.click();
  }

  // Cette méthode est utilisée pour vérifier la quantité d'un produit
  async checkQuantity(quantity: number) {
    await new Promise((r) => setTimeout(r, 2000));
    const quantityText = await this.divQuantity.textContent();
    if (quantityText !== `${quantity}`) {
      throw new Error(
        `Expected quantity to be ${quantity}, but got ${quantityText}`
      );
    }
  }

  // Cette méthode est utilisée pour mettre un article de côté
  async saveForLater() {
    await this.buttonSaveForLater.click();
  }

  // Cette méthode est utilisée pour déplacer un produit sauvegardé dans le panier
  async moveSavedProductToCart() {
    await this.buttonMoveSavedProductToCart.click();
  }

  // Cette méthode est utilisée pour vérifier le prix total du panier
  async checkTotalPrice(expectedTotalPrice: number) {
    await new Promise((r) => setTimeout(r, 2000));

    const actualTotalPrice = (
      await this.page.locator("#sc-subtotal-amount-activecart").textContent()
    )
      ?.replace("€", "")
      .trim()
      .replace(",", ".");

    if (actualTotalPrice !== `${expectedTotalPrice}`) {
      throw new Error(
        `Expected total price to be ${expectedTotalPrice}, but got ${actualTotalPrice}`
      );
    }
  }
}
