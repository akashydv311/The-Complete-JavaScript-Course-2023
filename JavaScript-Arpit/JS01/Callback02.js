
// function sum(x, y) {
//     return x + y;
// }

// let result = sum(12, 20);

// console.log(result);



/*

function RamExpance() {
    let movieExp = 700;
    let foodCost = 760;
    let roomrent = 4500;

    return (movieExp + foodCost + roomrent);
}

function ShayamExpance() {
    let smoke = 345;
    let travel = 7860;
    let food = 786;

    return (smoke + travel + food);
}

function totalExpance() {
    let ramCost = RamExpance();
    let shaymCost = ShayamExpance();

    let totalCost = ramCost + shaymCost;
    return totalCost;
}

const result = totalExpance();
console.log(result);

*/




function RamExpance(movieExp, foodCost, roomrent) {
    return (movieExp + foodCost + roomrent);
}

function ShayamExpance(smoke, travel, food) {
    return (smoke + travel + food);
}

function totalExpance() {
    let ramCost = RamExpance(700, 760, 4500);
    let shaymCost = ShayamExpance(345, 7860, 786);

    let totalCost = ramCost + shaymCost;
    return totalCost;
}

const result = totalExpance();
console.log(result);



function add(num1, num2) {
    return num1 + num2
}

function finalAns(num1, num2) {
    let result = add(num1, num2);
    return result;
}

const ans = finalAns(10, 20);
console.log(ans);




function msg() {

    console.log("I am writing this function! Good Morning....");

}


function greet(callback) {

    callback();

}

greet(msg);




function sum(x, y) {
    return x + y;
}

function calculate(x, y, callback) {
    let result = callback(x, y);
    console.log("sum is: " + result);
}

calculate(10, 20, sum);




function calculate(x, y, callback) {
    let result = callback(x, y);
    console.log("sum is: " + result);
}

calculate(10, 20, function sum(x, y) {
    return x + y;
});

