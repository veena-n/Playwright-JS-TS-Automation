import {expect, test} from '@playwright/test'
import { LoginPage } from '../../Page_Object/OpenHRM/LoginPage'
import orangeHrmData from '../../testdata/orangeHrmData.json'

test.describe("Login Functionality", () => {
    test("User should login successfully",  async ({page}) => {
        const login_Obj = new LoginPage(page);

        await login_Obj.navigateURL("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        await login_Obj.Login("Admin", "admin123")
    
    })

    
    


})

