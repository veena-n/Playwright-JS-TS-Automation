import {test, expect}  from "@playwright/test"


test.describe ("test assertion on webelements", () => {
    test("test generic assertion", async ({page}) => {
        await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html")
        const title_text = await page.getByRole('heading', {name: "Automation Testing Practice"}).textContent()
        console.log(title_text)
        //.trim() used for removing the space in the text
        expect(title_text?.trim()).toBe("Automation Testing Practice")
        expect(title_text).toContain("Automation")
        expect(title_text).toBeDefined()

        const table_txt = ['	Selenium', 'Java', 'Javascript']
        expect(table_txt).toContain("Java")
        expect(table_txt).toBeDefined()
        expect(table_txt).toContain("Javascript")

    
    })


    test("verify the page assertion", async ({page}) => {
        await page.goto("https://sqatools.in/dummy-booking-website/")
        await expect(page).toHaveTitle('Dummy Booking Website - SQA Tools')

        //to check the partial value
        await expect(page).toHaveTitle(/.*Dummy/)

        //to verify the url

        await expect(page).toHaveURL("https://sqatools.in/dummy-booking-website/")
        //await page.screenshot()

        //to verify the screenshot
        await page.screenshot({path : "C:\GithubCode\Playwright-JS-TS-Automation\GithubCodePlaywright-JS-TS-Automationimagescreenshot.png"})
        await expect(page).toHaveScreenshot("C:C:\GithubCode\Playwright-JS-TS-Automation\GithubCodePlaywright-JS-TS-Automationimagescreenshot.png")
       
    })

})