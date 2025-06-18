/// <reference types= "cypress" />
import LoginPage from "../../pages/loginPage"
import NavigationPanel from "../../pages/navPage"
import Portfolios from "../../pages/portfolioPage";

// describe('Create a Portfolio', () =>{
//     before(() =>{
//         cy.visit('https://qaapp.xyicon.com/#auth/login')
//     })

//     it('Create portfolio with a unique name', () =>{
//          cy.get('#userName').type('aaminaamanulla')
//         cy.get('#pwInput').type('#Aaminaaman24225')
//         cy.get('#appHolder').find('.Button.primary.loginButton').click()
//         cy.get('[data-cy="Button.Create"]').click()
//         cy.get('.hbox field-input-container').type('cypress test')
//     })
// })

describe ('Create Portfolio', () => {

    const loginPage = new LoginPage();
    before('Xyicon Login',() =>{
        cy.visit(Cypress.env('qaapp_url'));
        loginPage.login('aaminaamanulla', '#Aaminaaman24225');
        Cypress.config();
    })

    const portfolioNavBtn = new NavigationPanel();
    const createPortfolio = new Portfolios();
    it('click on the portfolios button in the nav panel', () => {     
        portfolioNavBtn.navigateToPortfolios();
        createPortfolio.closeDetailsPanel();
        createPortfolio.createPortfolio('automation');
    })

    // it('Close the details panel', () =>{
        
    // })

})

        
        
        
        
        

