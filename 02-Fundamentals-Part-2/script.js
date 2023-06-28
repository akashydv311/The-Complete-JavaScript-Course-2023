"use strict";

/*

let hasDriverLicense = false;
const passtest = true;

if (passtest) hasDriverLicense = true;
if (hasDriverLicense) console.log("I can drive car");

// const interface = "Audio";
// let private = 43;

*/

// ***********************************************

// FUNCTION

function logger() {
  console.log("I am in function body");
  console.log("I am in function body");

  console.log("I am in function body");

  console.log("I am in function body");
}

// logger();

function fruitProcessor(apples, oranges) {
  //   console.log(apples, oranges);
  const juice = `juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}

const storeJuice = fruitProcessor(5, 2);
// console.log(storeJuice);

// conversion

let rawNum = "78";
// console.log(typeof rawNum);
const num = Number(rawNum);
// console.log(typeof num);

// *************************************************

function calAge1(birthYear) {
  // const age = 2023 - birthYear;
  // return age;
  return 2023 - birthYear;
}

const age1 = calAge1(2001);
// console.log(age);

// Function Expression

const age2 = function (birthYear) {
  return 2023 - birthYear;
};
// console.log(age2(2001));
const age3 = age2(2000);
// console.log(age3);

// console.log(typeof age2());

demo1();

function demo1() {}

// demo2();

const demo2 = function () {};

// Arrow functions

const mostImp = () => {
  console.log("Most importent fun type");
};

const age4 = (birthYear) => 2023 - birthYear;

// console.log(age4(2001));

const yearUntilRetairment = (birthYear) => {
  const age = 2023 - birthYear;
  const remainYearInRetairment = 65 - age;
  return remainYearInRetairment;
};

const remainYearRetair = yearUntilRetairment(2001);
// console.log(remainYearRetair);

const currentAge = (birthYear) => 2023 - birthYear;

const yearUntilRetairment1 = (birthYear, firstName) => {
  const age = currentAge(birthYear);
  //   console.log(age);
  const remainYearInRetairment = 65 - age;

  if (age < 1) {
    return "Retaired";
  }
  return `${remainYearInRetairment} years retairment of ${firstName}`;
};

const remainY = yearUntilRetairment1(2022, "Akash Yadav");
// console.log(remainY);

// ********************************************

// function calling another function

const cutFruit = (fruites) => 4 * fruites;

function fruitProcessor1(apples, orange) {
  const applePices = cutFruit(apples);
  const orangePices = cutFruit(orange);

  const juice = `juice with ${applePices} apples and ${orangePices} oranges`;

  return juice;
}

let juice = fruitProcessor1(4, 2);
// console.log(juice);

// Arrow Funcion

const cutFruites2 = (NumberOfFruites) => 4 * NumberOfFruites;

const makeJuice = (noOfApples, noOfMango) => {
  const picesOfApples = cutFruites2(noOfApples);
  const picesOfMango = cutFruites2(noOfMango);
  const juice = `we can make juice using ${picesOfApples} pices of apple and ${picesOfMango} pices of mangos`;
  return juice;
};

// console.log(makeJuice(2, 3));

// ******************************************
/*
/
/
/
/
/
/
/
/
/
/
/
/
/
/
/
/
/
/
/
/
/
/
/
/
/
/
/
/
*/

// Arrays

const friends = ["Hiamnshu", "Arvind", "OmKar", "Shashank"];

// console.log(friends);
// console.log(friends.concat("Akash"));
// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// Legal

friends[3] = "YadavJi";
// console.log(friends);

const notFriend = ["xyz", "pqr"];

// friends = notFriend; // Unlegal

let fruits = ["Apples", "Mangoes"];
let vegitable = ["Onin", "potato"];

fruits = vegitable; // Legal

// console.log(fruits, vegitable);

fruits = [friends, fruits];

// console.log(fruits);
// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[0][1]);

// Excirsizee

const yearArr = [2345, 1900, 2000, 2023];

const calAge = (year) => {
  return 2023 - year;
};

const howOldAreYou = [
  calAge(yearArr[0]),
  calAge(yearArr[1]),
  calAge(yearArr[2]),
];

// console.log(howOldAreYou);

function demoTest() {
  const age = 19;
}

function demoTest1() {
  const age = 19;
}

function demoTest2() {
  const age = 19;
}

function demoTest3() {
  const age = 19;
  console.log(age);
}

const funArr = [demoTest(), typeof demoTest1, demoTest2, demoTest3];

// console.log(funArr);
// console.log(funArr[funArr.length - 1](), funArr[2]());

// console.log(friends);

friends.push("rahul", "Lovekush");
// console.log(friends);

// friends.pop();
// console.log(friends);

friends.unshift("Yadavji");
// console.log(friends);

// ***********************************

// Arrays methods

// console.log(friends);
const poppedElement = friends.pop();
// console.log(poppedElement, friends);

const newLength = friends.unshift("Ashutosh");
// console.log(newLength, friends);

const newLength1 = friends.push("Lovekush");
// console.log(newLength1, friends);

const newmovedFirstEement = friends.shift();
// console.log(newmovedFirstEement);
// console.log(friends);

friends.shift();
friends.shift();
friends.shift();

// console.log(friends);

const returnV = friends.indexOf("OmKar");
// console.log(returnV);

const presentOrNot = friends.includes("OmKar");
// console.log(presentOrNot);

const presentOrNot1 = friends.includes("23");
// console.log(presentOrNot1);

if (friends.includes("lovekush")) console.log("I am going to party");

// includes usefull in the if else cause

// ***********************************

/*
/
/
/
/
/
/
/
/
/
/
/
/
/
/
/
/
/
/
/
/
/
/
/
/
/
/
/
/
*/

// OBJECTS

const jonasArr = [
  "jonas",
  "smith",
  2023 - 2001,
  "developer",
  ["himanshu", "arvind", "rahul"],
];

const jonas1 = {
  firstName: "Jonas",
  lastName: "Smith",
  age: 2023 - 2001,
  job: "developer",
  friends: ["himanshu", "arvind", "rahul"],
};

// console.log(jonas);

// console.log(jonas.firstName);
// console.log(jonas["lastName"]);

const nameKey = "NameX";
// console.log(jonas["firstName"] + nameKey);
// console.log(jonas["lastName"] + nameKey);

// console.log(jonas.firstName);

// const myInput = prompt("What do you want to know?");
// console.log(jonas[myInput]);

// console.log(jonas.myInput);

// if (jonas[myInput]) console.log(jonas[myInput]);
// else console.log("wrong value");

// jonas.location = "India";
// jonas["instagram"] = "___akashyadav___";
// jonas["freeTime"] = "ListionSong";
// jonas.friends.push("Michael");

// // console.log(jonas);

// if (jonas.friends.includes("Michael")) {
//   console.log(
//     `${jonas.friends[jonas.friends.indexOf("Michael")]} is best friend`
//   );
// } else {
//   console.log("Not present");
// }

// console.log(friends["length"]);

// console.log(jonas);

// jonas["calAge"] = function (birthYear) {
//   return 2023 - birthYear;
// };

// console.log(jonas.calAge(2001));
// console.log(jonas["calAge"](2002));

// jonas["calAge"] = (birthYear) => {
//   console.log(this);
//   return 2023 - birthYear;
// };

// jonas.calAge(2023);

const jonas = {
  firstName: "Jonas",
  lastName: "Smith",
  age: 2023 - 2001,
  job: "developer",
  friends: ["himanshu", "arvind", "rahul"],

  birthYear: 2001,
  hasDriverLincence: true,

  // calAge: () => 2023 - this.birthYear,
  calAge: () => {
    this.age = this.birthYear - 2023;
  },

  challange: () => {
    if (Boolean(this.hasDriverLincence)) console.log("has licence");
    else console.log("Not a licence");
  },
};

// const ageX = jonas.calAge();
// console.log(ageX);
// console.log(typeof jonas.birthYear);

// console.log(jonas);
// console.log(jonas.age);
// console.log(jonas.calAge());

// console.log(jonas.age);
// console.log(jonas.age);
// console.log(jonas.age);

// console.log(Boolean(this.hasDriverLincence));

// console.log(jonas.challange);

// **************************************

// let i = 0;
let sum = 0;

for (let i = 0; i < 100; i++) {
  sum += i;
}
// console.log(sum);

sum = 0;
let i = 1;
while (i < 1000) {
  sum += i++;
}

// console.log(sum);

// *****************************************

const arrExample1 = ["firstName", "lastName", "age"];
const arrExample2 = ["akash", "yadav", 23];

const objExample = {};

let arr1, arr2;

for (let i = 0; i < arrExample1.length; i++) {
  objExample[String(arrExample1[i])] = arrExample2[i];
  // arr1 = arrExample1[i];
  // arr2 = arrExample2[i];
  // // console.log(arr1, arr2);
  // objExample[String(arr1)] = arr2;
}

// console.log(objExample);

// let and var

function newFun() {
  // console.log(mySpecialVar);

  // var mySpecialVar = 8976;
  // console.log(mySpecialVar);

  // // console.log(anyNum);

  // let anyNum = 345;
  // console.log(anyNum);

  // var firstName = "Akash";
  // let lastName = "Yadav";

  // if (typeof firstName === "String") {
  //   var firstName = firstName + lastName;
  // } else {
  //   let lastName = lastName + firstName;
  // }

  // console.log(firstName);
  // console.log(lastName);

  let x = 10;
  var y = 20;

  var typeVar = typeof x;
  console.log(typeof typeVar);

  if ((typeof x && typeof y) === "number") {
    let x = 50;
    var y = 100;
  }

  console.log(x);
  console.log(y);
}
// newFun();
