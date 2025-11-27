// IMPORTANT ADD THIS REFERENCE - this enables intellisense (shows the dropdown for available cypress methods)
/// <reference types="cypress" /> 

// Every test starts with the method 'it' with two arguments
//it('name', 'javascript callback function'() => {})

it('Test 1', () => {

})

it('Test 2', () => {

})

// You can organize your tests in test suits using 'describe' method

describe('Test suit 1', () => {

    // Hooks - are used for repeating certain operations before or after THE test OR before or after EACH test

    beforeEach('Open test application', () => {
        cy.visit('/') //If you have definde a base URL in the config file you only need to write /
    })

    it('Test 3', () => {

    })

    it('Test 4', () => {

    })

    describe('Nested test suit 1', () => {

        afterEach('Delete data after each test', () => {
            //after each test, data can be deleted within this function
        })

        it('Test 5', () => {

        })

        it('Test 6', () => {

        })

    })

})


describe('Test suit 2', () => {

    before('Run once before a test (NOT RECOMMENDED)', () => {
        // It creates a dependency that this step will be executed before the first step, but the second test may not know the context.
    })

    it('Test 7', () => {

    })

    it('Test 8', () => {

    })

})
