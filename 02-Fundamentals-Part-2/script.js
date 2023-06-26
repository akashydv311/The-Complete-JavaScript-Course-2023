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
