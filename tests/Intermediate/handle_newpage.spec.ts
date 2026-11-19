import {test, expect} from '@playwright/test'


test.only("Handle New Page Tab" , async({page}) => {
    const popupPromise = page.waitForEvent("popup")
    await page.goto("https://www.fundootesters.com/TestersPlayground/iframes")
    await expect(page.getByRole("heading", {name: "Windows & tabs"})).toBeVisible()

    await page.getByRole("button", {name: "Open new tab"}).click()

    const popup = await popupPromise
    await popup.waitForLoadState()

    await expect(popup.getByText("Opens real windows. Collect the handles and switch between them.")).toBeVisible()

    await expect(page.getByText("opened: 1")).toBeVisible()

})