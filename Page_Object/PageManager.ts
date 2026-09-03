import {Page} from '@playwright/test'
import { FrameAndAlert } from './Frame_Alert/iFramepage'
import {LoginPage} from './OpenHRM/LoginPage.ts'


export class PageManager {
    readonly page : Page
    readonly framAndAlert : FrameAndAlert
    readonly loginPage : LoginPage


    constructor(page :Page) {
        this.page = page
        this.framAndAlert = new FrameAndAlert(page)
        this.loginPage = new LoginPage(page)

    }
}