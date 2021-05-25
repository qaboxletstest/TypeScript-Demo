import { ListTemplate } from './classes/ListTemplate.js';
import Helpers from './helpers/helpers.js';
import Employee from './classes/Employee.js';
const form = document.querySelector('form');
const departmentElm = document.querySelector('#department');
const nameElm = document.querySelector('#name');
const ageElm = document.querySelector('#age');
const isHeadElm = document.querySelector('#departmentHead');
const emailElm = document.querySelector('#email');
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let type;
    let values;
    values = [departmentElm.value, nameElm.value, ageElm.valueAsNumber, Helpers.strToBol(isHeadElm.value), emailElm.value];
    type = new Employee(...values);
    list.render(type, departmentElm.value, "end");
});
const clear = document.querySelector('#clear');
clear.addEventListener('click', () => {
    ul.innerHTML = "";
    form.reset();
});
