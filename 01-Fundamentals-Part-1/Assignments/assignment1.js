
// LECTURE: Values and Variables

const country = "India";
let population;
const continents = "Asia";

// country = "IND";
// continents = "Asia";
// population =  1,425,775,850;
population = 1428.60;

console.log(`Country ${country} || Continents ${continents} || Populaction ${population}`);

console.log("____________________________________________________________________\n");

// LECTURE: Data Types

let isIsland = false;
let language;

console.log(typeof country);
console.log(typeof continents);
console.log(typeof population);
console.log( typeof isIsland);
console.log(typeof language);

console.log("____________________________________________________________________\n");

// LECTURE: let, const and var

language = "Hindi";
console.log(language);

console.log("____________________________________________________________________\n");

// LECTURE: Basic Operators

let halfPopulation = population / 2;
console.log("Half population of the country : ", halfPopulation+1,"m");

console.log(population > 6);
console.log(population < 33);

let description = country+
' is in ' + continents +
' ans its ' + population +
' million people speak '+ language;

console.log(description);

console.log("____________________________________________________________________\n");

// LECTURE: Strings and Template Literals

let description1 = `${country} is in ${continents} and its ${population} million people speak ${language}`;


console.log(description1);

console.log("____________________________________________________________________\n");


// LECTURE: Taking Decisions: if / else Statements

if(country > 33){
    console.log(`${country} population is above avrage`);
}else{
    console.log(`${country} population is ${population} below avrage`);
}
temporarily = population;
population = 13;
console.log(population);
population = 130;
console.log(population);
population = temporarily;
console.log(population);

console.log("____________________________________________________________________\n");

// LECTURE: Type Conversion and Coercion

// '9' - '5';
// '19' - '13' + '17';
// '19' - '13' + 17;
// '123' < 57;
// 5 + 6 + '4' + 9 - 4 - 2;

console.log('9' - '5');
console.log('19' - '13' + '17');
console.log(19 - 13 + 17);
console.log('19' - '13' + 17);
console.log('123' < 57);
console.log(5 + 6 + '4' + 9 - 4 - 2);
console.log("\n");
// console.log(4+" "+ (1317-19)+ " "+ 11 + " "+ false + " "+ 18);
console.log(19 - 13 + 17);
console.log(2 * 2 + '4'+8-2+1*2);

console.log(4 + 4 * 8 / 3);

console.log("____________________________________________________________________\n");



// LECTURE: Equality Operators: == vs. ===

let numNeighbours;

// numNeighbours = (prompt(`How many neighbour countries does your country
// have?`));

// if(numNeighbours == 1){
//     console.log('Only 1 border!');
// }else if (numNeighbours > 1) {
//     console.log('More than 1 border');
// } else {
//     console.log('No borders');
// }

numNeighbours = Number(prompt(`How many neighbour countries does your country
have?`));

if(numNeighbours === 1){
    console.log('Only 1 border!');
}else if (numNeighbours > 1) {
    console.log('More than 1 border');
} else {
    console.log('No borders');
}


console.log("____________________________________________________________________\n");


// LECTURE: Logical Operators

const country1 = "India";
// let population1 = 1428.60;
let population1 = 28.60;

let isIsland1 = false;
// let language1 = "Hindi";
let language1 = 'English';


if( language1 == 'English' && population1 < 50 && isIsland1 == false){
    console.log('You should live in',country1);
}else{
    console.log(country1+ ' does not meet your criteria ');
}


console.log("____________________________________________________________________\n");


// LECTURE: The switch Statement

language = 'english';

switch (language) {
    case 'chinese' || 'mandarin':
        console.log('MOST number of native speakers!');
        break;
    case 'spanish':
        console.log('2nd place in number of native speakers');
        break;
    case 'english':
        console.log('3rd place');
        break;
    case 'hindi':
        console.log('Number 4');
        break;
    case 'arabic':
        console.log('5th most spoken language');
        break;
    default:
        console.log('Great language too');
        break;
}

console.log("____________________________________________________________________\n");



// LECTURE: The Conditional (Ternary) Operator

let population2 = 1428.60;

// population2 = 13;
// population2 = 130;

population2 > 33 ? console.log(`indis's population is above average`) : console.log(`indis's population is below average`);


console.log("____________________________________________________________________\n");
