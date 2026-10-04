import {chromium, test} from '@playwright/test'

// With Page Fixture
test("Kick Start with Playwright", async ({page}) => {
    await page.goto("https://www.google.com")
    await page.getByRole('button', { name: 'Google apps' }).click()

    console.log("My First Test")
})


// Without Page Fixture
test("My second Test Case", async() => {
    const browser = await chromium.launch()
    const context = await browser.newContext()
    const page = await context.newPage()

    await page.goto("https://www.weekendtesting.com/")
    console.log("My second Test")
})

test("My Third Test Case", () => {
    console.log("My Third Test")
})

test("My Fourth Test Case", () => {
    console.log("My Fourth Test")
})

test("My Fifth Test Case", () => {
    console.log("My Fifth Test")
})
