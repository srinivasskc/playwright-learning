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


// This is recommended to use for form elements.
test("Practice of GetByLabel Methods", async({page}) => {
    await page.goto("https://qa-practice.razvanvancea.ro/auth_ecommerce.html")
    await page.getByLabel("Email", {exact: true}).fill("admin@admin.com")
})

// This is recommended to use for form elements when elements do not have labels but have placeholder text.
test("Practice for GetBy Placeholder", async({page}) => {
    await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/")
    await page.getByPlaceholder("Search for Vegetables and Fruits", {exact: true}).fill("Carrot")
})


// This is recommended to use for text locators, non-interactive elements like div, span, p, h1-h6, etc. and
//  interactive elements like button, link, etc.
test("Practice for getByText", async({page}) => {
    await page.goto("https://qa-practice.razvanvancea.ro/auth_ecommerce.html")
    console.log(await page.getByText('Login - Sh').textContent())
   //console.log(await page.getByText('Login - Sh', {exact: true}).textContent())
})

// This is recommended for elements supports the alt attribute like img, area, input[type=image], etc.
test("Practice for getByAltText", async({page}) => {
    //test.slow()
    await page.goto("https://www.saucedemo.com/")
    await page.locator("#user-name").fill("standard_user")
    await page.locator("#password").fill("secret_sauce")
    await page.locator("#login-button").click()
    await page.getByAltText("Sauce Labs Backpack").click()
    console.log(await page.getByText("Sauce Labs Backpack",{exact:true}).textContent())

})

// This is recommended for elements supports the title attribute like a, area, button, input, etc.
test("Practice for getByTitle", async({page}) => {
    await page.goto("https://automationbookstore.dev/")
    await page.getByPlaceholder("Filter books..").fill("est")
    await page.getByTitle("Clear text").click()
    await page.getByPlaceholder("Filter books..").fill("est")
    await page.getByTitle("Clear text").last().click()
})


// Practice - rahulshettyacademy

test("Login Page Practice", async({page}) => {
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
    await page.getByLabel("Username:",{exact:true}).fill("rahulshettyacademy")
    await page.getByLabel("Password:",{exact:true}).fill("Learning@830$3mK2")
})


// This is recommended to use first when you can locate by role or text.
test("Practice for getByRole", async({page}) => {
    await page.goto("https://practicesoftwaretesting.com/")
    await page.getByRole('img', { name: 'Banner' })
    await page.getByRole("link",{name: "Contact"}).click()
    await page.getByRole("button",{name: "Categories"}).click()
    await page.getByRole('link', { name: 'Power Tools' }).click();
})


// This is to be used when you cant locate by role or text.
test("Practice for getByTestId", async({page})=> {
    await page.goto("https://www.saucedemo.com/")
    await page.getByTestId("username").fill("standard_user")
    await page.getByTestId("password").fill("secret_sauce")
})