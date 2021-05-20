// GENERICS

// ARRAYS - 

let numArray1: number[]
let numArray2: Array<number>

type numArray = Array<number>
type strArray = Array<string>

// FUNCTIONS - SINGLE GENERIC TYPE

let lastItem = (arr: Array<number>) => {
    return arr[arr.length - 1]
}

// const item1 = lastItem([1, 2, 3])
// const item2 = lastItem(['a', 'b', 'c'])


// let lastItem = <T>(arr: Array<T>): T => {
//     return arr[arr.length - 1]
// }

// const item1 = lastItem([1, 2, 3])
// const item2 = lastItem<string>(['a', 'b', 'c'])

// FUNCTIONS - MULTIPLE GENERIC TYPE

// function getEmployee(id: number, code: string): string {
//     return `${id} - ${code}`
// }

function getEmployee<X, Y = string>(id: X, code: Y): string {
    return `${id} - ${code}`
}

getEmployee<number, number>(1, 7); // number, number
getEmployee<number, string>(1, "Steve SMith"); // number, string
getEmployee<string, string>('JD01', "Jack Daniel"); // string, string


// FUNCTIONS WITH OBJECTS
// const addFullNameProp = (obj: { firstname: string, lastname:string}) => {
//     return {
//         ...obj,
//         FullName: `${obj.firstname} ${obj.lastname}`
//     }
// }

const addFullNameProp = <T extends { firstname: string, lastname: string }>(obj: T) => {
    return {
        ...obj,
        FullName: `${obj.firstname} ${obj.lastname}`
    }
}

const perOne = addFullNameProp({ firstname: 'John', lastname: "Smith", age: 32 })

console.log(perOne)



// INTERFACES

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

let p2: IPerson<string[]> = {
    name: "Steve",
    age: 45,
    misc: ['Some', 'secret']
}
