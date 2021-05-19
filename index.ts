// let sum: Function

// 1. Function Signature
// let sum : (numOne:number, numTwo:number) => number

// sum = (a:number, b:number) : number => {
//     return a + b
// }

// Optional Parameter in Function Signature

// let sum : (numOne:number, numTwo:number, numThree?:number) => number

// sum = (a:number, b:number, c?:number) : number => {
//     if(c){
//         return a + b + c
//     } else {
//         return a + b
//     }
    
// }

// Default Parameter in Function Signature

let sum : (numOne:number, numTwo:number, numThree?:number) => number

sum = (a:number, b:number, c:number = 10) : number => {
    if(c){
        return a + b + c
    } else {
        return a + b
    }
    
}


let add = (a: number, b: number, c: number = 10): number => {
    return a + b + c
}

// 2. Function Type

type addition = (numOne:number, numTwo:number, numThree?:number) => number

let aggregate : addition = (a:number, b:number, c:number = 10) : number => {
    if(c){
        return a + b + c
    } else {
        return a + b
    }
    
}
