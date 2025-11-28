/// <reference types="cypress" /> 

beforeEach('Open test application', () => {
    cy.visit('/') 
    cy.contains('Forms').click()
    cy.contains('Form Layouts').click()
})

it('Cypress Get method', () => {

    // How to find all input fields on the web page by:
    // Tag name input.
    cy.get('input')

    // ID
    cy.get('#inputEmail1')

    // Class value
    cy.get('.input-full-width')

    // Attributes
    cy.get('[fullwidth]')

    // Attribute with value
    cy.get('[placeholder="Email"]')

    // Entire class value
    cy.get('[class="input-full-width size-medium status-basic shape-rectangle nb-transition"]')

    // Combining several attributes
    cy.get('[placeholder="Email"][fullwidth]') //!!!! Make sure there is no space betweeen the attributes!!!!
    cy.get('input[placeholder="Email"]') // search by the tag input and you will find all input fields that have placeholder email. other input fields will be ignored

    // Find by data-cy attribute
    cy.get('[data-cy="inputEmail1"]')

})

it('Cypress locator methods', () => {
    // Theory
    // get() - to find elements on the page globally
    // find() - to find only child elements
    // contains() - to find web elements by text

    cy.contains('Sign in') // This will find the first match on the page! 
    cy.contains('Sign in', {matchCase: false}) // This method is case sensitive unless you add matchCase
    cy.contains('Emai') // You can provide partial match for the text

    cy.contains('[status="warning"]', 'Sign in') // Here you can also provide 2 elements for more selected search

    // find nb-card that has text 'horizontal form'
    cy.contains('nb-card', 'Horizontal form')


    //Chaining methods

    // We know that this horizontal form has only one button so we can find it using the method find()
    cy.contains('nb-card', 'Horizontal form').find('button') // Searching by tag name
    // For the same resault you can also use the methond contains
    cy.contains('nb-card', 'Horizontal form').contains('Sign in') // Searching by text
    // This does NOT work with get() because it will always find all elements on the page
    cy.contains('nb-card', 'Horizontal form').get('button')
})

it('Child elements', () => {
    // You can chain as many find() methods as you need to get to where you want
    cy.contains('nb-card', 'Using the Grid').find('.row').find('button')
    
    
    // When you want to find a parent element using get() and a child element using find()
    cy.get('nb-card').find('nb-radio-group').contains('Option 1')
    // a shorter and more reliable way of writing this is:
    // this works if the child element is somewhere deep in the DOM in relation to the parent element
    cy.get('nb-card nb-radio-group').contains('Option 1') // Because of the space between card and gropu cypress will understand it as looking for child elements

    
    // Sometimes you need to find a child element that is in direct relation with the parent element 
    cy.get('nb-card > nb-card-body [placeholder="Jane Doe"]')


    // TIP! - When building selectors try to make them as short as possible
})

it('Parent elements', () => {
    // Finding parent elements 
    // Sometimes you cannot get a unique path to one element in a gropu but can to another. In that case you have to first go up to the parent and back down to the element you want

    // In this example we will find the unique email input field, go up the DOM to the form tag and then from there find the button
    cy.get('#inputEmail1').parents('form').find('button')

    // Here we need to go 1 level up
    cy.contains('Using the Grid').parent().find('button')
    // this is the same expression as:  cy.contains('nb-card', 'Using the Grid')

    // you can also chain the parent method .parent().parent().parent()

    // finding all parent elements on the way to your target element
    cy.get('#inputEmail1').parentsUntil('nb-card-body').find('button')
})

it('Cypress command Chains', () => {
    // Fluent interface design. You chain the next command after the previous one through the . nottation
    // cy.get will execuute and it will return the result to the next command in the chain

    cy.get('#inputEmail1')
        .parents('form')
        .find('button')
        .click()
        .parents('form')
        .find('nb-radio')
        .first()
        .should('have.text', 'Option 1')

    // it is generally not recommende to continue the chain after the action command. 
    // sometimes click() may change the DOM like changing the page
    // this will throw an error like 'Element has detached from the DOM'

    // rule of thumb. make chains as long as you want but once you make an action command start a new chain

    cy.get('#inputEmail1')
        .parents('form')
        .find('button')
        .click()

    cy.get('#inputEmail1')
        .parents('form')
        .find('nb-radio')
        .first()
        .should('have.text', 'Option 1')
        
})

it('Reusing locators', () => {

    // THIS SEEMS LIKE IT WORKS BUT IT DOES NOT!!! DO NOT DO IT LIKE THIS!!!!
    /*
    const inputEmail1 = cy.get('#inputEmail1')
    inputEmail1.parents('form').find('button')
    inputEmail1.parents('form').find('nb-radio')
    */

    // 1. Cypress Alias
    cy.get('#inputEmail1').as('inputEmail1') // this makes your variable global for your test run. If you create an alias 'creation' in some file, then you call it globaly in any other file
    cy.get('@inputEmail1').parents('form').find('button')
    cy.get('@inputEmail1').parents('form').find('nb-radio')


    // 2. Using Cypress then() method (trickier)
    cy.get('#inputEmail1').then( inputEmail1 => {
        inputEmail1.parents('form').find('button')
        // this line of code will not run because this .parents() is a jQuery<HTMLElement>> type element. In the above example it is a Cypress.Chainable<JQuery<HTMLElement>>
        // JQuery is the selector engine that cypress is using under the hood to select elements on the webpage
        // when you call method then() the argument inside become a pure JQuery object. and the parents elements also exists in that library
        
        // So for this to work you have to convert the inputEmail1 JQuare object back into a cypress chainableobject with cy.wrap()
        cy.wrap(inputEmail1).parents('form').find('button')
        cy.wrap(inputEmail1).parents('form').find('nb-radio')

        //cy.wrap can be used for any types of data (json...) Any object or subject that you want to call a cypress command on
        cy.wrap('Hello').should('equal', 'Hello')

        // TO MAKE RETURNING VALUES FROM THEN SIMPLE USE ALIAS!!
        cy.wrap(inputEmail1).as('inputEmail2')
    })

    cy.get('@inputEmail2')

})

it('Extracting Values', () => {

    // 1. using a JQuery method
    cy.get('[for="exampleInputEmail1"]').then( label => {
        const emailLabel = label.text()
        console.log(emailLabel)
    })

    
    // 2. Using invoke command
    cy.get('[for="exampleInputEmail1"]').invoke('text').then(emailLabel => { // Method invoke returns the actual value
        console.log(emailLabel)
    }) 
    cy.get('[for="exampleInputEmail1"]').invoke('text').as('emailLable')

    
    // 3. Invoke attribute value
    cy.get('#exampleInputEmail1').invoke('attr', 'class').then(classValue => {
        console.log(classValue)
    })
    // You can do this with any attribute
    cy.get('#exampleInputEmail1').invoke('attr', 'placeholder').then(classValue => {
        console.log(classValue)
    })
    


    // 4. Invoke input field value
    cy.get('#exampleInputEmail1').type('Hello@test.com') // Write into the input field
    cy.get('#exampleInputEmail1').invoke('prop', 'value').then ( value => {
        // How to know this is a propertie named value: go to the inspector, under elements go to the right window and find properties
        // You can invoke any other propertie as well but highly unlikely that you will need it.
        console.log(value)
    })
    
    // TIP: If all you need is to make an assertion you don't need to invoke the text before making the insertion. Cypress assertions have everything built in to make a validation.
    // You use this when you need to get the value, process it somehoce maybe concaconate with other value or add to some other project or object, and then do something inside of your script.
    // Using assertion immediatly looks like this:
    cy.get('[for="exampleInputEmail1"]').should('contain', 'Email address')
    // the same for other properties like class value
    cy.get('#exampleInputEmail1').should('have.attr', 'class', 'input-full-width size-medium status-basic shape-rectangle nb-transition cdk-focused cdk-mouse-focused')
    // Class value changed after cypress typed Hello@test.com
    
})

it('Assertions', () => {
    // PARTIAL ASSERTION
    cy.get('[for="exampleInputEmail1"]').should('contain', 'Email address')

    cy.get('[for="exampleInputEmail1"]').then( label => {
        expect(label).to.contain('Email address')
    })
    // The above 2 examples do the same it is just different syntax

    // EXACT MATCH
    cy.get('[for="exampleInputEmail1"]').should('have.text', 'Email address')

    cy.get('[for="exampleInputEmail1"]').then( label => {
        expect(label).to.have.text('Email address')
    })

    cy.get('[for="exampleInputEmail1"]').invoke('text').then(emailLabel => { // Method invoke returns the actual value
        expect(emailLabel).to.equal('Email address')
        cy.wrap(emailLabel).should('equal', 'Email address')
    }) 

    // LIST OF ALL AVAILABLE ASSERTIONS!
    // https://docs.cypress.io/app/references/assertions


    // Cypress will try to get the value before the timeout runs out (default 4 sec)

    // Cypress guide will tell you some tricks and best practices for how and when to use assertions
    // https://docs.cypress.io/app/core-concepts/introduction-to-cypress#Assertions

})

it.only('Timeouts', () => {
    cy.contains('Modal & Overlays').click()
    cy.contains('Dialog').click()

    cy.contains('Open with delay 3 seconds').click()
    cy.get('nb-dialog-container nb-card-header').should('have.text', 'Friendly reminder')
    cy.contains('OK').click()

    // Because Cypress has the default timeout of 4 seconds the next assertion does not work
    /*
    cy.contains('Open with delay 10 seconds').click()
    cy.get('nb-dialog-container nb-card-header').should('have.text', 'Friendly reminder')
    */
    // List of timeouts: https://docs.cypress.io/app/references/configuration#Timeouts
    
    // OPTION 1: you can configure the timout in the cypress.config.js: defaultCommandTimeout: 11000

    // OPTION 2: 
    cy.contains('Open with delay 10 seconds').click()
    cy.get('nb-dialog-container nb-card-header', {timeout: 11000}).should('have.text', 'Friendly reminder')

    // Be careful not to add a timeout to the assertion! It needs to be added to the action method.
})