# Learning Cypress

I took a Udemy course to learn about **Cypress**.
You can find all the scripts in cypress/e2e/ folder!

**Udemy Course:** [Cypress: Web Automation Testing from Zero to Hero](https://www.udemy.com/course/cypress-web-automation-testing-from-zero-to-hero/)

Tip: alt + shift + F - quickly format the file


## Cypress Framework

### Setup

1. Create a folder for your project.
2. In the terminal initialize a new node js project withthe command 'npm init'
3. Now install cypress 'npm install cypress --save-dev' (it will generate the 'node_modules' folder where your project will keep al packages and libraries. 'package-lock.json' makes sure that all components that were downloaded are in sync and compatible)
4. To open cypress use the command 'npx cypress open'
5. select e2e testing and cypress will create and add configuration files for us
6. Select your browser and start e2e

cypress.config.js - Located in the root of the project. This is the main configuration file for cypress.

Support folder has:
- e2e.js - is the file that initialized as the very first thing when you run the test. Here you can set up some global configurations for your tests.
- commands.js - used for custom commands which can create once and use across the entire framework

Fixtures - this is where you will keep your test data or any other data needed for test execution (json, CSV, PNG, JPG...)

e2e - this is the folder where you actually keep your tests

### cypress.config.js
Go to cypress documentation and on the left side click on [configuration page](docs.cypress.io/app/references/configuration#Global)

there are 2 categories framework wise options and test specific options.
Change any default configurations based on what you need. 
A good start are 'viewportWidth: 1280', 'viewportHeight: 720' and 'baseUrl'

### Cypress runner
You can expend the test by clicking on it in the runner. It will show you all the steps and hovering over a step will highlight it on the right side.
You can also continue manually using the browser window on the right for further exploring.
You have a locator picker that will highlight and generate the name of a clicked item.
You can right click on the browser and inspect for elements and network.

it.only - execute only this test
it.skip - skip this test
context.only - execute only the tests in this context

### Test Exectuion with CLI
npx cypress run - cypress will use the default browser and execute without the visual browser. 
npx cypress run --spec "cypress/e2e/1-getting-started/todo.cy.js" - run only one specific spec file
    --headed - will also open the browser for you to see what is happening
    --browser chrome - specify which browser you want to use
For more commands go to the [command line documentation under 'Options'](docs.cypress.io/app/references/command-line)

### Test structure
01-testStructure.cy.js

## Interactions with Web Elements
How well youlocate web elements will determine if your tests will be stable and reliable.

To find a locator, right click on a button and select 'Inspect'. This will open the  Dom. It will highlight the HTML source code for the selected button.
HTML DOM consists of: HTML tags, HTML Attributes and attribute values
Class and ID are also HTML attribute names
Class attribute can hve several values and each value is separated by space
HTML tags usually come in pairs of opening and closing tag. Closing tag has the same name and forward slash
Value in between angle brackets >here< is a plain text
Elements above the 'key' web element are Parent elements.
Elements inside the 'key' web element are Child elements.
Elements placed at the same level side by side are Sibling elements.

locators work so that you find some unique attributes and combining several of them you bild the locator.
Another way to use them is for finding a group of elements.

