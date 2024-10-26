import { Locator, Page } from "@playwright/test";

export class CategoryPageAction {
  readonly page: Page;
  readonly buttonMenu: Locator;

  constructor(page: Page) {
    this.page = page;
    this.buttonMenu = page.locator("#nav-hamburger-menu");
  }

  // Cette méthode est utilisée pour ouvrir le menu
  async openMenu() {
    await this.buttonMenu.click();
  }

  // Cette méthode est utilisée pour sélectionner une catégorie
  async selectCategory(category: string) {
    await this.page.click(`.hmenu-item:has-text("${category}")`);
  }

  // Cette méthode est utilisée pour sélectionner une sous-catégorie
  //! Impossible de sélectionner une sous-catégorie
  async selectSubCategory(subCategory: string) {
    await this.page.click(`.hmenu-item:has-text("${subCategory}")`);
  }
}
