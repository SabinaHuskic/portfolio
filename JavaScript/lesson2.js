// CONCATINATION AND INTERPOLATION

var price = 50
var itemName = "Cup"
var messageToPrint = "The price for your Cup is 50 eur"
console.log(messageToPrint)

// concatination
// Typical for all programing languages
price = 80
itemName = "Table"
messageToPrint = "The price for your " + itemName + " is " + price + " eur" 
console.log(messageToPrint)

// Interpolation
// Typical for JavaScript - You create a single string but replace a needed section of your string with the variables
price = 100
itemName = "Mirror"
messageToPrint = `The price for your ${itemName} is ${price} eur` // ` - alt gr 7
console.log(messageToPrint)

// The difference is the preference in the syntax