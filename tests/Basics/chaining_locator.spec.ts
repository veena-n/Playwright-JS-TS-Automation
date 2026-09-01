import {test, expect} from '@playwright/test';

test.describe("working on chaining of locators", () => {

    test("locator filter", async ({page}) => {
        // get element with text filter
        // const listitem = page.locator("li").filter({hasText: "Dummy return ticket – $300"})
        // // get input child element with the help of 
        // await listitem.locator("input").click();
        // await page.waitForTimeout(5000);
        await page.goto("https://sqatools.in/dummy-booking-website/")
        await page.locator('li').filter({hasText : "Dummy ticket for visa application – $200" }).locator('input').check();

    })
})