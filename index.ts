let personName = 'Avi' // String
let age = 10 // Number
let inSports = false // Boolean

// Will cover each of this topic in much more detail in a separate video in future
let fruits = ['Apple', 'Mango', 'Banana'] // Array
let mixArray = [1, true, 'Role'] // Array(Union Type)
let person = { name: 'Avi', age: 10 } // Object
let rectArea = (length: number, breadth: number) => length * breadth // Function


// personName = 12
personName = 'Tanisha'

// age = 'Yoga'
age = 5

// inSports = 'No'
inSports = true

// Contextual Typing

document.onmousedown = function (event) {
    console.log(event.button)
    // console.log(event.troy)
}

document.onclick = function (event) {
    console.log(event.button)
}

