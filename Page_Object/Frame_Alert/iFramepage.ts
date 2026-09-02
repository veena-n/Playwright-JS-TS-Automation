import { Page, expect } from '@playwright/test'

export class FrameAndAlert {
    readonly page: Page
    constructor(page: Page) {
        this.page = page
    }

    async navigateURL(url: String) {
        await this.page.goto(url)
    }

    async handleFrame() {
        await this.page.getByRole("heading", { name: "iframe" }).scrollIntoViewIfNeeded()
        const frame_elemt = this.page.frameLocator("#sampleIframe")

        //identify and print the content
        //through main element frame locator we are identifying child element "p"
        const para = await frame_elemt.locator("p").first().textContent()
        console.log(para)

    }

    async HandleSimpleAlert() {

        const simpl_alert = this.page.getByRole('button', { name: "Simple Alert" })
        await simpl_alert.scrollIntoViewIfNeeded()
        await simpl_alert.click()
        this.page.on('dialog', async dialog => {
            await dialog.accept()

        })

    }

    async alertMsg(mesg: string) {
        const mesg_txt = await this.page.locator("#demo").textContent()
        expect(mesg_txt).toEqual(mesg)

    }

    async handleConfirmAlert(mesg: string) {

        
        this.page.on('dialog', async dialog => {
            await dialog.accept()
        });
        await this.page.getByRole('button', { name: "Confirmation Alert" }).click()

        await this.alertMsg(mesg)
        console.log(mesg)
        console.log("Confirm alert handled successfully")

    }

    async handleDismAlert (mesg : string) {

        this.page.on('dialog', async dialog => {
            await dialog.dismiss()
        })

        await this.page.getByRole('button', { name: "Confirmation Alert" }).click()

        await this.alertMsg(mesg)
        console.log(mesg)
        console.log("dismiss alert handled successfully")

    }

       async handlePromtAccept (mesg : string, input : string) {

        this.page.on('dialog', async dialog => {
            await dialog.accept(input)
        })

        await this.page.getByRole('button', { name: "Prompt Alert" }).click()

        await this.alertMsg(mesg)
        console.log(mesg)
        console.log("Prompt alert handled successfully")

    }

           async handlePromtDismis (mesg : string) {

        this.page.on('dialog', async dialog => {
            await dialog.dismiss()
        })

        await this.page.getByRole('button', { name: "Prompt Alert" }).click()

        await this.alertMsg(mesg)
        console.log(mesg)
        console.log("dismis prompt alert handled successfully")

    }


}
