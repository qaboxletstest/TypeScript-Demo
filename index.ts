// Functions

let greetOne = () => {
    console.log('Hello')
}

// greetOne = 10


let greetTwo: Function

// greetTwo = 10

greetTwo = () => {
    console.log('Hello')
}

// Parameters - Parameters Data Type, Optional and Default

// Type
let multiplication = (num1: number, num2: number) => {
    return num1 * num2
}

// Type - Union Type Parameter
let id = (userID: number | string) => {
    return `${userID} is active`
}

// Optional - Should be after all required Parameters - Need to handle Undefined case
// let sum = (a: number, b: number, c?: number) => {
//     return a + b + c
// }

// console.log(sum(10, 20))
// console.log(sum(10, 20, 30))

let sum = (a: number, b: number, c?: number) => {
    if (c) {
        return a + b + c
    } else {
        return a + b
    }
}

// console.log(sum(10, 20))
// console.log(sum(10, 20, 30))

// Default 
let add = (a: number, b: number, c: number = 10) => {
    return a + b + c
}

// console.log(sum(10, 20))

let addTwo = (c: number = 10, a: number, b: number) => {
    return a + b + c
}

console.log(addTwo(undefined, 10, 20))


// Return Type

// Type detected by return statement
let sumOne = (num1: number, num2: number) => {
    return (num1 + num2)
}

// Explicit Type
let isBoolean = (bool1: boolean, bool2: boolean): boolean => {
    return bool1 && bool2
}

// console.log(isBoolean(true, false))


// Void Return Type
let greetThree = () => {
    console.log('Hello')
}




