import {test, expect, chromium} from '@playwright/test'


test("Navigating to two pages in new tabs", async()=>{

    //Creating a new browser
    const browser = await chromium.launch()
    //Creating a new context
    const context = await browser.newContext()

    //Create two different pages
    const page1 = await context.newPage()
    const page2 = await context.newPage()

    const all_pages = context.pages()
    console.log("No. of Pages Created: ", all_pages.length)

    await page1.goto("https://www.fundootesters.com/TestersPlayground/iframes")
    await expect(page1).toHaveTitle("IFrames: automation practice & test scenarios | FundooTesters")

    await page2.goto("https://www.fundootesters.com/")
    await expect(page2).toHaveTitle("FundooTesters | Learn Software Testing, Automation, API Testing & AI for Testers")

})

test("Handle Multiple Pages/Windows", async()=>{

    //Creating a new browser
    const browser = await chromium.launch()
    //Creating a new context
    const context = await browser.newContext()

    //Create one page
    const page1 = await context.newPage()

    // Navigate to page 1
    await page1.goto("https://www.fundootesters.com/TestersPlayground/iframes")
    await expect(page1).toHaveTitle("IFrames: automation practice & test scenarios | FundooTesters")

    const pagePromise = await context.waitForEvent("page")

    page1.getByRole("link", {name: "Fun Doo Testers: home"}).click()

    const newPage = await pagePromise
    await expect(newPage).toHaveTitle("FundooTesters | Learn Software Testing, Automation, API Testing & AI for Testers")

    await page1.waitForTimeout(30000)
    await newPage.waitForTimeout(3000)

    await browser.close()
})




test("Handle - Open a New Tab" , async({page}) => {
    const popupPromise = page.waitForEvent("popup")
    await page.goto("https://www.fundootesters.com/TestersPlayground/iframes")
    await expect(page.getByRole("heading", {name: "Windows & tabs"})).toBeVisible()

    await page.getByRole("button", {name: "Open new tab"}).click()

    const popup = await popupPromise
    await popup.waitForLoadState()

    await expect(popup.getByText("Opens real windows. Collect the handles and switch between them.")).toBeVisible()

    await expect(page.getByText("opened: 1")).toBeVisible()

})

test("Handle - Open a Popup Window" , async({page}) => {
    const popupPromise = page.waitForEvent("popup")
    await page.goto("https://www.fundootesters.com/TestersPlayground/iframes")
    await expect(page.getByRole("heading", {name: "Windows & tabs"})).toBeVisible()

    await page.getByRole("button", {name: "Open popup window"}).click()

    const popup = await popupPromise
    await popup.waitForLoadState()

    await expect(popup.getByText("Opens real windows. Collect the handles and switch between them.")).toBeVisible()

    await expect(page.getByText("opened: 1")).toBeVisible()

})


test("Handle - Multiple Tabs" , async() => {

    const browser = await chromium.launch({headless: false})
    const context = await browser.newContext()

    const page = await context.newPage()

    
    await page.goto("https://www.fundootesters.com/TestersPlayground/iframes")
    await expect(page.getByRole("heading", {name: "Windows & tabs"})).toBeVisible()


    const [newTab] = await Promise.all([
        page.waitForEvent("popup"),
        page.getByRole("button", {name: "Open new tab"}).click()
    ])

    await newTab.waitForLoadState()
    console.log("New Tab URL is: ", newTab.url())
    await page.waitForTimeout(5000)
    await newTab.close()

})


test("Handle - Multiple Windows" , async() => {

    const browser = await chromium.launch({headless: false})
    const context = await browser.newContext()

    const page = await context.newPage()

    
    await page.goto("https://www.fundootesters.com/TestersPlayground/iframes")
    await expect(page.getByRole("heading", {name: "Windows & tabs"})).toBeVisible()


    const [newWindow] = await Promise.all([
        context.waitForEvent("page"),
        page.getByRole("button", {name: "Open two windows"}).click()
    ])

    await newWindow.waitForLoadState()
    console.log("New newWindow URL is: ", newWindow.url())
    await page.waitForTimeout(5000)
    await newWindow.close()
})