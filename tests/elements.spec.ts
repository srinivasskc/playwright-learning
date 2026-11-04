import {test, expect} from '@playwright/test'

test("Filter by first element in table", async({page}) => {
    await page.goto("https://the-internet.herokuapp.com/tables")
    const secondRow = await page.getByRole("table").getByRole("row").nth(1);
    await expect(secondRow.getByRole("cell").first()).toHaveText("Smith")
})