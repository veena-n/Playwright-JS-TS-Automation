import { APIRequestContext } from "@playwright/test";
import { GORestAPI } from "./goRestapi";

export class APIPageManager {

    readonly request : APIRequestContext
    readonly goRestAPI : GORestAPI

    constructor (request : APIRequestContext) {
        this.request = request
        this.goRestAPI = new GORestAPI(this.request)

    }

}