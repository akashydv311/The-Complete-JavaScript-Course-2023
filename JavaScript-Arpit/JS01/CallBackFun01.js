
// A callback function is a function passed into
// another function as an argument,

// console.log(console.log("Hello"));



var numbers = [23, 34, 45, 66];

function mainFunction(callback) {
    console.log("Performing operation...");
    // Use Array.forEach to loop through the array of numbers
    numbers.forEach(callback);
}

function callbackFunction(number) {
    console.log("Result: " + number);
}

mainFunction(callbackFunction);

// var numbers = [1, 2, 3, 4, 5];

// function main(x) {
//     console.log("i'm in main function");
//     numbers.forEach(x)
// }

// function fun() {
//     console.log("hello");
// }

// main(fun)



