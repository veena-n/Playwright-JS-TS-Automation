import {LoginPage} from '../../Page_Object/OpenHRM/LoginPage.ts'
import { test, expect } from '@playwright/test'
import orangeHrmData from '../../testdata/orangeHrmData.json'

test.describe("Verify Login & logout functionality", () => {
    test("user should login successfully", async ({page}) => {

        const loginObj = new LoginPage(page)
        await loginObj.navigateURL(orangeHrmData.url)
        await loginObj.Login(
            orangeHrmData.validcred.username, 
            orangeHrmData.validcred.password,
        )
        await expect(page.getByRole('heading', {name: "Dashboard"})).toBeVisible();
        await loginObj.logOut();
        
    });

    test("Login with invalid cred and verify", async({page}) => {
        const LoginObj = new LoginPage(page)
        await LoginObj.navigateURL(orangeHrmData.url)
        await LoginObj.Login(
            orangeHrmData.Invalidcred.username, 
            orangeHrmData.Invalidcred.password,
        )
        await expect(page.getByText(orangeHrmData.Invalidcred.errorMsg)).toBeVisible();
        await expect(page.getByRole('heading', {name: "Dashboard"})).not.toBeVisible();

    });
    })

