import { After, AfterAll, Before, BeforeAll, setDefaultTimeout, Status } from '@cucumber/cucumber';
import { chromium, selectors, type Browser } from '@playwright/test';
import 'dotenv/config';
import { CustomWorld } from './world.js';

let browser: Browser;

setDefaultTimeout(30_000);

BeforeAll(async function () {
  selectors.setTestIdAttribute('data-test');
  browser = await chromium.launch({
    headless: process.env.HEADLESS !== 'false'
  });
});

Before(async function (this: CustomWorld) {
  this.browser = browser;
  this.context = await browser.newContext({
    baseURL: process.env.BASE_URL ?? 'https://www.saucedemo.com'
  });
  this.page = await this.context.newPage();
});

After(async function (this: CustomWorld, { result }) {
  if (result?.status === Status.FAILED && this.page) {
    await this.attach(await this.page.screenshot(), 'image/png');
  }
  await this.context?.close();
});

AfterAll(async function () {
  await browser?.close();
});