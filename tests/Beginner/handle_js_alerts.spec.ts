import {test, expect} from '@playwright/test'

test("Handling JS Alerts", async({page}) => {
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")

    await expect(page.getByRole("heading", {name: "JavaScript Alerts"})).toBeVisible()

    //Before clicking the JS Alerts, we need to provide dialog handler.
    page.once("dialog", async dialog => {
        expect(dialog.type()).toEqual("alert")
        expect(dialog.message()).toEqual("I am a JS Alert")
        await dialog.accept()
    })

    await page.getByRole("button", {name: "Click for JS Alert"}).click()
    await expect(page.getByText("You successfully clicked an alert")).toBeVisible()


})

test("Handling JS Confirm", async({page}) => {
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")

    await expect(page.getByRole("heading", {name: "JavaScript Alerts"})).toBeVisible()

    //Before clicking the JS Alerts, we need to provide dialog handler.
    page.once("dialog", async dialog => {
        expect(dialog.type()).toEqual("confirm")
        expect(dialog.message()).toEqual("I am a JS Confirm")
        await dialog.dismiss()
    })

    await page.getByRole("button", {name: "Click for JS Confirm"}).click()
    await expect(page.getByText("You clicked: Cancel")).toBeVisible()


})


test("Handling JS Prompt", async({page}) => {
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")

    await expect(page.getByRole("heading", {name: "JavaScript Alerts"})).toBeVisible()

    //Before clicking the JS Alerts, we need to provide dialog handler.
    page.once("dialog", async dialog => {
        expect(dialog.type()).toEqual("prompt")
        expect(dialog.message()).toEqual("I am a JS prompt")
        await dialog.accept("Hello")
    })

    await page.getByRole("button", {name: "Click for JS Prompt"}).click()
    await expect(page.getByText("You entered: Hello")).toBeVisible()
})

test("Alerts - Show Alert", async({page}) => {
    await page.goto("https://www.fundootesters.com/TestersPlayground/alerts")
    await expect(page.getByRole("heading", {name: "Alerts & notifications"})).toBeVisible()

    await expect(page.getByRole("heading",{name:"Native browser dialogs"})).toBeVisible()


    page.once('dialog', async dialog => {
        expect(dialog.type()).toEqual("alert")
        expect(dialog.message()).toEqual("This is a JavaScript alert")
        await dialog.accept()
    })

    await page.getByRole("button", {name: "Show alert"}).click()
    await expect(page.getByText("result: alert accepted")).toBeVisible()
})

test("Alerts - Show Confirm", async({page}) => {
    await page.goto("https://www.fundootesters.com/TestersPlayground/alerts")
    await expect(page.getByRole("heading", {name: "Alerts & notifications"})).toBeVisible()

    await expect(page.getByRole("heading",{name:"Native browser dialogs"})).toBeVisible()


    page.once('dialog', async dialog => {
        expect(dialog.type()).toEqual("confirm")
        expect(dialog.message()).toEqual("Do you want to continue?")
        await dialog.dismiss()
    })

    await page.getByRole("button", {name: "Show confirm"}).click()
    await expect(page.getByText("result: confirm dismissed")).toBeVisible()
})

test("Alerts - Show Prompt", async({page}) => {
    await page.goto("https://www.fundootesters.com/TestersPlayground/alerts")
    await expect(page.getByRole("heading", {name: "Alerts & notifications"})).toBeVisible()

    await expect(page.getByRole("heading",{name:"Native browser dialogs"})).toBeVisible()


    page.once('dialog', async dialog => {
        expect(dialog.type()).toEqual("prompt")
        expect(dialog.message()).toEqual("What is your favourite locator strategy?")
        expect(dialog.defaultValue()).toEqual("data-testid")
        // dialog.accept() with no argument submits an empty string. It doesn't accept the prompt's pre-filled default
        await dialog.accept(dialog.defaultValue())
    })

    await page.getByRole("button", {name: "Show prompt"}).click()
    await expect(page.getByText("result: prompt: data-testid")).toBeVisible()
})
