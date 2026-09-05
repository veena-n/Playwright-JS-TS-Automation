import {test, expect, request} from '@playwright/test'
import { APIPageManager } from '../../../APIPages/API_pageManager'

test.describe("GO Rest API automation scenarios", () => {
    test("Get all users info and verify",  async ({request}) => {
        const APiPageM = new APIPageManager(request);
        const response = await APiPageM.goRestAPI.GetAllUsers();
        const responseJSon = await response.json();
        const status = response.status();
        console.log(responseJSon);
        console.log("the statuscode is :", status);
        expect(status).toBe(200);
        expect(response).toBeOK();

    })

      test("Get all post users info and verify",  async ({request}) => {
        const APiPageM = new APIPageManager(request);
        const response = await APiPageM.goRestAPI.GetAllPosts();
        const responseJSon = await response.json();
        const status = response.status();
        console.log(responseJSon);
        console.log("the statuscode is :", status);
        expect(status).toBe(200);
        expect(response).toBeOK();

    })

      test("Get all comments info and verify",  async ({request}) => {
        const APiPageM = new APIPageManager(request);
        const response = await APiPageM.goRestAPI.GetAllComments();
        const responseJSon = await response.json();
        const status = response.status();
        console.log(responseJSon);
        console.log("the statuscode is :", status);
        expect(status).toBe(200);
        expect(response).toBeOK();

    })

      test("Get all todo info and verify",  async ({request}) => {
        const APiPageM = new APIPageManager(request);
        const response = await APiPageM.goRestAPI.GetAllTodo();
        const responseJSon = await response.json();
        const status = response.status();
        console.log(responseJSon);
        console.log("the statuscode is :", status);
        expect(status).toBe(200);
        expect(response).toBeOK();

    })

    
})