import {test, expect} from '@playwright/test'

// Chaining Locators
test("Chaining Locators", async({page}) => {
    await page.goto("https://demo.qatestacademy.com/products")
    await page.getByTestId("product-1").getByRole("button", {name: "Add to Cart"}).click()
})


test("Filter by 1st Element in the list", async({page}) => {
    await page.goto("https://demo.qatestacademy.com/products")
    await page.getByRole("list").nth(0).getByRole("link",{name: "About"}).click()
})

test("Filter by last Element in the list", async({page}) => {
    await page.goto("https://demo.qatestacademy.com/products")
    await page.getByRole("list").nth(-1).getByRole("link",{name: "FAQ"}).click()
})