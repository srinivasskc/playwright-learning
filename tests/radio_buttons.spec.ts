import {test, expect} from '@playwright/test'

test("Testing radio buttons", async({page}) => {
    await page.goto("https://www.fundootesters.com/TestersPlayground/checkboxes-radio")
    const yearlyRadio =  page.getByRole("radio", {name: "Yearly"})
    const monthlyRadio = page.getByRole("radio", {name: "Monthly"})
    const lifetimeRadio = page.getByRole("radio", {name: "Lifetime"})
    
    
    await yearlyRadio.check()
    //await lifetimeRadio.check()
    
    await expect(monthlyRadio).not.toBeChecked()
    await expect(yearlyRadio).toBeChecked()
    await expect(lifetimeRadio).not.toBeChecked()
    
})