import { Employee } from "./classes/Employee.js";
import Helpers from './helpers/helpers.js';
// Encapsulation 
// class A {
// a: string
// b: string
// c: string
// d: string
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
    constructor(a, b, c, d) {
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
    }
    print() {
        return `${this.a} - ${this.b} - ${this.c} - ${this.d}`;
    }
}
const a1 = new A('a', 'b', 'c', 'd');
// Access Members - public, private and read-only.
// console.log(a1.a)
// console.log(a1.b)
// a1.c = 'C'
// console.log(a1.c)
// console.log(a1.d)
// Inheritance, Protected Access Members and Polymorphism
// Single Level - Allowed
class B extends A {
    constructor(a, b, c, d, e) {
        super(a, b, c, d);
        this.e = e;
    }
    // Polymorphism - Method Overriding
    print() {
        // return `${this.a} - ${this.b} - ${this.c} - ${this.d}`
        return `${super.a} - ${super.c} - ${super.d} - ${this.e}`;
    }
}
let b1 = new B('a', 'b', 'c', 'd', 'e');
console.log(b1.a);
console.log(b1.print()); // will print the print method of class B and not Class A
// console.log(b1.d) // Throws error
// Multi-Level - Allowed
class D extends B {
}
// Multiple Classes - Not Allowed
// class E extends A, B{
// }
// Abstract Class
class F {
}
// let f1 = new F()
class G extends F {
}
class H extends G {
    greet() {
        return "Hello world";
    }
}
let h1 = new H();
h1.greet();
class Person {
    walk() {
        return 'Walk';
    }
}
let per1 = new Person();
per1.walk();
const form = document.querySelector(".new-emp-form");
const departmentElm = document.querySelector('#department');
const nameElm = document.querySelector('#name');
const ageElm = document.querySelector('#age');
const isHeadElm = document.querySelector('#departmentHead');
const emailElm = document.querySelector('#email');
const clear = document.querySelector('#clear');
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let emp;
    emp = new Employee(departmentElm.value, nameElm.value, ageElm.valueAsNumber, Helpers.strToBol(isHeadElm.value), emailElm.value);
    console.log(emp);
});
clear.addEventListener("click", () => {
    form.reset();
});
