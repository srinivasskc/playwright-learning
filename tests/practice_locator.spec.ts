import {test} from '@playwright/test'

test("Practice Locator Methods", async({page}) => {
    await page.goto("https://www.saucedemo.com/")

    // XPath Selector: name attribute
    await page.locator("//input[@name='user-name']").fill("standard_user")

    // CSS Selector: id value (#idValue)
    await page.locator("#password").fill("secret_sauce")

    // CSS Selector: class value (.className) only first part of the class name
    await page.locator(".submit-button").click()

    console.log("Test Passed")
})  


test("Practice of Locator Methods with Options", async({page}) =>{
    await page.goto("https://www.saucedemo.com/")
    await page.locator(".form_group",{has:page.locator("#user-name")}).click()
    await page.locator(".form_group",{has:page.locator("#user-name")}).pressSequentially("standard_user")
    await page.locator(".form_group",{hasNot:page.locator("#user-name")}).click()
    await page.locator(".form_group",{hasNot:page.locator("#user-name")}).pressSequentially("secret_sauce")

    await page.locator("#login-button").click()

    await page.locator("//a",{hasText:"Sauce Labs Backpack"})
    
    await page.locator(".inventory_item_name",{hasNotText:/Sauce.*/}).click()
    await page.locator(".inventory_details_name",{hasText:/Test.*/})
})