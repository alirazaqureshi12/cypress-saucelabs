/// <reference types = "cypress"/>

import { itempage } from "./Pages/Backpack"
import { userlogin } from "./Pages/Loginpage"




describe("Login & Booking of Sauce Labs Backpack", () => {
    it('Item 1', () => {
        cy.visit('https://www.saucedemo.com/')

    
    userlogin.loginUser('standard_user','secret_sauce')
    itempage.addBackpack()
    itempage.clickCart()
    itempage.fillForm('Ippi','Qureshi','38678')
        
        
    })
})