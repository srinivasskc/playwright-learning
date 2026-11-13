import {test, expect} from '@playwright/test'

test("Handling JS Alerts", async({page}) => {
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")

    await expect(page.getByRole("heading", {name: "JavaScript Alerts"}))

    //Before clicking the JS Alerts, we need to provide dialog handler.
    page.on("dialog", dialog => {
        expect(dialog.type()).toEqual("alert")
        expect(dialog.message()).toEqual("I am a JS Alert")
        expect(dialog.accept())
    })

    await page.getByRole("button", {name: "Click for JS Alert"}).click()
    await expect(page.getByText("You successfully clicked an alert")).toBeVisible()


})

test("Handling JS Confirm", async({page}) => {
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")

    await expect(page.getByRole("heading", {name: "JavaScript Alerts"}))

    //Before clicking the JS Alerts, we need to provide dialog handler.
    page.on("dialog", dialog => {
        expect(dialog.type()).toEqual("confirm")
        expect(dialog.message()).toEqual("I am a JS Confirm")
        expect(dialog.dismiss())
    })

    await page.getByRole("button", {name: "Click for JS Confirm"}).click()
    await expect(page.getByText("You clicked: Cancel")).toBeVisible()


})


test("Handling JS Prompt", async({page}) => {
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")

    await expect(page.getByRole("heading", {name: "JavaScript Alerts"}))

    //Before clicking the JS Alerts, we need to provide dialog handler.
    page.on("dialog", dialog => {
        expect(dialog.type()).toEqual("prompt")
        expect(dialog.message()).toEqual("I am a JS prompt")
        expect(dialog.accept("Hello"))
    })

    await page.getByRole("button", {name: "Click for JS Prompt"}).click()
    await expect(page.getByText("You entered: Hello")).toBeVisible()


})