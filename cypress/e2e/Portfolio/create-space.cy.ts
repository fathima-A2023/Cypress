/// <reference types= "cypress" />
import NavigationPanel from "../../pages/navPage";
import Portfolios from "../../pages/portfolioPage";
import Spaces from "../../pages/spacesPage";

const portfolioNavBtn = new NavigationPanel();
const createPortfolio = new Portfolios();
const portfolioName = 'Test_user' + Date.now();
const createSpace = new Spaces();
const spaceVName = 'Version' + Date.now();
before('Create Portfolios', () => {     
    portfolioNavBtn.navigateToPortfolios(); //click on the portfolios button in the nav panel
    createPortfolio.closeDetailsPanel();
    createPortfolio.createPortfolio(portfolioName);
})

describe ('Create Spaces', () => {
    before('Search Portfolio and click on create space button', () => {
    createPortfolio.findPortfolio(portfolioName);
    createPortfolio.createSpace();
    Cypress.config(); //to config defaultCommandTimeout to 60000 
    }),

    it('Create a Space', () => {
        createSpace.createVersionSet(spaceVName);
        createSpace.uploadFile();
        createSpace.setScale();
        createSpace.confirmSpaceCreation();
    })
})