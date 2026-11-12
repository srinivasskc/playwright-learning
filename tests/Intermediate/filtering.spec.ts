import { test, expect } from '@playwright/test'


test.beforeEach("Logging In", async ({ page }) => {
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
        filter({ has: page.getByRole("button", { name: "View details for Test.allTheThings() T-Shirt (Red)" }) }).
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

test("within() strategy", async ({ page }) => {
    await page.getByRole("button", { name: "Open Menu" }).click()
    const menu = await page.locator(".bm-menu-wrap")
    await menu.getByRole("button", { name: "All Items" }).click()
    await menu.getByRole("link", { name: "About" }).click()
})

test("Counting Elements", async ({ page }) => {
    //await page.waitForLoadState('networkidle');
    await page.getByTestId("inventory-item").first().waitFor();
    const count = await page.getByTestId("inventory-container").getByTestId("inventory-item").count()
    console.log("Count of Inventory Items : " + count)
})

test("Verifying all items have price", async ({ page }) => {
    await page.getByTestId("inventory-item").first().waitFor();

    const inventoryItems = await page.getByTestId("inventory-container").getByTestId("inventory-item")
    const count = await inventoryItems.count()
    console.log("Count of Inventory Items : " + count)

    for (const inventoryItem of await inventoryItems.all()) {
        await expect(inventoryItem.getByTestId("inventory-item-price")).toBeVisible()
    }
})