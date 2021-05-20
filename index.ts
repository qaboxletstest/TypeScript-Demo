// Interface and Object

// interface IPerson {
//     name: string,
//     age: number,
//     isMale: boolean,
//     speak: () => void,
//     print: () => string
// }

// let p1: IPerson = 'Test'

// let p1: IPerson = {
//     name: 'Tanisha',
//     age: 5,
//     isMale: false,
//     speak: () => { console.log('Hello') },
//     print: function () { return `${this.name} is ${this.age} years old` }
// }

// p1.age = 6

// console.log(p1.print())


// INTERFACE - OPTIONAL MEMBERS

// interface IPerson {
//     name: string,
//     age: number,
//     isMale?: boolean,
//     speak?: () => void,
//     print: () => string
// }

// let p2: IPerson = {
//     name: 'Avi',
//     age: 10,
//     print: function () { return `${this.name} is ${this.age} years old` }
// }

// console.log(p2.print())

// INTERFACE - READ-ONLY , UNION TYPE PROPERTIES AND EXTRA MEMBER???
// interface IPerson {
//     readonly name: string,
//     age: number | string,
//     isMale?: boolean,
//     speak?: () => void,
//     print: () => string
// }

// let p3: IPerson = {
//     name: 'Avi',
//     age: 10,
//     print: function () { return `${this.name} is ${this.age} years old` },
//     // hobbies : []
// }

// p3.name = "John"
// p3.age = 'Six'

// INTERFACE WITH FUNCTIONS

// interface IPerson {
//     name: string,
//     age: number,
//     isMale: boolean,
//     speak: () => void,
//     print: () => string
// }

// const getName = (person: IPerson) => {
//     console.log(`Hey ${person.name}!!!`)
// }


// INTERFACE AND INHERITANCE

// Single Interface Inheritance
// interface IPerson {
//     name: string
// }

// interface IDeveloper extends IPerson {
//     language: string
// }

// let p4: IDeveloper = {
//     name: 'John',
//     language: 'TypeScript',
//     // age: 10
// }

// // Multiple Interface Inheritance
// interface IParent1 {
//     num1: number
// }

// interface IParent2 {
//     num2: number
// }

// interface IChild extends IParent1, IParent2 { }

// let p5: IChild = {
//     num1: 10,
//     num2 :20
// }

// Multiple interface Inheritance Issue

interface IParent1 {
    num1: number,
    num3: number,
    print: () => number
}

interface IParent2 {
    num2: number
    num3: number
    print: () => number
}

interface IChild extends IParent1, IParent2 { }


// INTERFACE WITH CLASSES

class Animal {
    species: string;
    id: string = '';
    constructor(species: string) {
        this.species = species
    }
}
class Person {
    name: string;
    id: string = '';
    constructor(name: string) {
        this.name = name
    }
}
interface Job {
    title: string;
}
interface Employee extends Person, Animal, Job {
    employeeCode: string;
}


let employee: Employee = {
    id: '1',
    species: 'human',
    name: 'Joe',
    employeeCode: '123',
    title: 'laborer'
}

// CLASSES WITH INTERFACE - WILL COVER IN A FUTURE VIDEO - THERE IT WOULD MAKE MORE SENSE

// interface IPerson {
//     name: string
// }

// class Person implements IPerson {
//     name: string;
//     constructor(name: string) {
//         this.name = name
//     }
// }


