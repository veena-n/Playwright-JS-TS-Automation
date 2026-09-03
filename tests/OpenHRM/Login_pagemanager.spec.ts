import { test, expect } from '@playwright/test'
import orangeHrmData from '../../testdata/orangeHrmData.json'
import { PageManager } from '../../Page_Object/PageManager.ts'


test.describe("Verify Login & logout functionality", () => {
    test("user should login successfully", async ({page}) => {

        //imported pagemanager and make a object for pagemanger and use this for all test files

        const pageManager = new PageManager(page)
        const loginObj = pageManager.loginPage
        await loginObj.navigateURL(orangeHrmData.url)
        await loginObj.Login(
            orangeHrmData.validcred.username, 
            orangeHrmData.validcred.password,
        )
        await expect(page.getByRole('heading', {name: "Dashboard"})).toBeVisible();
        await loginObj.logOut();
        
    })

})