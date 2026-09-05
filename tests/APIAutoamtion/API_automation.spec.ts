import {test, expect, request} from "@playwright/test";


test.describe("API automation test cases", () => {
    test("Get all object details", async ({request}) => {
        const APIUrl = "https://api.restful-api.dev/objects";
        const response = await request.get(APIUrl);
        const statusCode = response.status();
        const responseJSON = await response.json();
        console.log(responseJSON);
        expect(responseJSON.length).toEqual(13);
        expect (statusCode).toEqual(200);
        console.log(responseJSON[2].name);
        expect(responseJSON[2].name).toEqual('Apple iPhone 12 Pro Max')

    })

    test("Get specific object details", async ({request}) => {

        const APIUrl = "https://api.restful-api.dev/objects/5";
        const response = await request.get(APIUrl);
        const statusCode = response.status();
        const responseJSON = await response.json();
        console.log(responseJSON);
        expect (statusCode).toEqual(200);
        console.log(responseJSON.name);
        expect(responseJSON.name).toEqual('Samsung Galaxy Z Fold2')


    })

    test ("Get the id of specific object", async ({request}) => {
        const APIUrl = "https://api.restful-api.dev/objects/1";
        const response = await request.get(APIUrl);
        const StatusCode =  response.status();
        const responseJson = await response.json();
        console.log(responseJson);
        expect(StatusCode).toEqual(200);
        expect(responseJson.id).toEqual("1");
        console.log("Id is: ", responseJson.id);
    })

    test ("Get the colour of specific object", async ({request})=> {
        const APIUrl = "https://api.restful-api.dev/objects/3";
        const response = await request.get(APIUrl);
        const statusCode = response.status();
        const responseJson = await response.json();
        console.log(responseJson.data.color);
        console.log(statusCode)
        expect(statusCode).toEqual(200);
        expect(responseJson.data.color).toEqual('Cloudy White')
    })

    test("create new entry", async ({request}) => {

        const APIUrl = "https://api.restful-api.dev/objects";
        const request_data = {
                        "name": "Apple MacBook Pro 16",
                        "data": {
                            "year": 2019,
                            "price": 1849.99,
                            "CPU model": "Intel Core i9",
                            "Hard disk size": "1 TB"
                        }
                        }
        const response = await request.post(APIUrl, {
            data: request_data})

        const statusCode = response.status();
        console.log("the status code is :", statusCode)
        console.log(request_data);
        expect(statusCode).toEqual(200);
        expect(request_data.name).toEqual('Apple MacBook Pro 16');
        console.log("the name is :", request_data.name)

    })

    test("create new entry with headers", async ({request}) => {

        const APIUrl = "https://api.restful-api.dev/objects";
        const request_data = {
                        "name": "Apple MacBook Pro 16",
                        "data": {
                            "year": 2019,
                            "price": 1849.99,
                            "CPU model": "Intel Core i9",
                            "Hard disk size": "1 TB"
                        }
                        }
        const HeadersValue = {"Content-Type": "application/json"}
        const response = await request.post(APIUrl, {
            data: request_data, headers:  HeadersValue})

        const statusCode = response.status();
        console.log("the status code is :", statusCode)
        console.log(request_data);
        expect(statusCode).toEqual(200);
        expect(request_data.name).toEqual('Apple MacBook Pro 16');
        console.log("the name is :", request_data.name)

    })
    
     test("Update New Entry of object", async({request})=> {
        const APIUrl = "https://api.restful-api.dev/objects"
        const Request_data = {
                "name": "Apple MacBook Pro 180",
                "data": {
                    "year": 2019,
                    "price": 1849.99,
                    "CPU model": "Intel Core i9",
                    "Hard disk size": "1 TB"
                }
                }
        const HeadersValue = {"Content-Type": "application/json"}
        const response = await request.post(APIUrl, {
            data: Request_data, 
            headers: HeadersValue
        });
        const statusCode = response.status()
        const ResponseJson = await response.json()
        console.log(ResponseJson)
        expect(statusCode).toEqual(200)
        console.log(ResponseJson.name)
        expect(ResponseJson.name).toEqual("Apple MacBook Pro 180")

        const UserID = ResponseJson.id
        const PutURL = `https://api.restful-api.dev/objects/${UserID}`

        const Put_Request_data = {
                "name": "Apple MacBook Pro 200",
                "data": {
                    "year": 2025,
                    "price": 1849.99,
                    "CPU model": "Intel Core i10",
                    "Hard disk size": "4 TB"
                }
            }
        
        const PutResponse = await request.put(PutURL, {
            data: Put_Request_data,
            headers: HeadersValue
        })

        const PutReponseJson = await PutResponse.json()
        console.log(PutReponseJson)
        const status = PutResponse.status()
        expect(status).toEqual(200)

    })

        test("Patch New Entry of object", async({request})=> {
        const APIUrl = "https://api.restful-api.dev/objects"
        const Request_data = {
                "name": "Apple MacBook Pro 16",
                "data": {
                    "year": 2019,   
                    "price": 1849.99,
                    "CPU model": "Intel Core i9",
                    "Hard disk size": "1 TB"
                }
                }
        const HeadersValue = {"Content-Type": "application/json"}
        const response = await request.post(APIUrl, {
            data: Request_data, 
            headers: HeadersValue
        });
        const statusCode = response.status()
        const ResponseJson = await response.json()
        console.log(ResponseJson)
        expect(statusCode).toEqual(200)
        console.log(ResponseJson.name)
        expect(ResponseJson.name).toEqual("Apple MacBook Pro 16")

        const UserID = ResponseJson.id
        const PatchURL = `https://api.restful-api.dev/objects/${UserID}`

        const Put_Request_data = {
                "data": {
                    "year": 2020,
                }
            }
        
        const PatchResponse = await request.patch(PatchURL, {
            data: Put_Request_data,
            headers: HeadersValue
        })

        const PatchReponseJson = await PatchResponse.json()
        console.log(PatchReponseJson)
        const status = PatchResponse.status()
        expect(status).toEqual(200)
    })

    test("Delete New Entry of object", async({request})=> {
        const APIUrl = "https://api.restful-api.dev/objects"
        const Request_data = {
                "name": "Apple MacBook Pro 165",
                "data": {
                    "year": 2019,
                    "price": 1849.99,
                    "CPU model": "Intel Core i9",
                    "Hard disk size": "1 TB"
                }
                }
        const HeadersValue = {"Content-Type": "application/json"}
        const response = await request.post(APIUrl, {
            data: Request_data, 
            headers: HeadersValue
        });
        const statusCode = response.status()
        const ResponseJson = await response.json()
        console.log(ResponseJson)
        expect(statusCode).toEqual(200)
        console.log(ResponseJson.name)
        expect(ResponseJson.name).toEqual("Apple MacBook Pro 165")

        const UserID = ResponseJson.id
        const DeleteURL = `https://api.restful-api.dev/objects/${UserID}`


        const DeleteResponse = await request.delete(DeleteURL)

        const DeleteReponseJson = await DeleteResponse.json()
        console.log(DeleteReponseJson)
        const status = DeleteResponse.status()
        expect(status).toEqual(200)
    })


    

})