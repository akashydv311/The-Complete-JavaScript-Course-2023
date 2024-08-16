
// Normal Function

function MyFun2(num1, num2) {
    return num1 + num2;
}

function MyFun1() {
    return "Hello, WOrld!"
}

function MyFun3(nameX, ageX, salaryX) {
    const myobj = {
        name: nameX,
        age: ageX,
        salary: salaryX

    }
    return myobj;
}

// 1
let result = MyFun1();
console.log(result);
//2
result = MyFun2(10, 45);
console.log(result);
//3
result = MyFun3("Arpit", 21, 45000);
console.log(result);
// console.log(typeof result);


// *********************************************

// Arrow function

let result1 = () => "Hello User!";

let ans = result1();

console.log(ans);

let result2 = (nameX, ageX) => {
    return `Name is ${nameX} And age is ${ageX}`
}

ans = result2('Arpit', 21);

console.log(ans);


// ********************************

// Anonymous Function

let x = function sum(a, b) {
    return a + b;
}

let y = function (a, b) {
    return a * b;
}


ans = x(10, 20)
console.log(ans);

ans = y(10, 20)
console.log(ans);





