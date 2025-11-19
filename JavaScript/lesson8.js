
// 1 Decleratiove function - can be called in the beginning of a file even if the function was declared later
helloOne()
function helloOne(){
    console.log('Hello one!')
}

helloOne()


// 2 Anonymus function - has to be declared before it is called
var helloTwo = function(){
    console.log('Hello two!')
}

helloTwo()


// 3 ES6 function syntax or arrow function
var helloThree = () => {
    console.log('Hello Three!')
}

helloThree()


// 4 Function with arguments
function printName(name, lastName){ // you can use as many parameters as you would like
    console.log(name + ' ' + lastName)
}

printName('Mike', 'Smith')


// 5 Function with return
function multiplyByTwo(number) {
    var result = number*2
    return result
}

var myResult = multiplyByTwo(20)
console.log(myResult)


// 6 import funtion
import { printAge } from '../javascript/helpers/printHelper.js'
// REMEMBER to change "type": "module", in the package.json file
printAge(5)


// 7 import everything
import * as helper from '../javascript/helpers/printHelper.js'
helper.printAge(10)