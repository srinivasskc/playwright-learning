import { test, expect } from '@playwright/test'

// Testing all tests for firefox in this file.
test.skip(({browserName})=> browserName=="firefox")

// test.describe - groups of tests
test.describe("Practice Test - Describe two tests", async () => {
    test.skip();
    test("Practice test 1", async ({ page }) => {
        console.log("Starting Practice Test 1")
        console.log("Ending Practice Test 1")
    })

    test("Practice test 2", async ({ page }) => {
        console.log("Starting Practice Test 2")
        console.log("Ending Practice Test 2")
    })
})

//test.only - runs only specific test.
test("Practice test 3", async ({ page }) => {
    console.log("Starting Practice Test 3")
    console.log("Ending Practice Test 3")
})

// To Fix the test : fixme
test.fixme("Practice test 4", async ({ page }) => {
    console.log("Starting Practice Test 4")
    console.log("Ending Practice Test 4")
})

// test.skip - skips the test
test.skip("Practice test 5", async ({ page }) => {
    console.log("Starting Practice Test 5")
    console.log("Ending Practice Test 5")
})

// test.skip for the browser-webkit, test is skipped for webkit
test("Practice test 6", async ({ page, browserName }) => {
    test.skip(browserName==="webkit")
    console.log("Starting Practice Test 6")
    console.log("Ending Practice Test 6")
})


// skipping the describe block tests
test.describe("Practice Test - Describe two tests", async () => {
    test.skip(({browserName})=> browserName=="chromium")

    test("Practice test 7", async ({ page }) => {
        console.log("Starting Practice Test 7")
        console.log("Ending Practice Test 7")
    })

    test("Practice test 8", async ({ page }) => {
        console.log("Starting Practice Test 8")
        console.log("Ending Practice Test 8")
    })
})

// slowing the test, will be give 3x default_timeout
test("Practice test 9", async ({ page }) => {
    test.slow()
    console.log("Starting Practice Test 9")
    console.log("Ending Practice Test 9")
})

// slowing the test using setTimeout
test("Practice test 10", async ({ page }) => {
    test.setTimeout(120000)
    console.log("Starting Practice Test 10")
    console.log("Ending Practice Test 10")
})

// test.fail - declaring a failing test
test.fail("Practice test 11", async ({ page }) => {
    console.log("Starting Practice Test 11")
    console.log("Ending Practice Test 11")
})


// test.fail - declaring a failing test
test("Practice test 12", async ({ page, browserName }) => {
    test.fail(browserName==="webkit")
    console.log("Starting Practice Test 12")
    console.log("Ending Practice Test 12")
})