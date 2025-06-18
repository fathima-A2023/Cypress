class LoginPage {

    //using getters instead of elements - best practice, good for larger projects and to retrieve the current state of the element from the DOM  
    private getUserName (){
        return cy.get('#userName');
    }

    private getPassword (){
        return cy.get('#pwInput');
    }

    private getLoginBtn () {
        return cy.get('#appHolder').find('.Button.primary.loginButton');
    }

    // private getForgotPassword () {
    //     return cy.get('.forgotPassword');
    // }

    // private getSSOLogin () {
    //     return cy.get('.sso-login-text');
    // }

    //private getErrorMessage() {}

    //method for Login
    login(username: string, password: string){
        this.getUserName().type(username);
        this.getPassword().type(password);
        this.getLoginBtn().click();
    }
}

export default LoginPage;