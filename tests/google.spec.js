const {test, expect} = require ('@playwright/test')

test ("Verify Application Title", async function ({page}){
    
    await page.goto("https://www.google.com/")

    //verify URL
    const url = await page.url()
    console.log("Title is: "+url)

    //verify title
    const title = await page.title()
    console.log("Title is "+title)

    //assertion
    await expect(page).toHaveTitle("Google")

    
})