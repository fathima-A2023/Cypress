/// <reference types = "cypress"/> 
//This will allow autocompletion or type-checking of the scripts adhering to the cypress libraries or cypress modules by importing type definitions from cypress

describe ('Xyicon Login', () =>{
    beforeEach(() =>{
       cy.visit('https://qaapp.xyicon.com/#auth/login')
     })

    it('Login with a valid username and password', () => {
        cy.get('#userName').type('aaminaamanulla')
        cy.get('#pwInput').type('')
    })
})