const {test, expect} = require ('@playwright/test')

test("Verify Error Message", async function ({page})
{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    await page.getByPlaceholder('Username').fill('Admin')
    await page.getByPlaceholder('Password').fill('ddddd')
    await page.locator("//button[normalize-space()='Login']").click()

    const errorMessage = await page.locator("//p[contains(@class,'alert-content-text')]").textContent()

    console.log("Error message is:  "+errorMessage)

    expect(errorMessage.includes("Invalid")).toBeTruthy()

    
}



)