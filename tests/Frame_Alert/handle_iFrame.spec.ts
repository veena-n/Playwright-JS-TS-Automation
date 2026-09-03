import {test} from '@playwright/test'
import {FrameAndAlert} from '../../Page_Object/Frame_Alert/iFramepage.ts'
import * as testdata from '../../testdata/test_data.ts'

test.describe("Handle iFrame and alert", () => {

    test("identify and iFrame and verify it", async ({page}) => {

        const iframeObj = new FrameAndAlert (page);
        await iframeObj.navigateURL(testdata.practiceURL)
        await iframeObj.handleFrame();

    });

    test("verifysimple alert", async ({page}) => {
        const simplAlt = new FrameAndAlert (page)
        await simplAlt.navigateURL(testdata.alertURL)
        await simplAlt.HandleSimpleAlert();

    });


    test("verify confirm alert", async ({page}) =>{

        const conf_msg = new FrameAndAlert (page)
        await conf_msg.navigateURL(testdata.alertURL)
        await conf_msg.handleConfirmAlert(testdata.confirmMsg)

    });

    test("verify dismiss alert", async ({page}) =>{

        const dism_msg = new FrameAndAlert (page)
        await dism_msg.navigateURL(testdata.alertURL)
        await dism_msg.handleDismAlert(testdata.dismisMsg)

    });


        test("verify prompt confirm alert", async ({page}) =>{

        const confPromt_msg = new FrameAndAlert (page)
        await confPromt_msg.navigateURL(testdata.alertURL)
        await confPromt_msg.handlePromtAccept(testdata.acceptPromtMsg, testdata.input_msg)

    });

    test("verify Prompt dismiss alert", async ({page}) =>{

        const dism_msg = new FrameAndAlert (page)
        await dism_msg.navigateURL(testdata.alertURL)
        await dism_msg.handlePromtDismis(testdata.dismisPromtMsg)

    });


})