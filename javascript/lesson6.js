// CONDITIONAL STATEMENT

/*
if(condition){
    //execute some code here
} else {
    //execute some code here
}
*/


// if time is between 6 and 12 print "Good morning"
// if time is between 12 and 18 print "Good afternoon"
// Otherwise "Good evening"

var hour = 17

if(hour >= 6 && hour < 12){
    console.log('Good morning')
} else if (hour >=12 && hour < 18){
    console.log('Good afternoon')
} else {
    console.log('Good evening')
}