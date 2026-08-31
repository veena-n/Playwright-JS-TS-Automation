import {test} from '@playwright/test'

test.describe("verify the timeout scenario" , () => {
    test("navigation timeout", async ({page}) => {
        //test timout
        test.setTimeout(3_000)

        await page.goto("https://sqatools.in/dummy-booking-website/", {timeout : 5_000}) //navigation timeout
        //also we can add the navigation timeout in config file
        const title =  page.locator('#entry-title')
        console.log(title)

    })

    test ("Locator level timeout or action timeout scenario", async ({page}) => {
        await page.goto("https://sqatools.in/dummy-booking-website/")
        //to scroll the page
        await page.mouse.wheel(0, 1000);
        await page.locator("#firstname").nth(0).fill("User1", {timeout : 3_000})
        await page.waitForTimeout(10_000) //static wait
        await page.locator("#firstname").nth(1).fill("admin", {timeout: 10_000})
        const female_btn = page.getByRole('radio', {name : 'Female', exact : true})
        await female_btn.check()

    })

    
})