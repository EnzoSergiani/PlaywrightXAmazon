import { test as base } from "@playwright/test";
import { homePageAction } from "./home_page";
import { ProductAction } from "./fiche_produit";
import { CategoryPageAction } from "./page_categorie";
import { accountAction } from "./page_creation_compte";

const test = base.extend<{
  homePageAction: homePageAction;
  productAction: ProductAction;
  categoryPageAction: CategoryPageAction;
  accountAction: accountAction;
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
  accountAction: async ({ page }, use) => {
    await use(new accountAction(page));
  },
});

const expect = base.expect;

export { test, expect };
