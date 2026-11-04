import { test, expect } from '@playwright/test'


test.beforeEach("Logging In", async ({page}) => {
    await page.goto("https://www.saucedemo.com/")
    await page.getByRole("textbox", { name: "Username" }).fill("standard_user")
    await page.getByRole("textbox", { name: "Password" }).fill("secret_sauce")
    await page.getByRole("button", { name: "Login" }).click()
})


// Filter by Text
test("Filter by Text", async ({ page }) => {
    await page.getByTestId("inventory-container").getByTestId("inventory-item").
        filter({ hasText: "Sauce Labs Bolt T-Shirt" }).
        getByRole("button", { name: "Add to cart" }).click()

})

test("Filter by Child Element", async ({ page }) => {
    await page.getByTestId("inventory-container").getByTestId("inventory-item").
    filter({has : page.getByRole("button", {name: "View details for Test.allTheThings() T-Shirt (Red)"})}).
    getByRole("button", { name: "Add to cart" }).click()
})

test("Filter by first Element in the list", async ({ page }) => {
    await page.getByTestId("inventory-container").getByTestId("inventory-item").
    first().getByRole("button", { name: "Add to cart" }).click()
})

test("Filter by last Element in the list", async ({ page }) => {
    await page.getByTestId("inventory-container").getByTestId("inventory-item").
    last().getByRole("button", { name: "Add to cart" }).click()
})

test("Filter by nth Element in the list", async ({ page }) => {
    await page.getByTestId("inventory-container").getByTestId("inventory-item").
    nth(-3).getByRole("button", { name: "Add to cart" }).click()
})