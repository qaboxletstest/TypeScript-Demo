// Variables

const channelName = "QA BOX LET'S TEST"
let age = 1
console.log(channelName, age)

// Array (DOM)
const fruits = ['Apple', 'Mango']
const inputs = document.querySelectorAll('input')

console.log(inputs)

// Iteration
inputs.forEach(input => {
    console.log(input)
})

// Function
const sum = (num1, num2) => {
    return num1 + num2
}

console.log(sum(1, 2))
