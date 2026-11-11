import {test, expect} from '@playwright/test'

test("Fill, input and textarea", async({page}) => {
    await page.goto("https://ultimateqa.com/filling-out-forms/")
    await page.locator("#et_pb_contact_name_0").fill("Srinivas")
    await page.locator('#et_pb_contact_message_0').fill("Good Morning")
})

test("Fill, contenteditable", async({page}) => {
    await page.goto("https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_global_contenteditable")
    await page.locator('iframe[name="iframeResult"]').contentFrame().getByText('This is a paragraph. It is').fill("Testing Editable with Playwright")
})

test("Press Sequentially", async({page}) => {
    await page.goto("https://www.google.com")
    //await page.getByRole("combobox", {name: "Search"}).fill("Playwright")
    await page.getByRole("combobox", {name: "Search"}).pressSequentially("Playwright",{delay: 50})
})

test("Press - ArrowDown, Enter", async({page}) => {
    await page.goto("https://www.google.com")
    await page.getByRole("combobox", {name: "Search"}).pressSequentially("Playwright",{delay: 50})
    await page.getByRole("combobox", {name: "Search"}).press("ArrowDown+ArrowDown+ArrowDown")
    await page.getByRole("combobox", {name: "Search"}).press("Enter")
})

test("Press - Backspace", async({page}) => {
    await page.goto("https://www.google.com")
    await page.getByRole("combobox", {name: "Search"}).pressSequentially("Playwright",{delay: 10})
    await page.getByRole("combobox", {name: "Search"}).press("Backspace", {delay: 1000})
})