import {test} from '@playwright/test'

test.describe("Booking website", ()=> {


    test.describe("Flight Booking", ()=> {
       test("Flight test1", ()=> {
        console.log("This is flight booking Test 1")
       });

       test("Flight test2", ()=> {
        console.log("This is flight booking Test 2")
       });
        

    });
    test.describe("Hotel Booking", ()=> {

        test("Hotel test1", ()=> {
        console.log("This is hotel booking Test 1")
       });

       test("Hotel test2", ()=> {
        console.log("This is hotel booking Test 2")
       });
        
        
    });
    test.describe("Train Booking", ()=> {

        test("Train test1", ()=> {
        console.log("This is Train booking Test 1")
       });

       test("Train test2", ()=> {
        console.log("This is Train booking Test 2")
       });
        
        
    });
    test.describe("Car Booking", ()=> {
        test("Car test1", ()=> {
        console.log("This is Car booking Test 1")
       });

       test("Car test2", ()=> {
        console.log("This is Car booking Test 2")
       });
        
        
    })
}); 

