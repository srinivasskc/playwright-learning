import {Page, Locator} from '@playwright/test'

export class LoginPage{
    readonly page : Page;
    readonly usernameTextBox : Locator;
    readonly passwordTextBox : Locator;
    readonly loginButton : Locator;

    constructor(page: Page){
        this.page = page
        this.usernameTextBox = page.getByRole("textbox",{"name":"Username"})
        this.passwordTextBox = page.getByRole("textbox", {name: "Password"})
        this.loginButton = page.getByRole("button", {name: "Login"})
    }

    // Add action methods using objects.

    async goToLoginPage(){
        await this.page.goto("https://www.saucedemo.com/")
    }
    
    async login(username: string,password:string){
        await this.usernameTextBox.fill(username)
        await this.passwordTextBox.fill(password)
        await this.loginButton.click()
    }

    async verifyLoginSuccess(){
        await this.page.waitForURL("https://www.saucedemo.com/inventory.html")
    }

}