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

test("Practice of GetByLabel Methods", async({page}) => {
    await page.goto("https://qa-practice.razvanvancea.ro/auth_ecommerce.html")
    await page.getByLabel("Email", {exact: true}).fill("admin@admin.com")
})

test("Practice for GetBy Placeholder", async({page}) => {
    await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/")
    await page.getByPlaceholder("Search for Vegetables and Fruits", {exact: true}).fill("Carrot")
})

// Practice - rahulshettyacademy

test("Login Page Practice", async({page}) => {
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
    await page.getByLabel("Username:",{exact:true}).fill("rahulshettyacademy")
    await page.getByLabel("Password:",{exact:true}).fill("Learning@830$3mK2")
})