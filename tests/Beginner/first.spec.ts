import {test, expect} from '@playwright/test';

test.use({testIdAttribute: 'data-testid'})

test("Home page has correct title", async ({page}) => {
    await page.goto('https://playwright.dev/')
    await expect(page).toHaveTitle('Fast and reliable end-to-end testing for modern web apps | Playwright')

})

test("User can add to-do item", async ({page}) => {
    //Arrange
    await page.goto("https://demo.playwright.dev/todomvc/#/")

    //Act
    const input = page.getByPlaceholder("What needs to be done?")   
    await input.fill("Learn Playwright")
    await input.press("Enter")

    //Assert
    await expect(page.getByTestId("todo-title")).toHaveText("Learn Playwright")
    await expect(page.getByText("1 item left")).toBeVisible()
})