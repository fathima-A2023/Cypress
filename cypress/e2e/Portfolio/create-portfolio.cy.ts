/// <reference types= "cypress" />
import NavigationPanel from "../../pages/navPage";
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
    const portfolioNavBtn = new NavigationPanel();
    const createPortfolio = new Portfolios();
    const name = 'Test_user' + Date.now();
    it('Create Portfolios', () => {     
        portfolioNavBtn.navigateToPortfolios(); //click on the portfolios button in the nav panel
        createPortfolio.closeDetailsPanel();
        createPortfolio.createPortfolio(name);
    })
})

        
        
        
        
        

