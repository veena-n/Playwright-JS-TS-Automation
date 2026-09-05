import {request, test, expect} from '@playwright/test'

test.describe("Authentication API", () => {
    test("test all user details", async ({request}) => {
        const APIUrl = 'https://gorest.co.in/public/v2/users';
        const token = "a9c19a7cd51839a0afbd9a9355d6f766f30590b72a5ff3154328ac95f14bae30";
        const response = await request.get(APIUrl, {
            headers: {
                'Content-Type' : 'application/json',
                'Authorization' : `Bearer ${token}`
            }
        });
        const responseJson = await response.json();
        const status = response.status();
        console.log(responseJson);
        expect(status).toEqual(200)
        
    })
})