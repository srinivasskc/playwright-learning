import { test, expect } from '@playwright/test'


test("Native Dropdowns - Visible Text", async ({ page }) => {
    await page.goto("https://www.fundootesters.com/TestersPlayground")
    await page.getByRole("link", { name: "Dropdowns" }).click()
    await expect(page.getByRole("heading", { name: "Dropdowns" })).toBeVisible()
    await expect(page.getByRole("heading", { name: "Native & grouped select" })).toBeVisible()
    await expect(page.getByLabel("HTML select", { exact: true })).toBeVisible()
    const htmlSelect = page.getByRole("combobox", { name: "HTML select" })
    await htmlSelect.selectOption("Selenium")
    //await expect(htmlSelect.getByRole("option")).toHaveText("Selenium")
})


test("Native Dropdowns - Value", async ({ page }) => {
    await page.goto("https://artoftesting.com/samplesiteforselenium")

    await expect(page.getByText("Drop down", { exact: false })).toBeVisible()

    await page.locator("#testingDropdown").selectOption("Performance")
})

test("Native Dropdowns - Label", async ({ page }) => {
    await page.goto("https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_option_label")
    await page.locator('#iframeResult').contentFrame().getByLabel('Choose a car:').selectOption("Mercedes")
})

test("Native Dropdowns - Value Attribute's Value Text", async ({ page }) => {
    await page.goto("https://www.fundootesters.com/TestersPlayground")
    await page.getByRole("link", { name: "Dropdowns" }).click()
    
    await expect(page.getByRole("heading", { name: "Dropdowns" })).toBeVisible()
    await expect(page.getByRole("heading", { name: "Native & grouped select" })).toBeVisible()
    await expect(page.getByLabel("HTML select", { exact: true })).toBeVisible()
    
    const htmlSelect = page.getByRole("combobox", { name: "HTML select" })
    await htmlSelect.selectOption({value:"WebdriverIO"})
})

test("Native Dropdowns - Label Attribute's Value Text", async ({ page }) => {
    await page.goto("https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_option_label")
    await page.locator('#iframeResult').contentFrame().getByLabel('Choose a car:').selectOption({label: "Saab"})
})

test("Native Dropdowns - Label Attribute not there - so visible Text with label attribute", async ({ page }) => {
    await page.goto("https://www.fundootesters.com/TestersPlayground")
    await page.getByRole("link", { name: "Dropdowns" }).click()
        
    const htmlSelect = page.getByRole("combobox", { name: "HTML select" })
    await htmlSelect.selectOption({label:"Cypress"})
})

test("Native Dropdowns - Index Number for Specific Item", async ({ page }) => {
    await page.goto("https://www.fundootesters.com/TestersPlayground")
    await page.getByRole("link", { name: "Dropdowns" }).click()
        
    const htmlSelect = page.getByRole("combobox", { name: "HTML select" })
    await htmlSelect.selectOption({index:1})
})