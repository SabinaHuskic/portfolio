// OBJECTS

// This is how you define an object
// It is defined in curly braces and it is in the format of 'key' and 'value' pairs separated by a ':'
var customer = {
    firstName: 'John',
    lastName: 'Smith',
    car: ["Volvo", "Toyota", "Tesla"]
}

// There are different ways to access and change the objects properties
console.log(customer)
console.log(customer.firstName)
console.log(customer['lastName'])

customer.firstName = "Mike"
customer['lastName'] = "Silver"
console.log(`${customer.firstName} ${customer.lastName}`)


// ARRAYS
// Defined by square braces and only keeps values and are kept in a specific order
var cars = ["Volvo", "Toyota", "Tesla"]
console.log(cars[0])
console.log(cars[1])

// changing an item in the array
cars[1] = "BMW"

console.log(cars[1])

// You can also add arrays into Objects

console.log(customer.car[0])
