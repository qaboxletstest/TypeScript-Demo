// GENERICS

// ARRAYS - 

let numArray1: number[] = [1, 2, 3]

type numArray = Array<number>
type strArray = Array<string>

// FUNCTIONS - SINGLE GENERIC TYPE

let lastItem = <T>(arr: Array<T>) => {
    return arr[arr.length - 1]
}

const item1 = lastItem([1, 2, 3])
const item2 = lastItem<string>(['a', 'b', 'c'])

// FUNCTIONS - MULTIPLE & DEFAULT GENERIC TYPE

const sum = (a: number, b: number, e?: number) => {
    // const c = 10
    if (e) {
        return a + b + e
    } else {
        return a + b
    }

}

const getEmployee = <X, Y = string>(id: X, code: Y): string => {
    return `${id} - ${code}`
}

getEmployee<number, number>(1, 7); // number, number
getEmployee<number, string>(1, "Steve SMith"); // number, string
getEmployee<string, string>('JD01', "Jack Daniel"); // string, string


// FUNCTIONS WITH OBJECTS

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
