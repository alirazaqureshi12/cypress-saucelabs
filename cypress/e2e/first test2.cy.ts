import { should } from "chai"

let username = "standard_user"
let password = "secret_sauce"

describe("🚀 Visit Page and Login",() =>{
    
    
    it("Visit Page",()=>{
        cy.visit("https://www.saucedemo.com/")
    })

    it("Login [L_001 - Automated]",() => {
        cy
        .get("input[id='user-name']")
        .type(username)
        .get("input[id='password']")
        .type(password)
        .get("input[id='login-button']")
        .click()
    })

    it("Landing Page", () => {
        cy
        .get("div[id='inventory_container']")
        .contains("Sauce Labs Backpack")
        .get("button[id='add-to-cart-sauce-labs-backpack']")
        .click()
        .wait(3000)



    })

})

describe("Product Page item",()=>{

    it("Go To Item", () => {
        
        cy.scrollTo('top')
        .get("div[id='inventory_container']")
        .contains("Sauce Labs Bike Light")
        .get("button[id='add-to-cart-sauce-labs-bike-light']")
    })

    it("Select Another Item", () => {
        cy
        .get("button[name='add-to-cart-sauce-labs-bolt-t-shirt']")
        .click()
    })  

    it("Click Sorting Field", () => {
        cy
        .get("select[data-test='product_sort_container']")
        .select('Price (high to low)')
    })


    
})