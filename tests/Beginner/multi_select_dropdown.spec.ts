import {test, expect} from '@playwright/test'

test("Handle Multi select dropdown", async({page}) => {
    await page.goto("https://www.testmuai.com/selenium-playground/select-dropdown-demo/")
    await expect(page.getByText("Multi Select Option")).toBeVisible()

    const multiSelect = await page.locator("#multi-select")
    await multiSelect.selectOption("California")
    await page.waitForTimeout(5000)
    await multiSelect.selectOption({value: "New York"})
    await page.waitForTimeout(5000)
    await multiSelect.selectOption({label: "Pennsylvania"})
    await page.waitForTimeout(5000)
    await multiSelect.selectOption(['California','New York','Pennsylvania','Texas'])
    
})

