import { Employee } from "./classes/Employee.js"
import Helpers from './helpers/helpers.js'
import { ISummary } from './interfaces/summary.js'
import { RenderTemplate } from "./classes/RenderTemplate.js"
import { Position } from "./helpers/position.js"


const form = document.querySelector(".new-emp-form") as HTMLFormElement
const departmentElm = document.querySelector('#department') as HTMLSelectElement
const nameElm = document.querySelector('#name') as HTMLInputElement
const ageElm = document.querySelector('#age') as HTMLInputElement
const isHeadElm = document.querySelector('#departmentHead') as HTMLSelectElement
const emailElm = document.querySelector('#email') as HTMLInputElement
const clear = document.querySelector('#clear') as HTMLButtonElement

const container = document.querySelector("ul")!
const count = document.querySelector("h2")!
let renderTemplate = new RenderTemplate(count, container)

form.addEventListener("submit", (e: Event) => {
    e.preventDefault()
    let emp: ISummary
    let empValues: [string, string, number, boolean, string]
    empValues = [departmentElm.value, nameElm.value, ageElm.valueAsNumber, Helpers.strToBol(isHeadElm.value), emailElm.value]
    if (empValues.some(empVal => empVal === "" || Number.isNaN(empVal))) {
        window.alert("All fields are mandatory")
    } else {
        emp = new Employee(...empValues)
        renderTemplate.render(emp, departmentElm.value, Position.start)
    }
})

clear.addEventListener("click", () => {
    count.innerText = ""
    container.innerHTML = ""
    form.reset()
})

