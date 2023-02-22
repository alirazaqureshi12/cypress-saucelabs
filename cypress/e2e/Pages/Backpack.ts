import { Cart } from "./Cart"

class Itempage extends Cart {

    landingPageLocators = {
        sauceLabsBackPack:() => cy.get('.inventory_item_name').contains('Sauce Labs Backpack')
    }

    addBackpack() {
        this.landingPageLocators.sauceLabsBackPack().click()
        this.clickCart()
        this.fillForm('Ippi','Qureshi','38678')
        
    }

}

export let itempage = new Itempage()