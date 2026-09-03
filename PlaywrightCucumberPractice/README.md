# Playwright Cucumber Practice

TypeScript end-to-end automation for [Sauce Demo](https://www.saucedemo.com/) using Playwright, Cucumber.js, and the page object model.

## Setup

```bash
npm install
npx playwright install chromium
```

Copy `.env.example` to `.env` when overriding the default environment values.

## Run

```bash
npm run test:e2e
npm run test:e2e:headed
npm run test:e2e:smoke
```

The Cucumber HTML report is generated at `reports/cucumber-report.html`. Failed scenarios attach a screenshot to the report.

=====================================================================================

# Playwright + Cucumber TypeScript Framework

This repository contains a simple Playwright + Cucumber framework that automates the Sauce Demo login flow using Page Object Model (POM).

## 1. Prerequisites

- Node.js 18 or newer
- npm (bundled with Node.js)
- Internet access to install packages and access `https://www.saucedemo.com/`

## 2. Initialize the Project

1. Open PowerShell in the workspace directory:
   ```powershell
   cd E:\Trainings\GTM_Playwright_JS_Batch12_15April26\GTM_PlaywrightTS_BATCH12\Deepesh\PlaywrightCucumberFramework
   ```
2. Initialize npm:
   ```powershell
   npm init -y
   ```

## 3. Install Dependencies

Install the required packages for Playwright, Cucumber, TypeScript, and assertions:

```powershell
npm install -D typescript ts-node @types/node @cucumber/cucumber playwright chai @types/chai
```

Install the Playwright browser binaries:

```powershell
npx playwright install chromium
```

## 4. Create TypeScript Configuration

Create `tsconfig.json` with the following content:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "moduleResolution": "node",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "outDir": "dist",
    "rootDir": ".",
    "types": ["node"]
  },
  "include": ["features/**/*.ts", "pages/**/*.ts"]
}
```

## 5. Configure Cucumber

Create `cucumber.js` with the following content:

```js
module.exports = {
  default: `--require-module ts-node/register --require features/**/*.ts --format progress-bar`
};
```

## 6. Scaffold the Framework Structure

Create these folders:

- `features/`
- `features/step_definitions/`
- `features/support/`
- `pages/`

## 7. Write the Feature File

Create `features/login.feature`:

```gherkin
Feature: Sauce Demo login
  In order to access the secure products page
  As a standard user
  I want to log in successfully

  Scenario: Standard user can log in
    Given I open the Sauce Demo login page
    When I submit valid credentials
    Then I should see the products page
```

## 8. Create the Login Page Object

Create `pages/loginPage.ts`:

```ts
import { Page } from 'playwright';

export class LoginPage {
  readonly page: Page;
  readonly usernameInput = '#user-name';
  readonly passwordInput = '#password';
  readonly loginButton = '#login-button';
  readonly productsTitle = '.title';

  constructor(page: Page) {
    this.page = page;
  }

  async navigate() {
    await this.page.goto('https://www.saucedemo.com/');
    await this.page.waitForSelector(this.usernameInput);
  }

  async login(username: string, password: string) {
    await this.page.fill(this.usernameInput, username);
    await this.page.fill(this.passwordInput, password);
    await this.page.click(this.loginButton);
    await this.page.waitForURL('**/inventory.html');
  }

  async getProductsTitle() {
    return this.page.textContent(this.productsTitle);
  }
}
```

## 9. Add Cucumber Hooks

Create `features/support/hooks.ts`:

```ts
import { Before, After, setDefaultTimeout } from '@cucumber/cucumber';
import { Browser, Page, chromium } from 'playwright';
import { LoginPage } from '../../pages/loginPage';

setDefaultTimeout(60 * 1000);

export let browser: Browser;
export let page: Page;
export let loginPage: LoginPage;

Before(async () => {
  browser = await chromium.launch({ headless: true });
  page = await browser.newPage();
  loginPage = new LoginPage(page);
});

After(async () => {
  await page?.close();
  await browser?.close();
});
```

## 10. Implement Step Definitions

Create `features/step_definitions/loginSteps.ts`:

```ts
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'chai';
import { loginPage } from '../support/hooks';

Given('I open the Sauce Demo login page', async function () {
  await loginPage.navigate();
});

When('I submit valid credentials', async function () {
  await loginPage.login('standard_user', 'secret_sauce');
});

Then('I should see the products page', async function () {
  const title = await loginPage.getProductsTitle();
  expect(title?.trim()).to.equal('Products');
});
```

## 11. Update `package.json`

Add runnable scripts to `package.json`:

```json
"scripts": {
  "test": "npx cucumber-js",
  "test:login": "npx cucumber-js --profile default"
}
```

## 12. Run the Test

Execute:

```powershell
npm run test:login
```

Expected output:

- `1 scenario (1 passed)`
- `5 steps (5 passed)`

## 13. Troubleshooting

- If `ts-node` fails: ensure `typescript` is `^5.3.x`.
- If `chai` is missing: install `npm install -D chai @types/chai`.
- If Playwright fails to launch: verify browser binaries with `npx playwright install chromium`.

## 14. Summary

This framework uses:
- Playwright for browser automation
- Cucumber for BDD feature files and step definitions
- TypeScript for typed code and POM structure
- Page Object Model for the login page implementation

You now have a working end-to-end automation framework for Sauce Demo login.
