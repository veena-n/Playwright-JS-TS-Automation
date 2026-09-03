import {test} from '@playwright/test'


// beforeEach : It will execute before execution of each test cases.
// afterEach : It will execute after execution of each test cases.
// beforeall : It will execute before execution of first test cases.
// afterall : It will execute after executing the last test cases


//real tim eexample is Before all: Launching the wesite
// After all:  close the window 

test.describe("Hooks learning" , () => {

    //beforeEach is the method
    test.beforeEach("Before Each Test", () => {
        console.log("test case execution started")

    })

    test.afterEach("After Each Test", () => {
        console.log("test case execution ended")

    })

    test.beforeAll("Before All", () => {
        console.log("test suite execution started")

    })

     test.afterAll("After All", () => {
        console.log("test suite execution ended")

    })

    test("first test case", () => {

        console.log("first testcase")

    })

    test("second test case", () => {

        console.log("second testcase")

    })

    test("third test case", () => {

        console.log("third testcase")

    })
})