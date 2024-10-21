import { test as base } from "@playwright/test";
import { homePageAction } from "./home_page";
import { ProductAction } from "./fiche_produit";
import { CategoryPageAction } from "./page_categorie";

const test = base.extend<{
  homePageAction: homePageAction;
  productAction: ProductAction;
}>({
  homePageAction: async ({ page }, use) => {
    await use(new homePageAction(page));
  },
  productAction: async ({ page }, use) => {
    await use(new ProductAction(page));
  },
  categoryPageAction: async ({ page }, use) => {
    await use(new CategoryPageAction(page));
  },
});

const expect = base.expect;

export { test, expect };
