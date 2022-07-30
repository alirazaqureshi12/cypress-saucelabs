import { should } from "chai"
import cypressConfig from "../../cypress.config"
//import './commands.ts'
//import './index.ts'

//const {each}= require ("cypress/types/bluebird");
let username = "standard_user"
let password = "secret_sauce"

beforeEach(() => {

    for (let i = 0; i < 10; i++) {
        console.log ("Before Each" + i);
      }
    
    
 })




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
})

describe("Products ",() => {
    it("Landing Page", () => {
        cy
        .get("div[id='inventory_container']")
        .contains("Sauce Labs Backpack")
        .get("button[id='add-to-cart-sauce-labs-backpack']")
        .click()
        .wait(3000)
    })
        
    it("Go To Item", () => {
        
            cy.scrollTo('top')
            .get("div[id='inventory_container']")
            .contains("Sauce Labs Bike Light")
            .get("button[id='add-to-cart-sauce-labs-bike-light']")
            .click()
            .wait(3000)
        })
    it("continue shopping",() => {
        cy.scrollTo('top')
        .get("div[id='inventory_container']")
        .contains("Sauce Labs Bolt T-Shirt")
        .get("button[id='add-to-cart-sauce-labs-bolt-t-shirt']")
        .click()
        .wait(3000)

    })
    
    it("Other item to buy",() => {
        cy
        .get("div[id='inventory_container']")
        .contains("Sauce Labs Fleece Jacket")
        .get("button[id='add-to-cart-sauce-labs-fleece-jacket']")
        .click()
        .wait(3000)
    })

    it("Junior stuff",()=> {
        cy
        .get("div[id='inventory_container']")
        .contains("Sauce Labs Onesie")
        .get("button[id='add-to-cart-sauce-labs-onesie']")
        .click()
        .wait(3000)
    })

    it("Final iten to buy",()=> {
        cy
        .get("div[id='inventory_container'")
        .contains("T-Shirt")
        .get("button[id='add-to-cart-test.allthethings()-t-shirt-(red)']")
        .click()
        .wait(3000)

    })
    
    it("Shopping cart ",()=> {
        cy
        
        //.get("shopping_cart_container")
        .get("a[class='shopping_cart_link")
        .scrollIntoView()
        .click()

    })




    })





/*describe("Product Page item",()=>{

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


    
})*/