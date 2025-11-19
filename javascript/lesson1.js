// 1. Hello World
console.log("Hello World")
// print Hello world to the console

// To run this file go to your console. Go to JavaScript directory and run the command 'node lession1.js'

//-------------------------------------------------------------------------------------------------------------------------------------------

// VARIABLES

var firstName = "John"
let lastName = "Smith"

/*
There is slight definition between the functional differences between var and let, but for the scope of this corse it doesn't matter.
I decided to still check it out:
var - Function-scoped: same name inside a function is separate, but inside if/loops it's still global
let - Block-scoped: same name inside functions ifs or loops are all separate.
*/

console.log(firstName)
console.log(lastName)
// Print the value stored inside the variable to the console


// You can create variables first and assign them later
var age, dateOfBirth, sex
age = "29"
sex = "Female"
dateOfBirth = "3.9.1996"

console.log(age)

age = "18"

console.log(age)


// constants - When a value is assigned to constant it cannot be changed during runtime
const occupation = "Engineer"
// occupation = "driver"
console.log(occupation)

//-------------------------------------------------------------------------------------------------------------------------------------------

// DATA TYPES

var middleName = "Sabina"       // String is in double quotes "" or single quotes ''
var yearOfBirth = 1996          // number
var isSheMarried = false        // boolean - true or false
var yearsInMarriage = null      // no value - expectation that we should not have any value for this variable
var numberOfCars = undefined    // We can not use something that does not exisit