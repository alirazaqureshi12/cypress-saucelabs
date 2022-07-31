// /// <reference types="cypress" />
// // ***********************************************
// // This example commands.ts shows you how to
// // create various custom commands and overwrite
// // existing commands.
// //
// // For more comprehensive examples of custom
// // commands please read more here:
// // https://on.cypress.io/custom-commands
// // ***********************************************
// //
// //
// // -- This is a parent command --

import {
    contains
  } from "cypress/types/jquery"
  import "cypress-localstorage-commands"
  



// let email = "standard_user"
// let password = "secret_sauce"




// Cypress.Commands.add('validLogin', (email:string="standard_user", password="secret_sauce") => { 
    
//     cy
//         .get("input[id='user-name']")
//         .type(email)
//         .get("input[id='password']")
//         .type(password)
//         .get("input[id='login-button']")
//         .click()


//  })
// //
// //
// // -- This is a child command --
// // Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
// //
// //
// // -- This is a dual command --
// // Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
// //
// //
// // -- This will overwrite an existing command --
// // Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
// //
declare global {
  namespace Cypress {
    interface Chainable {
      login(username: string, password: string): Chainable<void>
      drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
      dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
      //visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
    }
  }
}

let email = "standard_user"
let password = "secret_sauce"




 Cypress.Commands.add('validLogin', (email="standard_user", password="secret_sauce") => { 
    
    cy
     .get("input[id='user-name']")
     .type(email)
      .get("input[id='password']")
      .type(password)
        .get("input[id='login-button']")
       .click()
 })

// Cypress.Commands.add('validLogin', () => {
    
// })