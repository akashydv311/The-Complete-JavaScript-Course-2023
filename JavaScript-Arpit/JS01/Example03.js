
// Opraters

/*
1. Arth -> +,-,*,/,%,+=, -=, *=, /=
2. Log  -> &,|,!
3. Assignment -> =
4. Res -> >,<,>=,<=,==
*/

// Presedance , Assocoativity
// Type casting - X

// Control Statement 

// 1. if 
// 2. if - else 
// 3. if - else if - else 

var x = prompt("Enter a Value: ");

// if (x > 0) {
//     console.log("Positive")
// } else if (x == 0) {
//     console.log("Equal to 0")
// } else {
//     console.log("Negative")
// }

// User input
// var x = prompt("Enter a Value: ");
console.log(x);

switch (x) {
    case (x > 0):
        console.log("Positive");
        break;
    case (x < 0):
        console.log("Negative");
        break;
    default:
        console.log("Equal to 0");
        break;
}