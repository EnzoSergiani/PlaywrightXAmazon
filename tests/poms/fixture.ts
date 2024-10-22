import { test as base } from "@playwright/test";
import { homePageAction } from "@poms/home_page";
import { ProductAction } from "@poms/fiche_produit";
import { CategoryPageAction } from "@poms/page_categorie";
import { CreateAccountPageAction } from "@poms/page_creation_compte";

const test = base.extend<{
  homePageAction: homePageAction;
  productAction: ProductAction;
  categoryPageAction: CategoryPageAction;
  createAccountPageAction: CreateAccountPageAction;
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
  createAccountPageAction: async ({ page }, use) => {
    await use(new CreateAccountPageAction(page));
  },
});

const expect = base.expect;

export { test, expect };
