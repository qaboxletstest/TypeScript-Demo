// let sum: Function

// 1. Function Signature

let sum: (numOne: number, numTwo: number, numThree?: number) => number
sum = (a: number, b: number) => {
    return a + b
}

sum = (a: number, b: number, c: number = 10) => {
    if (c) {
        return a + b + c
    } else {
        return a + b
    }
}

let add = (a: number, b: number, c: number = 10): number => {
    return a + b + c
}

// 2. Function Type

type addition = (numOne: number, numTwo: number, numThree?: number) => number

let aggregate: addition = (a: number, b: number, c?: number) => {
    if (c) {
        return a + b + c
    } else {
        return a + b
    }
}


