import {test, expect} from '@playwright/test'

test.describe("Perform text input method using action", () => {

    test("verify text is added in the textbox", async ({page}) => {
        await page.goto("https://sqatools.in/automation-practice-page/")
        const userName = "user12@$"
        const password = "123@User"

        const user_field = page.getByPlaceholder("Enter username");
        await user_field.clear();
        await user_field.fill(userName);
        //to check if the given value entered correctly use input value method
        //inputValue() reads the current value from the input field.
        const new_Value = await user_field.inputValue()
        console.log("username :", new_Value)
        //Compare expected vs actual
        expect(new_Value).toEqual(userName);


        const pass_field = page.getByPlaceholder("Enter password");
        await pass_field.clear();
        await pass_field.fill(password)
        const new_pass = await pass_field.inputValue()
        console.log("password :", password)
        expect(new_pass).toEqual(password)


        const address_field = page.locator("#address")
        await address_field.clear();
        //await page.waitForTimeout(3000)
        const address = "North Holland"
        await address_field.fill(address)
        console.log(address)


    })

    test ("perform radio button using Action", async ({page}) => {

        await page.goto("https://sqatools.in/automation-practice-page/")
        const female_btn = page.getByRole('radio', {name : 'Female', exact : true})
        await female_btn.scrollIntoViewIfNeeded()
        await female_btn.check()
        await expect(female_btn).toBeChecked()

        const male_btn = page.getByRole('radio',{name : 'Male', exact: true})
        await male_btn.check()
        await expect(male_btn).toBeChecked()

    })

    test ("perform checkbox using action", async ({page}) => {

        await page.goto("https://the-internet.herokuapp.com/checkboxes")
        const check_field1 = page.locator('//input[@type="checkbox"][1]')
        const check_field2 = page.locator('//input[@type="checkbox"][2]')
        await check_field2.uncheck()
        await check_field1.check()

        // await page.waitForTimeout(2000)
        // await check_field2.uncheck()

    })

    test("perform check operation to select all the checkbox using action", async ({page}) => {

         await page.goto("https://sqatools.in/automation-practice-page/")

         const checkboxes = ['Java', 'Python', 'Selenium']
         for(var checkbox_name of checkboxes) {
            await page.getByRole("checkbox", {name: checkbox_name}).check();
         }
        
    })

    test ("perform select/ drop down option using action", async ({page}) => {
        await page.goto("https://sqatools.in/automation-practice-page/")
        const country_Dd = page.locator("#country")
        await country_Dd.scrollIntoViewIfNeeded()
        await country_Dd.selectOption("USA")

        await country_Dd.selectOption({label: "Australia"})

        //multiple select in drop down
        const SkillsDD = page.locator("#skills");
        await SkillsDD.selectOption(['Python', 'Selenium', 'Playwright']) //use array



    })

    test ("perform mouse operation using action", async ({page}) => {
        await page.goto("https://sqatools.in/automation-practice-page/")
        const btn = page.locator("#normalButton")
        await btn.click()
        await btn.dblclick()

        const hvr_btn = page.locator("#hoverButton")
        await hvr_btn.scrollIntoViewIfNeeded()
        await hvr_btn.hover()

    })
        test("Keyboard actions ", async({page}) => {
        await page.goto("https://sqatools.in/login-page/")
        const loginPage = page.getByPlaceholder("Email address or phone number")
        await loginPage.fill("User1@gmail.com")
        loginPage.press("Tab")
        const passwordfield = page.getByPlaceholder("Password")
        await passwordfield.fill("Passwordz@123")
        //passwordfield.press("Tab")
        await page.getByRole("button", {name: 'Log in'}).press("F12")
        //await page.getByRole("button", {name: 'Log in'}).press("Enter")
        await page.waitForTimeout(3000)
    });

    test("copy paste with the help of keyboard", async({page}) => {
        await page.goto("https://sqatools.in/automation-practice-page/")
        const UsernameField = page.getByPlaceholder("Enter Username")
        await UsernameField.fill("User1@gmail.com")
        await UsernameField.press("Control+KeyA")
        await UsernameField.press("Control+KeyC")

        const textArea = page.locator("#address")
        textArea.press("Control+KeyV")

        await page.waitForTimeout(4000)

    });

    test (" perform drag and drop using action", async ({page}) => {
        await page.goto("https://sqatools.in/automation-practice-page/")
        const drag_elemt = page.locator(".drag")
        const drop_elemt = page.locator(".drop")
        await drag_elemt.scrollIntoViewIfNeeded()
        await drag_elemt.dragTo(drop_elemt)

        const dropElemUpdated = page.locator("div.drop")
        expect(dropElemUpdated).toContainText("Drag Me")
        await page.waitForTimeout(2000)
    })

    test ("perform upload file using action", async ({page}) => {
        await page.goto("https://sqatools.in/automation-practice-page/")
        const file_path = "C:\\Users\\Veena\\OneDrive\\Documents\\check.file.txt"
        const upload_field = page.locator("#fileUpload")
        upload_field.scrollIntoViewIfNeeded()
        upload_field.setInputFiles(file_path)
        await page.waitForTimeout(5000)

    })

})