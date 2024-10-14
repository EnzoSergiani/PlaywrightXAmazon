import {test, expect} from "@playwright/test";
import {faker} from "@faker-js/faker";
import { NEW_USER, USER } from "./generatedConst";

test.describe("Create a new user", () => {
    test("access to the page", async ({page}) => {
        await page.goto("https://www.amazon.fr/");
    });
    test("access to the register page", async ({page}) => {
        await page.goto("https://www.amazon.fr");
        await page.click("#nav-link-accountList"); //! fonctione sur firefox mais pas sur chrome
        //utilisation de faker pour remplir les champs
        await page.click("#createAccountSubmit"); //cliquer sur le bouton de création de compte
        await page.fill("#ap_customer_name", NEW_USER.NAME);
        await page.fill("#ap_email", NEW_USER.EMAIL);
        //await page.click("#continue");
        await page.fill("#ap_password", NEW_USER.PASSWORD);
        await page.fill("#ap_password_check", NEW_USER.PASSWORD);
        await page.click("#continue");
    }
    );
    test("access to the login page", async ({page}) => {
        await page.goto("https://www.amazon.fr");
        await page.click("#nav-link-accountList");
        await page.fill("#ap_email", USER.EMAIL);
        await page.click("#continue");
        await page.fill("#ap_password", USER.PASSWORD);
        await page.click("#signInSubmit");
    });
});