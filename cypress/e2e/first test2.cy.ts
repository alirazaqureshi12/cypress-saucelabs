let username = "standard_user"
let password = "secret_sauce"

describe("🚀 Visit Page and Login",() =>{
    
    
    it("visit page",()=>{
        cy.visit("https://www.saucedemo.com/")
    })

    it("Login",() => {
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
        
    })

    it("Go To Item", () => {
        cy
        .contains("Sauce Labs Bike Light")
        .click()
    })

    
})