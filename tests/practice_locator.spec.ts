import {test} from '@playwright/test'

test("Practice Locator Methods", async({page}) => {
    await page.goto("https://www.saucedemo.com/")
    await page.locator("//input[@name='user-name']").fill("standard_user")
    await page.locator("//*[@name='password']").fill("secret_sauce")
})  