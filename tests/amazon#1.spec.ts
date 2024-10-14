import {test, expect} from "@playwright/test";
import {faker} from "@faker-js/faker";
import { NEW_USER, USER } from "./generatedConst";
const fs = require('fs');
const { exec } = require('child_process');
const path = require('path');

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

        // Attendre l'apparition du CAPTCHA
        const captchaSelector = ".cvf-captcha-img img";
        await page.waitForSelector(captchaSelector);

        // Extraire l'URL de l'image CAPTCHA
        const captchaImageSrc = await page.getAttribute(captchaSelector, 'src');
        console.log(`Captcha image URL: ${captchaImageSrc}`);
            
        // Télécharger l'image captcha
        const captchaImageBuffer = await page.evaluate((src) => {
            return fetch(src).then(response => response.arrayBuffer());
        }, captchaImageSrc);

        // Sauvegarder l'image en local pour analyse
        const captchaFilePath = path.join(__dirname, 'captcha.png');
        fs.writeFileSync(captchaFilePath, Buffer.from(captchaImageBuffer));

        console.log('CAPTCHA image saved, cracking...');

        // Appeler un script shell pour cracker le CAPTCHA avec tesseract
        exec(`tesseract ${captchaFilePath} stdout`, (error, stdout, stderr) => {
            if (error) {
                console.error(`Error running tesseract: ${error}`);
                return;
            }

            // Extraire le texte du captcha
            const captchaText = stdout.trim();
            console.log(`Cracked CAPTCHA text: ${captchaText}`);

            // Soumettre le CAPTCHA et continuer la connexion
            page.fill("#auth-captcha-guess", captchaText);
            page.click("#signInSubmit");
        });

    });
});
