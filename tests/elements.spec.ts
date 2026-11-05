import {test, expect} from '@playwright/test'

test("Filter by first element in table", async({page}) => {
    await page.goto("https://the-internet.herokuapp.com/tables")
    const secondRow = await page.getByRole("table").getByRole("row").nth(1);
    await expect(secondRow.getByRole("cell").first()).toHaveText("Smith")
})

test("Filter by last element in table", async({page}) => {
    await page.goto("https://the-internet.herokuapp.com/tables")
    const lastRow = await page.getByRole("table").getByRole("row").nth(4);
    await expect(lastRow.getByRole("cell").first()).toHaveText("Conway")
    await expect(lastRow.getByRole("cell").last()).toHaveText("edit delete")

    const deleteLink = lastRow.getByRole("cell").last().getByRole("link", {name: "delete"})
    await deleteLink.click()
})
