// GENERICS

// ARRAYS - 

let numArray1: number[] // OR
let numArray2: Array<number>

// ARRAY TYPES

type numArray = Array<number>
type strArray = Array<boolean>

// FUNCTIONS - SINGLE GENERIC TYPE

// let lastItem = (arr: Array<any>) => {
//     return arr[arr.length - 1]
// }

// const item1 = lastItem([1, 2, 3])
// const item2 = lastItem(['a', 'b', 'c'])


// lastItem Function With Generics
// let lastItem = <T>(arr: Array<T>): T => {
//     return arr[arr.length - 1]
// }

// const item1 = lastItem([1, 2, 3])
// const item2 = lastItem<string>(['a', 'b', 'c'])


// FUNCTIONS - MULTIPLE GENERIC TYPE

// function getEmployee(id: number, code: string): string {
//     return `${id} - ${code}`
// }

// getEmployee(1, "CD01")
// getEmployee("CD01", "CD01")

// getEmployee Function With Generics
function getEmployee<X, Y= string>(id: X, code: Y): string {
    return `${id} - ${code}`
}

getEmployee(1, "CD01") // number, string
getEmployee<string>("CD01", "CD01") // string, string

// FUNCTIONS WITH OBJECTS
// const addFullNameProp = (obj : {firstname:string, lastname:string}) => { // In tsconfig.json comment out strict option
//     return {
//         ...obj,
//         FullName: `${obj.firstname} ${obj.lastname}`
//     }
// }

// addFullNameProp Function With Generics

const addFullNameProp = <T extends {firstname:string, lastname:string}>(obj : T) => { // In tsconfig.json comment out strict option
    return {
        ...obj,
        FullName: `${obj.firstname} ${obj.lastname}`
    }
}


const perOne = addFullNameProp({ firstname: 'John', lastname: "Smith", age:35})

console.log(perOne)



// INTERFACES

// interface IPerson {
//     name: string,
//     age: number,
//     misc: string
// }

// IPerson Interface With Generics

interface IPerson<T> {
    name: string,
    age: number,
    misc: T
}

let p1: IPerson<string> = {
    name: "John",
    age: 32,
    misc: 'Some secret'
}

let p2: IPerson<string []> = {
    name: "Steve",
    age: 45,
    misc: ['Some', 'secret']
}
