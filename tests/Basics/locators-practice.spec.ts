import {expect, test} from '@playwright/test';


test ("identify the elements using getByRole", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html"), {timeout : 2000},
    await page.getByRole('textbox', {name : 'Username:'}).fill("test@gmail.com");
    await page.getByRole('checkbox', {name : ' Accept term'}).check();
    await page.getByRole('button', {name : 'Primary Action'}).click();
    
})

test ("identify elements using getByLabel method", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html"),
    await page.getByLabel('Email Address:').fill("test12@gmail.com");
    await page.getByLabel('Password:').fill("123@test");
    await page.getByLabel('Your Age:').fill("34");
    await page.getByLabel(' Standard').check();
})

test ("identify elements using getByText method", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html")
    const text_value = await page.getByText("colored text").textContent()
    console.log(text_value)

    const text = await page.getByText("important").allTextContents()
    console.log(text)

})

test ("identify the element using getByPlaceholder method", async({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html")
    await page.getByPlaceholder("Enter your full name").fill("user1")
    await page.getByPlaceholder("Phone number (xxx-xxx-xxxx)").fill("876458275072")
    await page.getByPlaceholder("Type your message here...").fill("This is a test message")
    await page.getByPlaceholder("Search products...").fill("table")
    await page.getByRole('button', {name : "Search"}).click()

})

test ("identifying elements using getByAltText", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html")
    await expect(page.getByAltText("logo image")).toBeVisible();
    await page.screenshot({path: "imagescreenshot.png"})

})

//Locate elements by their title attribute.
test ("identify the element using getByTitle method", async ({page}) => {
    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html")
    const home_link = await page.getByTitle("Home page link")
    await home_link.scrollIntoViewIfNeeded()
    await expect(home_link).toBeEnabled()
    await expect(home_link).toBeVisible()

})

test ("identify element using getByTestId method", async ({page}) => {
    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html")
    await expect(page.getByTestId('profile-email')).toBeVisible();
    await page.getByTestId('edit-profile-btn').click()
    const text_id = await page.getByTestId('profile-email').textContent()
    console.log(text_id)

})

//css selector practice

test.describe("Css selector practice in playwright", () => {
    test ("identify element using id", async ({page}) => {
        await page.goto("https://www.saucedemo.com/?utm_source=chatgpt.com")
        const text = await page.locator(".login_logo").textContent()
        console.log(text)
        await page.locator("#user-name").fill("standard_user")
        await page.locator("#password").fill("secret_sauce")
        await page.locator("#login-button").click()
    })

    test ("identify element using classname", async ({page}) => {
        await page.goto("https://www.saucedemo.com/?utm_source=chatgpt.com")
        await page.locator('.input_error.form_input').first().fill("standard_user")
        //or
        //await page.locator('.input_error.form_input').nth(0).fill("standard_user")
        await page.locator(".input_error.form_input").nth(1).fill("secret_sauce")
        await page.locator(".submit-button.btn_action").click()
        await expect(page.locator(".title")).toBeVisible()
        const app_logo = await page.locator(".app_logo").textContent()
        console.log(app_logo)
        await page.locator(".shopping_cart_link").click()  
    
    })

    test ("identify elements using attribute method", async ({page}) => {
        await page.goto("https://www.saucedemo.com/?utm_source=chatgpt.com")
        await page.locator('[name="user-name"]').fill("standard_user")
        await page.locator('[name="password"]').fill("secret_sauce")
        await page.locator('[name="login-button"]').click()
        await page.locator('[alt="Sauce Labs Backpack"]').click()
        await page.locator('[name = add-to-cart]').click()
        await page.locator('[name="remove"]').click()


    })
})