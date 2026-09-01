import { test, expect } from '@playwright/test';



test ("Login Feature with xpath locators", async ({ page }) => {
    await page.goto("https://sqatools.in/login-page/", {timeout: 10000}),
    await page.locator('//input[@autocomplete="username"]').fill("user1@gmail.com")
    await page.locator('//input[@placeholder="Password"]').fill("123@sqatools")
    await page.locator('//input[@type="submit"]').click()

});

test ("Locator element identfication", async ({ page }) => {
    await page.goto("https://sqatools.in/wp-login.php", {timeout: 10000}),
    await page.locator('//*[@name="log"]').fill("admin@12345")
    await page.locator('//*[@type="password"]').fill("P@ssw0rd@123")
    await page.locator('//*[@type="submit"]').click()
});

test ("verify text on the webpage", async ({ page }) => {
    await page.goto("https://sqatools.in/dummy-booking-website/", {timeout: 10000}),
    await expect(page.locator('//h1[text() = "Dummy Booking Website"]')).toBeVisible();
    await expect(page.locator('//h1[contains(text(), "Dummy Ticket")]')).toBeVisible();

});

test ("verify the text on the loginpage", async ({ page }) => {
    await page.goto("https://sqatools.in/login-page/", {timeout: 10000}),
    await page.locator('//button[normalize-space() = "Log in"]');
        
});

//locate element using pick locator
test("verify the element on login page using pick locator", async ({ page }) => {
    await page.goto("https://sqatools.in/login-page/", {timeout: 10000}),
    await expect(page.getByRole('heading', { name: 'Login Page' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'SQA Tools' })).toBeVisible

});

