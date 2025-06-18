class NavigationPanel {

    private getPortfoliosBtn (){
        return cy.get('.Portfolios');
    }

    navigateToPortfolios(){
        this.getPortfoliosBtn().click();
    }
}
export default NavigationPanel