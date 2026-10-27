// Assertions in Playwright
// Auto Retry Assertions, Non-Auto Retry Assertions.

import {test, expect} from "playwright/test"



// Auto Retry Assertions: https://playwright.dev/docs/test-assertions#auto-retrying-assertions
test("Assertion 'to have count' - check specific no of elements present on the page ", async({page}) => {
    await page.goto("https://www.saucedemo.com/")
    await page.getByTestId('username').fill("standard_user")
    await page.getByTestId('password').fill("secret_sauce")
    //await page.getByTestId('login-button').click()
    await expect(await page.getByTestId('login-button')).toHaveCount(1) 
})


test("Assertion 'to be enabled' - check if the element is enabled or not", async({page}) => {
    await page.goto("https://www.saucedemo.com/")
    await page.getByTestId('username').fill("standard_user")
    await page.getByTestId('password').fill("secret_sauce")

    await expect(await page.getByTestId('login-button')).toBeEnabled()
})

test("Failing Test: Assertion 'to be disabled' - check if the element is disabled or not", async({page}) => {
    await page.goto("https://www.saucedemo.com/")
    await page.getByTestId('username').fill("standard_user")
    await page.getByTestId('password').fill("secret_sauce")

    await expect(await page.getByTestId('login-button')).toBeDisabled()
})

test("Assertion 'to be visible' - check if the element is visible or not", async({page}) => {
    await page.goto("https://www.saucedemo.com/")
    await page.getByTestId('username').fill("standard_user")
    await page.getByTestId('password').fill("secret_sauce")

    await expect(await page.getByTestId('login-button')).toBeVisible()
})

test("Assertion 'to be hidden' - check if the element is visible or not", async({page}) => {
    await page.goto("https://www.saucedemo.com/")
    await page.getByTestId('username').fill("standard_user")
    await page.getByTestId('password').fill("secret_sauce")

    await expect(await page.getByTestId('login-button')).toBeHidden()
})

test("Assertion 'to have text' - check if the element has the expected text", async({page}) => {
    await page.goto("https://www.saucedemo.com/")
    await page.getByTestId('username').fill("standard_user")
    await page.getByTestId('password').fill("secret_sauce")

    await expect(await page.getByTestId('login-button')).toHaveText("Login")
})

test("Assertion 'to have attribute' - check if the element has the expected attribute", async({page}) => {
    await page.goto("https://www.saucedemo.com/")
    await page.getByTestId('username').fill("standard_user")
    await page.getByTestId('password').fill("secret_sauce")

    await expect(await page.getByTestId('login-button')).toHaveAttribute("name","login-button")
})

test("Assertion 'to have id' - check if the element has the expected id", async({page}) => {
    await page.goto("https://www.saucedemo.com/")
    await page.getByTestId('username').fill("standard_user")
    await page.getByTestId('password').fill("secret_sauce")

    await expect(await page.getByTestId('login-button')).toHaveId("login-button")
})

test("Assertion 'to have className' - check if the element has the expected className", async({page}) => {
    await page.goto("https://www.saucedemo.com/")
    await page.getByTestId('username').fill("standard_user")
    await page.getByTestId('password').fill("secret_sauce")

    await expect(await page.getByTestId('login-button')).toHaveClass("submit-button btn_action")
})

test("Assertion 'to have url' - check if the element has the expected url for the page", async({page}) => {
    await page.goto("https://www.saucedemo.com/")
    await page.getByTestId('username').fill("standard_user")
    await page.getByTestId('password').fill("secret_sauce")

    await expect(page).toHaveURL("https://www.saucedemo.com/")
})

test("Assertion 'to have title' - check if the element has the expected title of the page", async({page}) => {
    await page.goto("https://www.saucedemo.com/")
    await page.getByTestId('username').fill("standard_user")
    await page.getByTestId('password').fill("secret_sauce")

    await expect(page).toHaveTitle("Swag Labs")
})


// Non-Auto Retry Assertions: https://playwright.dev/docs/test-assertions#non-retrying-assertions

test("Assertion 'to be' - check if Value is the same", async({page}) => {
    expect(1+2).toBe(3)
})

test("Assertion 'to be less than' - check if Value is less than", async({page}) => {
    expect(1+2).toBeLessThan(4)
})

// Negating matchers: Using .not to negate a matcher, you can assert that a value does not match the expected value.
test("Assertion 'not.toHaveTitle' - check if the element does not have the expected title of the page", async({page}) => {
    await page.goto("https://www.saucedemo.com/")
    await expect(page).not.toHaveTitle("Swag Labs-1")
})


test("Assertion 'not.toEqual' - check if Value is not the same", async({page}) => {
    expect(1+2).not.toEqual(4)
})

test("Assertion 'not.toContainText' - check if the element does not have the expected title of the page", async({page}) => {
    await page.goto("https://www.saucedemo.com/")
    await expect(await page.locator(".login_logo")).not.toContainText("Swag Labs-1")
})

// Custom Error Messages: You can specify a custom expect message as a second argument to the expect function
test("Assertion with custom error message", async({page}) => {
    await page.goto("https://www.saucedemo.com/")
    await expect(page, "Custom Error Message: Expected title 'Swag Labs-1' but got 'Swag Labs'").toHaveTitle("Swag Labs-1")
})

// Soft Assertions: Soft assertions allow the test to continue executing even if an assertion fails. 
// This can be useful when you want to check multiple conditions in a single test without stopping at the first failure.

test("Soft Assertion Example", async({page}) => {
    await page.goto("https://www.saucedemo.com/")
    await page.getByTestId('username').fill("standard_user")
    await page.getByTestId('password').fill("secret_sauce")

    await expect.soft(await page.getByTestId('login-button')).toBeDisabled()
    await expect(page).toHaveURL("https://www.saucedemo.com/")

})