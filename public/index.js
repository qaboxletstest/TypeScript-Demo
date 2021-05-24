"use strict";
// Class
class ITDept {
    // Constructor
    constructor(name, age, isHead, email) {
        this.name = name;
        this.age = age;
        this.isHead = isHead;
        this.email = email;
    }
    // Methods
    summary() {
        if (this.isHead) {
            return `${this.name} leads IT department and is ${this.age} years old. (Email - ${this.email})`;
        }
        else {
            return `${this.name} works into IT department and is ${this.age} years old. (Email - ${this.email})`;
        }
    }
}
// Instantiation
const it1 = new ITDept('John Doe', 32, true, 'john.doe@abc.xom');
const it2 = new ITDept('Sam Doe', 35, false, 'sam.doe@abc.xom');
console.log(it1, it2);
// Access Properties and Invoke Methods
console.log(it1.name);
console.log(it1.summary());
// Custom Type
const names = [];
names.push(it1);
names.push(it2);
// Change Properties outside the class
it1.name = "Steve Smith";
it2.age = 40;
console.log(it1, it2);
console.log(names);
// Inheritance - Single and Multiple And Method Overriding
class A {
    constructor(a) {
        this.a = a;
    }
    print() {
        console.log('A');
    }
}
class B extends A {
    constructor(a, b) {
        super(a);
        this.b = b;
    }
    // Method Overriding 
    print() {
        console.log('B');
    }
}
const b1 = new B('a', 'b');
// Access Parent/Self Properties
console.log(b1.a);
console.log(b1.b);
console.log(b1.print());
console.log(b1);
// Multi-Level - Allowed
class C extends B {
}
// Multiple - Not Allowed
class D extends A {
}
const form = document.querySelector(".new-emp-form");
const departmentElm = document.querySelector('#department');
const nameElm = document.querySelector('#name');
const ageElm = document.querySelector('#age');
const isHeadElm = document.querySelector('#departmentHead');
const emailElm = document.querySelector('#email');
const clear = document.querySelector('#clear');
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(departmentElm.value, nameElm.value, ageElm.valueAsNumber, isHeadElm.value, emailElm.value);
});
clear.addEventListener("click", () => {
    form.reset();
});
