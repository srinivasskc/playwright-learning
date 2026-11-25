import { Page, Locator } from '@playwright/test'

export class CartPage {
    readonly page: Page;
    readonly backPackLinkItem: Locator;

    constructor(page: Page) {
        this.page = page
        this.backPackLinkItem = page.getByTestId('item-4-title-link')
    }
}
