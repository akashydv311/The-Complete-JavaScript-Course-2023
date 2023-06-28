/*

There are 5 ways to selecting about the html dom through js dom web api



document.getElementById();

document.getElementsByClassName();

document.getElementsByTagName();

document.querySelector();

document.querySelectorAll();


// **********************************************

document.createAttribute();


// for veiwing the contant


const text = p[0].innerText;
const htmlcode = p[0].innerHTML;
const contant = p[0].textContent;


// *****************************************************

p[0].innerHTML = "<h2>Hello</h2>";
p[0].setAttribute("first-p", "left");
p[0].removeAttribute("first-p");

li.getAttribute('id');

li.remove()

// ******************************************************

classList.contains()
classList.add()
classList.remove()


// *********************************************************

// Traversing the DOM

const ul = document.querySelector("ul");

console.log(ul.parentNode.parentNode);
console.log(ul.parentElement);

console.log(ul.childNodes);


const html = document.documentElement;



const ul = document.querySelector("ul");

console.log(ul.childNodes);

console.log(ul.firstChild);
console.log(ul.lastChild);



const tr = document.querySelector("tr");

console.log(tr.childNodes);

tr.childNodes[1].style.color = "blue";
tr.childNodes[1].style.backgroundColor = "red";


console.log(tr.children);



// *******************************************
// .
// .
// .
// ******************************************

// Evernt listner

const button = document.querySelector("#submit-button");

function alertMessage() {
  let num1 = 23,
    num2 = 89;
  console.log(num1 + num2);

  alert("Typescript is next javascript");
}

button.addEventListener("click", alertMessage);



.
.
.
.


const changeBackgroud = document.querySelector("#about");
// console.log(changeBackgroud.innerText);

function changeBackgroudColor() {
  changeBackgroud.style.backgroundColor = "red";
}

changeBackgroud.addEventListener("mouseover", changeBackgroudColor);




*/

// console.log(document.querySelector("html"));

// console.log(document.querySelector("head"));
// console.log(document.querySelector("body"));

// console.log(document.querySelector("head").title);

// console.log(document.querySelector(".content").textContent);

// console.log(document.querySelector(".content").getAttributeNode);

// console.log(document.querySelector("#about").textContent);

// let aboutSection = document.querySelector("#about").textContent;

// document.querySelector("#about").textContent = "I am Software Developer";

// console.log(document.querySelector("#about").textContent);

// console.log(aboutSection);

// const headingElement = document.querySelectorAll("h2");

// **************************************************

// Styling elements by DOM

// const headingElement = document.getElementsByTagName("h2");

// headingElement[0].style.color = "red";
// headingElement[1].style.color = "red";
// headingElement[2].style.color = "red";

// console.log(headingElement);

// const headingElement = document.getElementsByTagName("h2");

// for (let i = 0; i < headingElement.length; i++) {
//   headingElement[i].style.fontSize = "3rem";
// }

// ****************************************

// Creating a html by DOM

// const anchorElement = document.querySelector(".social");
// const newAnchore = document.createAttribute("a");

// anchorElement.append(newAnchore);

// console.log(anchorElement);

// const ul = document.getElementsByTagName("li");
// const li = document.createAttribute("li");

// ul.append(li);

// console.log(ul);

// const p = document.getElementsByTagName("p");

// p[0].innerHTML = "<h2>Hello</h2>";
// p[0].setAttribute("first-p", "left");
// p[0].removeAttribute("first-p");

// const text = p[0].innerText;
// const htmlcode = p[0].innerHTML;
// const contant = p[0].textContent;

// console.log(text);
// console.log(htmlcode);
// console.log(contant);

// const ul = document.querySelector("ul");

// console.log(ul.parentNode.parentNode);
// console.log(ul.parentElement);

// console.log(ul.childNodes);

// const html = document.documentElement;

// console.log(html.childNodes);

// const ul = document.querySelector("ul");

// console.log(ul.childNodes);

// console.log(ul.firstChild);
// console.log(ul.lastChild);

// const tr = document.querySelector("tr");

// console.log(tr);
// console.log(tr.childNodes);

// console.log(tr.childNodes[1]);

// tr.childNodes[1].style.color = "blue";
// tr.childNodes[1].style.backgroundColor = "red";

// console.log(tr.children);

// const button = document.querySelector("#submit-button");

// function alertMessage() {
//   let num1 = 23,
//     num2 = 89;
//   console.log(num1 + num2);

//   alert("Typescript is next javascript");
// }

// button.addEventListener("click", alertMessage);

// const changeBackgroud = document.querySelector("#about");
// // console.log(changeBackgroud.innerText);

// function changeBackgroudColor() {
//   changeBackgroud.style.backgroundColor = "red";
// }

// changeBackgroud.addEventListener("mouseover", changeBackgroudColor);

// console.log(document.classList);

const button = document.querySelector(".expand-button");

// console.log(button.classList);

const completeForm = document.querySelector(".form");

// completeForm.classList.add("another-class");
// console.log(completeForm.classList.contains("another-class"));

function showForm() {
  if (completeForm.classList.contains("expand-button")) {
    completeForm.classList.remove("form");
  } else {
    button.classList.add("form");
  }
}

button.addEventListener("click", showForm);
