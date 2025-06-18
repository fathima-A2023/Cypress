class Portfolios {

    //.Portfolio anchored .IconButton
    private getCloseBtn () {
        // return cy.get(':nth-child(2) > .sc-beySPh > .sc-qZrbh');
        return cy.get('[data-title="Close"]').first();
    }

    private getCreateBtn (){
        return cy.get('[data-cy="Button.CREATE"]');
    }

    private getPortfolioName () {
        return cy.get('.portfolionameInput');
    }

    private getPortfolioType () {
        return cy.get('.SelectInputDropdownClass');
    }

    // private getPortfolioType () {
    //     return cy.get()
    // }

    closeDetailsPanel (){
        this.getCloseBtn().click({force: true});
    }

    createPortfolio(name: string){
        this.getCreateBtn().click();
        this.getPortfolioName().type(name);
        this.getPortfolioType().select(0);
    }
}

export default Portfolios;