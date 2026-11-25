import {test} from '@playwright/test'
import {LoginPage} from '../../pages/LoginPage'

test("Verification of Login", async({page}) => {
    const loginPageObj = new LoginPage(page)

    await loginPageObj.goToLoginPage()
    await loginPageObj.login("standard_user", "secret_sauce")
    await loginPageObj.verifyLoginSuccess()
})