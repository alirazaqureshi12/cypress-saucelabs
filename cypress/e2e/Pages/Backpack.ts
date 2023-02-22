import { Cart } from "./Cart"

class Itempage extends Cart {

    landingPageLocators = {
        sauceLabsBackPack:(item_name: string) => cy.get('.inventory_item_name').contains(item_name)
    }

    addItem(item_name: string) {
        this.landingPageLocators.sauceLabsBackPack(item_name).click()
        this.clickCart()
        
        
    }

}

export let itempage = new Itempage()