class Portfolios {

    //.Portfolio anchored .IconButton
    private getCloseBtn () {
        // return cy.get(':nth-child(2) > .sc-beySPh > .sc-qZrbh');
        return cy.get('[data-title="Close"]').first();
    }

    private getPortfolioCreateBtn (){
        return cy.get('[data-cy="Button.CREATE"]');
    }

    private getPortfolioName () {
        return cy.get('.portfolionameInput');
    }

    private getPortfolioTypeDropdown () {
        return cy.get('.element > .SelectInputStyled');
    }

    private selectPortfolioType () {
        return cy.get('.Options').first();
    }

    private getCreateBtn () {
        return cy.get('[data-cy="Button.Create"]')
    }

    closeDetailsPanel (){
        this.getCloseBtn().click({force: true});
    }

    createPortfolio(name: string){
        this.getPortfolioCreateBtn().click();
        this.getPortfolioName().type(name);
        this.getPortfolioTypeDropdown().click();
        this.selectPortfolioType().click();
        this.getCreateBtn().click();
    }
}

export default Portfolios;