import { test, expect } from '@playwright/test'

test.use({ testIdAttribute: "data-testid" })

test("Single Checkbox", async ({ page }) => {
    await page.goto("https://www.fundootesters.com/TestersPlayground")
    await page.getByRole("link", { name: "Checkboxes & radio" }).click()

    await expect(page.getByRole("heading", { name: "Checkboxes" }))

    await expect(page.getByText("state: true"))

    await page.getByRole("checkbox", { name: "Single checkbox" }).setChecked(true)

    await expect(page.getByRole("checkbox", { name: "Single checkbox" })).toBeChecked()
    await expect(page.getByTestId("single-checkbox-state"))
    await expect(page.getByText("state: true"))
})


test("Multi Checkbox - check & uncheck", async ({ page }) => {
    await page.goto("https://www.fundootesters.com/TestersPlayground")
    await page.getByRole("link", { name: "Checkboxes & radio" }).click()

    await expect(page.getByRole("heading", { name: "Checkboxes" }))

    const chromeCheckbox = await page.getByRole("checkbox", { name: "Chrome" })
    const firefoxCheckbox = await page.getByRole("checkbox", { name: "Firefox" })
    const safariCheckbox = await page.getByRole("checkbox", { name: "Safari" })

    await chromeCheckbox.check()
    await firefoxCheckbox.check()
    await safariCheckbox.setChecked(true)

    await expect(chromeCheckbox).toBeChecked()
    await expect(firefoxCheckbox).toBeChecked()
    await expect(safariCheckbox).toBeChecked()

    await chromeCheckbox.uncheck()
    await firefoxCheckbox.uncheck()
    await safariCheckbox.setChecked(false)

    await expect(chromeCheckbox).not.toBeChecked()
    await expect(firefoxCheckbox).not.toBeChecked()
    await expect(safariCheckbox).not.toBeChecked()

})

test("Multi Checkbox - check & uncheck with IF condition", async ({ page }) => {
    await page.goto("https://www.fundootesters.com/TestersPlayground")
    await page.getByRole("link", { name: "Checkboxes & radio" }).click()

    await expect(page.getByRole("heading", { name: "Checkboxes" }))

    const chromeCheckbox = await page.getByRole("checkbox", { name: "Chrome" })
    const firefoxCheckbox = await page.getByRole("checkbox", { name: "Firefox" })
    const safariCheckbox = await page.getByRole("checkbox", { name: "Safari" })

    await chromeCheckbox.check()
    await firefoxCheckbox.check()
    await safariCheckbox.setChecked(true)

    await expect(chromeCheckbox).toBeChecked()
    await expect(firefoxCheckbox).toBeChecked()
    await expect(safariCheckbox).toBeChecked()

    if (await chromeCheckbox.isChecked()) {
        console.log("ChromeCheckbox Element was checked")
        await chromeCheckbox.uncheck()
        console.log("ChromeCheckbox Element was unchecked")
    }

    if (await firefoxCheckbox.isChecked()) {
        console.log("firefoxCheckbox Element was checked")
        await firefoxCheckbox.uncheck()
        console.log("firefoxCheckbox Element was unchecked")
    }

     if (await safariCheckbox.isChecked()) {
        console.log("safariCheckbox Element was checked")
        await safariCheckbox.uncheck()
        console.log("safariCheckbox Element was unchecked")
    }

    await expect(chromeCheckbox).not.toBeChecked()
    await expect(firefoxCheckbox).not.toBeChecked()
    await expect(safariCheckbox).not.toBeChecked()

})


test("Multi Checkbox - check & uncheck with For-IF condition", async ({ page }) => {
    await page.goto("https://www.fundootesters.com/TestersPlayground")
    await page.getByRole("link", { name: "Checkboxes & radio" }).click()

    await expect(page.getByRole("heading", { name: "Checkboxes" }))

    const chromeCheckbox = await page.getByRole("checkbox", { name: "Chrome" })
    const firefoxCheckbox = await page.getByRole("checkbox", { name: "Firefox" })
    const safariCheckbox = await page.getByRole("checkbox", { name: "Safari" })

    await chromeCheckbox.check()
    await firefoxCheckbox.check()
    await safariCheckbox.setChecked(true)

    await expect(chromeCheckbox).toBeChecked()
    await expect(firefoxCheckbox).toBeChecked()
    await expect(safariCheckbox).toBeChecked()

    const checkboxes = [
        {name: "Chrome", locator: chromeCheckbox},
        {name: "Firefox", locator: firefoxCheckbox},
        {name: "Safari", locator: safariCheckbox}
    ]

    for(const {name, locator} of checkboxes){
        if(await locator.isChecked()){
            console.log(`${name} checkbox is checked`)
            await locator.uncheck()
            console.log(`${name} checkbox is unchecked`)
        }
    }

    await expect(chromeCheckbox).not.toBeChecked()
    await expect(firefoxCheckbox).not.toBeChecked()
    await expect(safariCheckbox).not.toBeChecked()

})