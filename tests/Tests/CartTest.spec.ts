import {expect, test} from '@playwright/test'
import { LoginPage } from '../../pages/LoginPage'
import {HomePage} from '../../pages/HomePage'
import {CartPage} from '../../pages/CartPage'

test("Verification of Pages after Login", async({page}) => {
    const loginPageObj = new LoginPage(page)

    await loginPageObj.goToLoginPage()
    await loginPageObj.login("standard_user", "secret_sauce")
    await loginPageObj.verifyLoginSuccess()

    const homePageObj = new HomePage(page)
    //Assertion in CartTest.Spec.ts
    await expect(homePageObj.homePageHeading).toHaveText("Swag Labs")
    //Calling the methods.
    await homePageObj.backPackAddToCart()
    //Assertion - Cart Icon
    await expect(homePageObj.cartIcon).toHaveText("1")
    //Assertion - RemoveButton Appears
    await expect(homePageObj.backPackRemoveFromCartButton).toBeVisible()
    //Go to Cart
    await homePageObj.goToCart()
    
    const cartPageObj = new CartPage(page)
    await expect(cartPageObj.backPackLinkItem).toHaveText("Sauce Labs Backpack")

})