import {test, expect} from '@playwright/test';

// The local app uses data-testid, but the default chromium project uses data-test.
test.use({ testIdAttribute: 'data-testid' })

test.beforeEach("Task Management App UI Interactions", async({page}) => {
    await page.goto("file:///Users/srinivas.kadiyala/Documents/Tutorials/playwright-tutorial/app/index.html")
})

test("Check the Page Title and Heading", async({page}) => {
    await expect(page).toHaveTitle("TaskFlow")
    await expect(page.getByRole("heading", {name: "TaskFlow"})).toBeVisible()
})

test("Exercise 1: Precise Locators for the Header", async({page}) => {
    const newTask = page.getByRole("button", {name: "New Task"})
    const userAvatar = page.getByRole("img", {name: "User avatar"})
})

test("Exercise 2: Scoped Locators for Task Cards",async({page}) => {
    //get task card - write release notes
    const taskCard = page.getByTestId("task-list").getByTestId("task-card").filter({hasText: "write release notes"})
    const taskCompleteButton = taskCard.getByRole("button", {name: "Complete"})
})

test("Exercise 3: Tab Interaction and Count Assertion", async({page}) => {
    //Click the "Done" tab and assert that exactly 3 task cards are visible:
    const doneTab = page.getByRole("tab", {name: "Done"})
    await doneTab.click()

    await expect(page.getByTestId("task-list").getByTestId("task-card")).toHaveCount(1)
})

test("Exercise 4: Sidebar Count Verification", async({page})=> {
    const sideBar = page.getByRole("complementary",{name: "Sidebar"})
    await expect(sideBar.getByText("/Srinivas's tasks/i")).toBeVisible()
    await expect(sideBar.getByTestId("task-count")).toHaveCount(1)
})

test.only("Putting all together", async({page}) => {
    // Verify initial state
    await expect(page.getByTestId("task-list").getByTestId("task-card")).toHaveCount(4)

    // Filter by Tasks Done
    const doneTab = page.getByRole("tab", {name: "Done"})
    await doneTab.click()
    await expect(page.getByTestId("task-list").getByTestId("task-card")).toHaveCount(1)

    // Complete a Task
    const allTab = page.getByRole("tab", {name: "All"})
    await allTab.click()

    const taskCard = page.getByTestId("task-list").getByTestId("task-card").filter({hasText: "Write login tests"})
    const taskCompleteButton = taskCard.getByRole("button", {name: "Complete"})
    await taskCompleteButton.click()

    await expect(taskCard.getByRole("button", {name: "Completed"})).toBeVisible()

    // Verify the task count in the sidebar is updated
    const sideBar = page.getByRole("complementary",{name: "Sidebar"})
    await expect(sideBar.getByText("Srinivas's tasks")).toBeVisible()
    await expect(sideBar.getByTestId("task-count")).toHaveText("0")
})