/// <reference types = "cypress"/>

import { itempage } from "./Pages/Backpack"
import { userlogin } from "./Pages/Loginpage"




describe("Login & Booking of Sauce Labs Backpack", () => {
    it('Item 1', () => {
        cy.visit(itempage.baseUrl)

    
    userlogin.loginUser('standard_user','secret_sauce')
    itempage.addItem('Sauce Labs Onesie')
    itempage.clickCart()
    itempage.fillForm('John','Wick','91052')
    itempage.logout()

        
        
    })
})