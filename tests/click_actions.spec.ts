import {test, expect} from '@playwright/test'

test.use({testIdAttribute: 'data-testid'})


test("Click, Double Click, Right Click", async({page})=> {
    await page.goto("https://www.fundootesters.com/TestersPlayground")
    await page.getByRole("link", {name: "Mouse actions"}).click()

    await page.getByTestId("double-click-target").dblclick()
    await page.getByTestId("double-click-target").dblclick()

    await page.getByTestId("context-menu-target").click({button: "right"})
    await page.getByTestId("hover-target").hover()
})

test("Programmatic Click, Simulate Click", async({page})=>{
    await page.goto("https://www.gravitee.io/platform/ai-agent-management")
    //await page.getByRole('link', { name: 'Speak to an Engineer' }).first().click()
    await page.getByRole('link', { name: 'Speak to an Engineer' }).first().click({force: true})
    //await page.getByRole('link', { name: 'Speak to an Engineer' }).first().dispatchEvent("click")
})

