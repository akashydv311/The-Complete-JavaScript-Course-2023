
/*
function getData(x, y, callback) {
    console.log(" The multiplication of the numbers " + x + " and " + y + " is: " + (x * y));
    callback();
}

function showData() {
    console.log(' This is the showData() method execute after the completion of getData() method.');
}

getData(20, 30, showData); 

*/


function tom() {
    console.log("Hey Tom");
}

function bob() {
    console.log("Hey Bob");
}

function jimmy() {
    console.log("hey jimmy");
}

function rob() {
    console.log("hey Rob");
}

function allMemberGreet(callback1, callback2, callback3, callback4) {
    callback3();
    callback4();
    callback1();
    callback2();
}

// function call

allMemberGreet(tom, bob, jimmy, rob);

