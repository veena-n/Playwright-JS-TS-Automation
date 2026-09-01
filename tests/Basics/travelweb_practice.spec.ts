import {expect, test} from '@playwright/test'

test.describe("test the travel app", () => {
    test("enter from city", async ({page}) => {
        await page.goto("https://www.vliegwinkel.nl/?ch=paidsearchvwnl&utm_campaign=vwnl_nl_lf_core_vliegtickets&utm_term=05.+Last+Minute&ch=paidsearchvwnl&bg_source=ga&bg_campaign=23566923733&bg_kw=kwd-450654453-mi--pi--ppi-&bg_source_id=797267674065&gclsrc=aw.ds&gad_source=1&gad_campaignid=23566923733&gbraid=0AAAAAD9HU0lWN2H--uIgNrlJb4s7wuzTD&gclid=CjwKCAjwzNTUBhAjEiwA7zcvWuOImq6zhxUSCsZjmfgWEqiZEGlDJ_lOMFWVYqi9MrUcy9mIqViT3RoCyxIQAvD_BwE")
        await page.getByTestId('cookieModal.acceptButton').click()
        await expect(page).toHaveTitle("Goedkoop vliegen? Vergelijk vliegtickets | vliegwinkel.nl")

        const from_city = page.getByTestId("searchbox.departure.input-0")
        await from_city.click()
        await from_city.clear()
        await page.getByTestId('searchbox.departure.input-0').fill('am');
        await page.getByRole('button', { name: 'Amsterdam (Amsterdam Airport' }).click();
        
        
        const to_city = page.getByTestId('searchbox.destination.input-0')
        await to_city.clear()
        await to_city.fill('pa');
        page.setDefaultTimeout(5_000)
        await page.getByRole('button', { name: 'Parijs (Aéroport de Paris-Orly), Frankrijk ORY', exact: true }).click();
     
        
        await page.getByTestId('calendar.12.20').click();
        await page.locator('div').filter({ hasText: /^30$/ }).nth(3).click();

        const passenger = page.getByTestId("searchbox.adults.counter")
        
        passenger.getByTestId("counter.button.plus").click()
        await page.getByTestId('searchbox.children.counter').getByTestId('counter.button.plus').click();
        

        const radio_btn1 = await page.getByRole('radio', { name: 'Premium Economy' })
        await radio_btn1.check()
        await expect(radio_btn1).toBeEnabled();
        await expect(radio_btn1).toBeChecked();
        await page.getByTestId('searchbox.dropdown.closeButton').click();
        await page.getByTestId('searchbox.submit').click();
        
    
    })
})