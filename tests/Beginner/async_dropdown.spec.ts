import {test, expect} from '@playwright/test'

test("Async dropdown", async({page}) => {
    await page.goto("https://www.fundootesters.com/TestersPlayground/dropdowns")

    await expect(page.getByText("Async dropdown")).toBeVisible()

    const async_dropdown = await page.getByRole("combobox", {name:"Async dropdown"})
    await expect(async_dropdown).toHaveText("Select an option")

    const load_button = await page.getByRole("button", {name: "Load"})
    await load_button.click()
    await page.waitForTimeout(2000)

    await async_dropdown.selectOption("Safari")
    await expect(async_dropdown.getByRole("option", {name: "Safari"}))
})