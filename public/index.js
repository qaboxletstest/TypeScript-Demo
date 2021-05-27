import { Employee } from "./classes/Employee.js";
import Helpers from './helpers/helpers.js';
import { RenderTemplate } from "./classes/RenderTemplate.js";
import { Position } from "./helpers/position.js";
const form = document.querySelector(".new-emp-form");
const departmentElm = document.querySelector('#department');
const nameElm = document.querySelector('#name');
const ageElm = document.querySelector('#age');
const isHeadElm = document.querySelector('#departmentHead');
const emailElm = document.querySelector('#email');
const clear = document.querySelector('#clear');
const container = document.querySelector("ul");
const count = document.querySelector("h2");
let renderTemplate = new RenderTemplate(count, container);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let emp;
    emp = new Employee(departmentElm.value, nameElm.value, ageElm.valueAsNumber, Helpers.strToBol(isHeadElm.value), emailElm.value);
    renderTemplate.render(emp, departmentElm.value, Position.start);
});
clear.addEventListener("click", () => {
    count.innerText = "";
    container.innerHTML = "";
    form.reset();
});
