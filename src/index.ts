import { Employee } from "./classes/Employee.js"
import Helpers from './helpers/helpers.js'
import { ISummary } from './interfaces/summary.js'

// Encapsulation 

// class A {
//     a: string
//     b: string
//     c: string
//     d: string

//     constructor(a: string, b: string, c: string, d: string) {
//         this.a = a
//         this.b = b
//         this.c = c
//         this.d = d
//     }

//     print(): string {
//         return `${this.a} - ${this.b} - ${this.c} - ${this.d}`
//     }
// }

class A {
    public a: string
    private b: string
    readonly c: string
    protected d: string

    constructor(a: string, b: string, c: string, d: string) {
        this.a = a
        this.b = b
        this.c = c
        this.d = d
    }

    print(): string {
        return `${this.a} - ${this.b} - ${this.c} - ${this.d}`
    }
}

const a1 = new A('a', 'b', 'c', 'd')

// Access Members - public, private and read-only.

// console.log(a1.a)
// console.log(a1.b)
// a1.c = 'C'
// console.log(a1.c)
// console.log(a1.d)

// Inheritance, Protected Access Members and Polymorphism

// Single Level - Allowed
class B extends A {
    e: string
    constructor(a: string, b: string, c: string, d: string, e: string) {
        super(a, b, c, d);
        this.e = e
    }
    // Polymorphism - Method Overriding
    print(): string {
        // return `${this.a} - ${this.b} - ${this.c} - ${this.d}`
        return `${super.a} - ${super.c} - ${super.d} - ${this.e}`
    }
}

let b1 = new B('a', 'b', 'c', 'd', 'e')


console.log(b1.a)
console.log(b1.print()) // will print the print method of class B and not Class A
// console.log(b1.d) // Throws error

// Multi-Level - Allowed
class D extends B {

}

// Multiple Classes - Not Allowed
// class E extends A, B{

// }


// Abstract Class
abstract class F {
    abstract greet(): string
}

// let f1 = new F()

abstract class G extends F {

}

class H extends G {
    greet(): string {
        return "Hello world"
    }
}

let h1 = new H()
h1.greet()

// Classes with Interface - For our mini Project The Employee Class implements ISummary Interface



const form = document.querySelector(".new-emp-form") as HTMLFormElement
const departmentElm = document.querySelector('#department') as HTMLSelectElement
const nameElm = document.querySelector('#name') as HTMLInputElement
const ageElm = document.querySelector('#age') as HTMLInputElement
const isHeadElm = document.querySelector('#departmentHead') as HTMLSelectElement
const emailElm = document.querySelector('#email') as HTMLInputElement
const clear = document.querySelector('#clear') as HTMLButtonElement

form.addEventListener("submit", (e: Event) => {
    e.preventDefault()
    let emp: ISummary
    let values: [string, string, number, boolean, string]
    values = [departmentElm.value, nameElm.value, ageElm.valueAsNumber, Helpers.strToBol(isHeadElm.value), emailElm.value]
    emp = new Employee(...values)
    console.log(emp)
})

clear.addEventListener("click", () => {
    form.reset()
})

