import {Page, expect} from '@playwright/test'

export class LoginPage {
    readonly page : Page   //property declaration

    constructor(page_val : Page){
        this.page = page_val;

    }
    //create locators

   async navigateURL(url: string) {
        await this.page.goto(url)
    }

    get userNameField () {
        return this.page.getByPlaceholder("Username")
    }

    get passwordField () {
        return this.page.getByPlaceholder("password")
    }

    get loginBtn() {
        return this.page.getByRole("button", {name: "Login"})
    }

    get message() {
        return this.page.getByRole("heading", {name: "Dashboard"})
    }

    get adminUser_Btn () {
        return this.page.locator(".oxd-userdropdown-tab")
    }

    get logOut_btn () {
        return this.page.getByRole('button' , {name : "Logout"})
    }

    //create function or action
    
    // async goto() {
    //     await this.page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    // }

    async Login (username :string, password: string){
    await this.userNameField.fill(username)
    await this.passwordField.fill(password)
    await this.loginBtn.click()
    
    }

    //logout

    async logOut() {
        await this.adminUser_Btn.click()
        await this.logOut_btn.click()
        await expect(this.page.getByRole("heading", {name: "Login"})).toBeVisible()
    }


    

}
