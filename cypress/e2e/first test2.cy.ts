import { should } from "chai"
import './commands.js'
//const {each}= require ("cypress/types/bluebird");
let username = "standard_user"
let password = "secret_sauce"

//beforeEach(() => {

    //for (let i = 0; i < 10; i++) {
        //console.log ("Before Each" + i);
      //}
    //cy.validLogin()
    
 //})




describe("🚀 Visit Page and Login",() =>{
    
    
    it.only("Visit Page",()=>{
        cy.visit("https://www.saucedemo.com/")
    })

    it.only("Login [L_001 - Automated]",() => {
        cy
        .get("input[id='user-name']")
        .type(username)
        .get("input[id='password']")
        .type(password)
        .get("input[id='login-button']")
        .click()
    })

    it.only("Landing Page", () => {
        cy
        .get("div[id='inventory_container']")
        .contains("Sauce Labs Backpack")
        .get("button[id='add-to-cart-sauce-labs-backpack']")
        .click()
        .wait(3000)



    })

})

describe("Product Page item",()=>{

    it.only("Go To Item", () => {
        
        cy.scrollTo('top')
        .get("div[id='inventory_container']")
        .contains("Sauce Labs Bike Light")
        .get("button[id='add-to-cart-sauce-labs-bike-light']")
    })

    it.only("Select Another Item", () => {
        cy

        .get("div[id='inventory_container']")
        .contains("Sauce Labs Fleece Jacket")

       .click()
        
    }) 
    it("select Jacket",()=> {
    cy
    .get("div[id='add-to-cart-sauce-labs-bolt-t-shirt']")
    .click()

    })

    it("Click Sorting Field", () => {
        cy
        .get("select[data-test='product_sort_container']")
        .select('Price (high to low)')
    })


    
})