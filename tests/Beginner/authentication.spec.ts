import {test, expect} from '@playwright/test'

test("Login with Standard User", async ({page}) => {
    //Arrange
    await page.goto("https://www.saucedemo.com/")

    //Act
    await page.getByPlaceholder("Username").fill("standard_user")
    await page.getByPlaceholder("Password").fill("secret_sauce")

    await page.getByRole("button", {name: "Login"}).click()

    //Assert 
    await expect(page).toHaveURL(/inventory\.html/)
    await expect(page.getByText("Products")).toBeVisible()
})


test("Login with locked_out_user User", async ({page}) => {
    //Arrange
    await page.goto("https://www.saucedemo.com/")

    //Act
    await page.getByPlaceholder("Username").fill("locked_out_user")
    await page.getByPlaceholder("Password").fill("secret_sauce")

    await page.getByRole("button", {name: "Login"}).click()

    //Assert 
    //await expect(page.getByText("Epic sadface: Sorry, this user has been locked out.")).toBeVisible()
        
})

test("Tester Playground List", async({page}) => {
    await page.goto("https://www.fundootesters.com/TestersPlayground")

    await expect(page.getByRole("heading", {name: "Tester Playground.", level:1})).toBeVisible()

    await expect(page.getByRole("heading", {name: "Explore functionalities", level:2})).toBeVisible()

    await page.getByRole("link", {name: "Authentication"}).click()

    await page.getByRole("link", {name: "Forms & inputs OPEN"}).click()

    await expect(page).toHaveURL(/\/TestersPlayground\/forms$/)
})