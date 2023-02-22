class Login{

loginLocator={
    usernameField:() => cy.get('#user-name'),
    passwordField:() => cy.get('#password'),
    submitbtn:() => cy.get('#login-button')

}

loginUser(username: string, password: string){

    this.loginLocator.usernameField().type(username)
    this.loginLocator.passwordField().type(password)
    this.loginLocator.submitbtn().click()
}
}

export let userlogin = new Login();