import {test, Page} from '@playwright/test'
import {FrameAndAlert} from '../../Page_Object/Frame_Alert/iFramepage.ts'
import * as testdata from '../../testdata/test_data.ts'

//declare global variable
var FrameAlertObj : FrameAndAlert
var page : Page
var context: BrowserContext



test.describe("Handle iFrame and alert", () => {



    test.beforeEach("Before Each", async ({browser})=> {
        context = await browser.newContext()
        page = await context.newPage()
        //await FrameAlertObj.navigation(testdata.practiceURL)
        FrameAlertObj = new FrameAndAlert(page)
        await FrameAlertObj.navigateURL(testdata.alertURL)
        await page.waitForTimeout(2_000)
    }) 

        test.afterEach("After Each", async ()=> {
        await context.close()
        await page.close();
        });



    test("identify and iFrame and verify it", async ({page}) => {

        // const iframeObj = new FrameAndAlert (page);
        // await iframeObj.navigateURL(testdata.practiceURL)
        await FrameAlertObj.handleFrame();

    });

    test("verifysimple alert", async ({page}) => {
        // const simplAlt = new FrameAndAlert (page)
        // await simplAlt.navigateURL(testdata.alertURL)
        await FrameAlertObj.HandleSimpleAlert();

    });


    test("verify confirm alert", async ({page}) =>{

        // const conf_msg = new FrameAndAlert (page)
        // await conf_msg.navigateURL(testdata.alertURL)
        await FrameAlertObj.handleConfirmAlert(testdata.confirmMsg)

    });

    test("verify dismiss alert", async ({page}) =>{

        // const dism_msg = new FrameAndAlert (page)
        // await dism_msg.navigateURL(testdata.alertURL)
        await FrameAlertObj.handleDismAlert(testdata.dismisMsg)

    });


        test("verify prompt confirm alert", async ({page}) =>{

        // const confPromt_msg = new FrameAndAlert (page)
        // await confPromt_msg.navigateURL(testdata.alertURL)
        await FrameAlertObj.handlePromtAccept(testdata.acceptPromtMsg, testdata.input_msg)

    });

    test("verify Prompt dismiss alert", async ({page}) =>{

        // const dism_msg = new FrameAndAlert (page)
        // await dism_msg.navigateURL(testdata.alertURL)
        await FrameAlertObj.handlePromtDismis(testdata.dismisPromtMsg)

    });


})