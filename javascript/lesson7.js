// LOOPS

//FOR loop (for i loop)
/*
for(statement1; statement2; statement3){

}
*/

//FOR loop (for i loop)
for(let i=0; i<5; i++){
    console.log('Hello world! ' + i)
} 

var cars = ["Volvo", "Toyota", "Tesla"]

//FOR of loop (ES5 syntax)
for(let c of cars){
    console.log(c)
    if(c == "Toyota"){
        break
    }
}

// for each loop (ES6 syntax)
cars.forEach( car => {
    console.log(car)
})