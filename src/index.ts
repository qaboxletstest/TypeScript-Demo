import { Employee } from "./classes/Employee.js"

// Class



// Instantiation

const emp1 = new Employee('IT', 'John Doe', 32, true, 'john.doe@abc.xom')
const emp2 = new Employee('Non-IT', 'Sam Doe', 35, false, 'sam.doe@abc.xom')

console.log(emp1, emp2)

// Access Properties and Invoke Methods
console.log(emp1.name)
console.log(emp1.summary())

// Custom Type

const employees: Employee[] = []
employees.push(emp1)
employees.push(emp2)

// Change Properties outside the class

emp1.name = "Steve Smith"
emp2.age = 40

console.log(emp1, emp2)

console.log(employees)


const form = document.querySelector(".new-emp-form") as HTMLFormElement
const departmentElm = document.querySelector('#department') as HTMLSelectElement
const nameElm = document.querySelector('#name') as HTMLInputElement
const ageElm = document.querySelector('#age') as HTMLInputElement
const isHeadElm = document.querySelector('#departmentHead') as HTMLSelectElement
const emailElm = document.querySelector('#email') as HTMLInputElement
const clear = document.querySelector('#clear') as HTMLButtonElement

form.addEventListener("submit", (e: Event) => {
    e.preventDefault()
    console.log(
        departmentElm.value,
        nameElm.value,
        ageElm.valueAsNumber,
        isHeadElm.value,
        emailElm.value
    )
})

clear.addEventListener("click", () => {
    form.reset()
})

