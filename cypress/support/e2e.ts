/// <reference types= "cypress" />
import './commands';
import LoginPage from "../pages/loginPage";

const username = Cypress.env("username");
const password = Cypress.env("password");
const loginPage = new LoginPage();
before('Xyicon Login',() =>{
   cy.visit(Cypress.env('qaapp_url'));
   loginPage.login(username, password);
// Cypress.config(); //to config defaultCommandTimeout to 60000 
})
