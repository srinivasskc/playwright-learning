import {Page, Locator} from '@playwright/test';


export class HomePage{
    // Adding Variables
    readonly page: Page;
    readonly homePageHeading : Locator;
    readonly backPackAddToCartButton : Locator;
    readonly backPackRemoveFromCartButton : Locator
    readonly cartButton : Locator;
    readonly cartIcon: Locator;

    // Adding locators
    constructor(page: Page){
        this.page = page
        this.backPackAddToCartButton = page.getByTestId('add-to-cart-sauce-labs-backpack')
        this.backPackRemoveFromCartButton = page.getByTestId('remove-sauce-labs-backpack')
        this.cartIcon = page.getByTestId("shopping-cart-badge")
        this.cartButton = page.getByTestId('shopping-cart-link')
        this.homePageHeading = page.getByText('Swag Labs')
    }

    // Adding Actions or Methods
    async backPackAddToCart(){
        await this.backPackAddToCartButton.click()
    }

    async goToCart(){
        await this.cartButton.click()
    }




}

