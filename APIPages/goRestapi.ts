    import { APIRequestContext, expect, Response } from "@playwright/test";
    import * as apidata from '../testdata/api_data.ts'


    export class GORestAPI {

        readonly request : APIRequestContext

        constructor (request) {
            this.request = request
        }


        GetAllUsers() {
            const usersURL = `${apidata.common_url}/users`
            const response = this.request.get(usersURL, {
                headers : apidata.GoRestheaders
            })

            return response
        }

          GetAllPosts() {
            const usersURL = `${apidata.common_url}/posts`
            const response = this.request.get(usersURL, {
                headers : apidata.GoRestheaders
            })

            return response
        }
        
          GetAllComments() {
            const usersURL = `${apidata.common_url}/comments`
            const response = this.request.get(usersURL, {
                headers : apidata.GoRestheaders
            })

            return response
        }

        
          GetAllTodo() {
            const usersURL = `${apidata.common_url}/todos`
            const response = this.request.get(usersURL, {
                headers : apidata.GoRestheaders
            })

            return response
        }



    }
