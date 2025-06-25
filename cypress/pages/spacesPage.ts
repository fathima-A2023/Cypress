class Spaces {

    private getVersionName(){
        return cy.get('.element > .sc-PlNur > .sc-dGANrm > .sc-hABBmJ > .sc-fmKFGs');
    }

    private getNextBtn(){
        return cy.get('[data-cy="Button.Next"]');
    }

    private getSpaceTypeDropdown(){
        return cy.get('.element > .SelectInputStyled');
    }

    private getSpaceType(){
        return cy.get ('.SelectInputDropdownClass').first();
    }

    private getUploadFile(){
        return cy.get('.sc-lkDHyp > label');
    }

    private getSetScale(){
        return cy.get('[data-title="Set Scale"]');
    }

    private getCanvas(){
        return cy.get('#canvas-div');
    }

    private getDistanceInputField(){
        return cy.get('.hbox > input');
    }

    private getDistanceConfirmBtn(){
        return cy.get('[data-cy="OkButton"]');
    }
   
    private getApplyAllSpacesCheckBox(){
        return cy.get('[for="applyAllSpacesCheckBox"]');
    }

    private getCreateBtn(){
        return cy.get('.sc-fkeNrx > [data-cy="Button.Create"]');
    }

    createVersionSet(name: string){
        this.getVersionName().type(name);
        this.getNextBtn().click();      
    }

    uploadFile(){
        this.getSpaceTypeDropdown().click();
        this.getSpaceType().click();
        this.getUploadFile().selectFile("C:/Users/FathimaAamina/Desktop/Floor plans/Administration - Floor 2.pdf");
        this.getNextBtn().click();
        this.getNextBtn().click();
    }

    setScale(){
        this.getSetScale().click();
        this.getCanvas().wait(3000).dblclick('center', {force:true}).trigger('mousemove', {force: true, x:200, y:200}).trigger("mousedown").trigger('mousemove', {x:250, y:200, force: true}).wait(300).trigger('mouseup', {force:true});
        this.getDistanceInputField().type('32');
        this.getApplyAllSpacesCheckBox().click();
        this.getDistanceConfirmBtn().click();
        this.getNextBtn().click();
    }

    confirmSpaceCreation(){
        this.getCreateBtn().click();
    }
}

export default Spaces;