import { test as base } from "@playwright/test";
import { homePageAction } from "./home_page";
import { ProductAction } from "./fiche_produit";
import { CreateAccountPageAction } from "./page_creation_compte";
import { CategoryPageAction } from "./page_categorie";
import { CheckoutPageAction } from "./page_checkout";

const test = base.extend<{
  homePageAction: homePageAction;
  productAction: ProductAction;
  createAccountPageAction: CreateAccountPageAction;
  categoryPageAction: CategoryPageAction;
  checkoutPageAction: CheckoutPageAction;
}>({
  homePageAction: async ({ page }, use) => {
    await use(new homePageAction(page));
  },
  productAction: async ({ page }, use) => {
    await use(new ProductAction(page));
  },
  createAccountPageAction: async ({ page }, use) => {
    await use(new CreateAccountPageAction(page));
  },
  categoryPageAction: async ({ page }, use) => {
    await use(new CategoryPageAction(page));
  },
  checkoutPageAction: async ({ page }, use) => {
    await use(new CheckoutPageAction(page));
  },
});

const expect = base.expect;

export { test, expect };
