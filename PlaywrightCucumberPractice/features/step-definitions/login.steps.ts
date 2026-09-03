import { Given, Then, When } from '@cucumber/cucumber';
import { LoginPage } from '../pages/LoginPage.js';
import { InventoryPage } from '../pages/InventoryPage.js';
import { CustomWorld } from '../support/world.js';

Given('I am on the Sauce Demo login page', async function (this: CustomWorld) {
  await new LoginPage(this.page).goto();
});

When(
  'I log in with username {string} and password {string}',
  async function (this: CustomWorld, username: string, password: string) {
    await new LoginPage(this.page).login(username, password);
  }
);

Then('I should see the Sauce Demo inventory page', async function (this: CustomWorld) {
  await new InventoryPage(this.page).expectVisible();
});

Then('I should see the login error {string}', async function (this: CustomWorld, message: string) {
  await new LoginPage(this.page).expectError(message);
});