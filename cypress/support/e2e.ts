/// <reference types= "cypress" />
import './commands';
import LoginPage from "../pages/loginPage";

const loginPage = new LoginPage();
before('Xyicon Login',() =>{
    cy.visit(Cypress.env('qaapp_url'));
    loginPage.login('aaminaamanulla', '#Aaminaaman24225');
    Cypress.config(); //to config defaultCommandTimeout to 60000 
})