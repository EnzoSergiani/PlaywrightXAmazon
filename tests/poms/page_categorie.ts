import { Locator, Page } from "@playwright/test";

export class CategoryPageAction {
  readonly page: Page;
  readonly buttonMenu: Locator;
  readonly buttonSection: (section: string) => Locator;
  readonly buttonSubSection: (subSection: string) => Locator;
  readonly divBrands: Locator;
  readonly buttonBrands: (brand: string) => Locator;
  readonly sortSelect: Locator;
  readonly dopdownCategory: Locator;

  constructor(page: Page) {
    this.page = page;
    this.buttonMenu = page.locator("#nav-hamburger-menu");
    this.buttonSection = (section: string) =>
      this.page.locator(`.hmenu-item`).filter({ hasText: section }).first();
    this.buttonSubSection = (subSection: string) =>
      this.page.locator(`.hmenu-item`).filter({ hasText: subSection }).first();
    this.divBrands = page.locator("#brandsRefinements");
    this.buttonBrands = (brand: string) =>
      this.divBrands
        .locator(`li:has-text("${brand}") input[type="checkbox"]`)
        .first();
    this.sortSelect = page.locator("#s-result-sort-select");
    this.dopdownCategory = page.locator("#nav-search-label-id");
  }

  // Cette méthode est utilisée pour ouvrir le menu
  async openMenu() {
    await this.buttonMenu.click();
  }

  // Cette méthode est utilisée pour sélectionner une section
  async selectSection(section: string) {
    await this.buttonSection(section).click();
  }

  // Cette méthode est utilisée pour sélectionner une sous-section
  async selectSubSection(subSection: string) {
    await this.buttonSubSection(subSection).click({ force: true });
  }

  // Cette méthode est utilisée pour filtrer par une marque spécifique
  async filterBrand(brand: string) {
    await this.buttonBrands(brand).click({ force: true });
  }

  // Cette méthode est utilisée pour filtrer les résultats par ordre croissant
  async sortByPriceAsc() {
    await this.sortSelect.selectOption({ value: "price-asc-rank" });
  }

  // Cette méthode est utilisée pour filtrer les résultats par ordre décroissant
  async sortByPriceDesc() {
    await this.sortSelect.selectOption({ value: "price-desc-rank" });
  }

  // Cette méthode est utilisée pour filtrer les résultats par note des clients
  async sortByRate() {
    await this.sortSelect.selectOption({ value: "review-rank" });
  }
}
