import {test, expect} from '@playwright/test'


test("Handle Single Iframe - with Framelocator", async ({page}) => {

    await page.goto('https://www.fundootesters.com/TestersPlayground/iframes')
    await expect(page.getByRole("heading", {name: "Single iframe"})).toBeVisible()

    const single_iframe = page.frameLocator('iframe[data-testid="single-frame"]')
    await single_iframe.getByRole("button", {name: "Click me"}).click()
    //await page.waitForTimeout(5000)
    await expect(single_iframe.getByText("Clicked inside the frame")).toBeVisible()
})

test("Handle Nested Iframe - with Framelocator", async ({page}) => {

    await page.goto('https://www.fundootesters.com/TestersPlayground/iframes')
    await expect(page.getByRole("heading", {name: "Nested iframe"})).toBeVisible()

    const nested_iframe = page.frameLocator('iframe[data-testid="outer-frame"]').frameLocator('iframe[data-testid="inner-frame"]')
    await expect(nested_iframe.getByText("Inside the iframe")).toBeVisible()

    await nested_iframe.getByRole('button', { name: 'Click me' }).click()
    await expect(nested_iframe.getByText("Clicked inside the frame", {exact: true})).toBeVisible()
})


test("Handle Single Iframe - with Frame: Name", async ({page}) => {

    await page.goto('https://www.w3schools.com/html/tryit.asp?filename=tryhtml5_input_form')
    
    const w3_action_iframe = page.frame("iframeResult")
    await w3_action_iframe?.getByRole("textbox", {name: "First name:"}).fill("Srinivas")
    await w3_action_iframe?.getByRole("button", {name: "Submit"}).click()
})

test("Handle Single Iframe - with Frame: URL", async ({page}) => {
    await page.goto('https://www.w3schools.com/html/html_iframe.asp')
    const w3_URL_iframe = page.frame({url: "https://www.w3schools.com/html/default.asp"})
    await w3_URL_iframe?.getByRole('button', { name: 'Button to open search field' }).click()
    await w3_URL_iframe?.getByRole('textbox', { name: 'Search field' }).fill("Playwright")
})
