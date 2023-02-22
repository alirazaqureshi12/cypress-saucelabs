import { BasePage } from "./Basepage"

export class Cart extends BasePage {


    cartLocators = {
        cartbtn:() => cy.get('.shopping_cart_link'),
        checkoutbtn:() => cy.get('#checkout')
    }

    fillCheckoutFormLocators = {
        firstnameField:() => cy.get('#first-name'),
        lastnameField:() => cy.get('#last-name'),
        zipcodeField:() => cy.get('#postal-code'),
        continuebtn:() => cy.get('#continue')
    }


    clickCart () {
        this.cartLocators.cartbtn().click()
        this.cartLocators.checkoutbtn().click()
    }

    fillForm (firstname: string, lastname: string, zipcode: string) {
        this.fillCheckoutFormLocators.firstnameField().type(firstname)
        this.fillCheckoutFormLocators.lastnameField().type(lastname)
        this.fillCheckoutFormLocators.zipcodeField().type(zipcode)
        this.fillCheckoutFormLocators.continuebtn().click()
        cy.get('.title').contains('Checkout: Overview')
    }

}