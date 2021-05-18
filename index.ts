// Variables

// let mixVar: string | number

// // Array

// let mixedArrayOne: (string | number)[]
// let mixedArrayTwo: (string | number | boolean)[] = [1, 'Two', true]

// // Function

// let getPersonDetails = (id: string | number, name: string) => {
//     console.log(`${name} has an ${id} id`)
// }

// let getBonus = (person: { name: string, id: string | number }, bonus: number) => {
//     console.log(`${person.name} - ${person.id} gets ${bonus} bonus.`)
// }

// let getGratuity = (person: { name: string, id: string | number }, gratuity: number) => {
//     console.log(`${person.name} - ${person.id} gets ${gratuity} bonus.`)
// }

type StringOrNumber = string | number
type StringOrNumberOrBoolean = StringOrNumber | boolean
type ObjWithNameAndID = { name: string, id: StringOrNumber }

let mixVar: StringOrNumber

// Array

let mixedArrayOne: (StringOrNumber)[]
let mixedArrayTwo: (StringOrNumberOrBoolean)[] = [1, 'Two', true]

// Function

let getPersonDetails = (id: StringOrNumber, name: string) => {
    console.log(`${name} has an ${id} id`)
}

let getBonus = (person: ObjWithNameAndID, bonus: number) => {
    console.log(`${person.name} - ${person.id} gets ${bonus} bonus.`)
}

let getGratuity = (person: ObjWithNameAndID, gratuity: number) => {
    console.log(`${person.name} - ${person.id} gets ${gratuity} bonus.`)
}