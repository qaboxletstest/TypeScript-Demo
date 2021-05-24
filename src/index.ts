// const h1 = document.querySelector("h1")!
// const h1 = document.querySelector("h1")

// if (h1) {
//     console.log(h1.textContent)
// }

// console.log(h1!.textContent)

// console.log(h1?.textContent)

// const form = document.querySelector(".new-emp-form")!
// const form = document.querySelector<HTMLFormElement>(".new-emp-form")!
const form = document.querySelector(".new-emp-form") as HTMLFormElement
// console.log(form.children)
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
    form.reset()
})

// clear.addEventListener("click", () => {
//     form.reset()
// })

