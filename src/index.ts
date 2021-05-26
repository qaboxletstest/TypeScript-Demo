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
let renderTemplate = new RenderTemplate(container)

form.addEventListener("submit", (e: Event) => {
    e.preventDefault()
    let emp: ISummary
    emp = new Employee(departmentElm.value, nameElm.value, ageElm.valueAsNumber, Helpers.strToBol(isHeadElm.value), emailElm.value)
    renderTemplate.render(emp, departmentElm.value, Position.start)
})

clear.addEventListener("click", () => {
    container.innerHTML = ""
    form.reset()
})

