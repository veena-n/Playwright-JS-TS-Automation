import {firefox, test} from '@playwright/test'

test.describe("test annotation", () => {

    test("first test", {
        tag: ["@smoke", "@sanity"], 
        annotation: {
            type: 'issue',
            description: 'https://github.com/microsoft/playwright/issues/23180',
        },
        
    }, ()=> {
        console.log("First Test")
    })

    test.skip("second test", { tag : "@sanity"},  () => {
        console.log("second  testcase")
    })
//expected to fail, but pass
    test.fail("third test", () => {
        console.log("third testcase")
    })


    test("third of 1 test", { tag: ["@sanity", "@regression"]}, () => {
        console.log("third testcase")
    })

    //also skip

    test.fixme("fourth test", {tag : "@regression"}, () => {
        console.log("fourth test testcase")
    })

//conditional skip
    test("fifth test", ({page, browserName}) => {
        test.skip(browserName == "firefox")
        console.log("fifth  testcase", "still working on firefox")
    })


})