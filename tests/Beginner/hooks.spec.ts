import { test, expect } from '@playwright/test';

test.beforeAll("Practice beforeAll Hook", async () => {
    console.log("Starting beforeAll Hook")
})


test("Practice test 1", async ({ page }) => {
    console.log("Starting Practice Test 1")
    await page.goto("https://www.saucedemo.com/")
    console.log(await page.title())
    console.log("Ending Practice Test 1")
})

test("Practice test 2", async ({ page }) => {
    console.log("Starting Practice Test 2")
    await page.goto("https://www.saucedemo.com/")
    console.log(await page.title())
    console.log("Ending Practice Test 2")
})

test("Practice test 3", async ({ page }) => {
    console.log("Starting Practice Test 3")
    await page.goto("https://www.saucedemo.com/")
    console.log(await page.title())
    console.log("Ending Practice Test 3")
})

test.afterEach(async () => {
    console.log("Ending afterEach Hook")
})

test.describe("Practice Test - Describe two tests", async () => {
    test.beforeEach("Practice beforeEach Hook", async ({ page }) => {
        console.log("Starting beforeEach Hook")
    })

    test("Practice test 4", async ({ page }) => {
        console.log("Starting Practice Test 4")
        await page.goto("https://www.saucedemo.com/")
        console.log(await page.title())
        console.log("Ending Practice Test 4")
    })

    test("Practice test 5", async ({ page }) => {
        console.log("Starting Practice Test 5")
        await page.goto("https://www.saucedemo.com/")
        console.log(await page.title())
        console.log("Ending Practice Test 5")
    })
})

test.afterAll("Practice afterAll Hook", async () => {
    console.log("Ending afterAll Hook")
})
