
// javascript is a asynchronous langude - ( line line code )

/*
console.log("Hello!");

console.log("Today we are");

setTimeout(() => {
    console.log("Please pause the code!");
}, 3000)

console.log("Learning JavaScript");

console.log("asynchronous Nature!");

*/


setTimeout(() => {
    console.log("1");
}, 5000)

setTimeout(() => {
    console.log("2");

}, 2500)

setTimeout(() => {
    setTimeout(() => {
        setTimeout(() => {
            console.log("Heyyyy");
        }, 7000)
        console.log("Hiiiii");
    }, 2000)
    console.log("Hello");
}, 5000)



