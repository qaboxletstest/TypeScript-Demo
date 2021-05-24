"use strict";
// const h1 = document.querySelector("h1")!
// const h1 = document.querySelector("h1")
// if (h1) {
//     console.log(h1.textContent)
// }
// console.log(h1!.textContent)
// console.log(h1?.textContent)
// const form = document.querySelector(".new-emp-form")!
// const form = document.querySelector<HTMLFormElement>(".new-emp-form")!
var form = document.querySelector(".new-emp-form");
// console.log(form.children)
var departmentElm = document.querySelector('#department');
var nameElm = document.querySelector('#name');
var ageElm = document.querySelector('#age');
var isHeadElm = document.querySelector('#departmentHead');
var emailElm = document.querySelector('#email');
var clear = document.querySelector('#clear');
form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log(departmentElm.value, nameElm.value, ageElm.valueAsNumber, isHeadElm.value, emailElm.value);
    form.reset();
});
// clear.addEventListener("click", () => {
//     form.reset()
// })
