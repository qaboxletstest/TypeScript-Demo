
// Class

class ITDept {
    // Properties 
    name: string
    age: number
    isHead: boolean
    email: string

    // Constructor
    constructor(name: string, age: number, isHead: boolean, email: string) {
        this.name = name
        this.age = age
        this.isHead = isHead
        this.email = email
    }

    // Methods
    summary(): string {
        if (this.isHead) {
            return `${this.name} leads IT department and is ${this.age} years old. (Email - ${this.email})`
        } else {
            return `${this.name} works into IT department and is ${this.age} years old. (Email - ${this.email})`
        }
    }
}

// Instantiation

const it1 = new ITDept('John Doe', 32, true, 'john.doe@abc.xom')
const it2 = new ITDept('Sam Doe', 35, false, 'sam.doe@abc.xom')

console.log(it1, it2)

// Access Properties and Invoke Methods
console.log(it1.name)
console.log(it1.summary())

// Custom Type

const names: ITDept[] = []
names.push(it1)
names.push(it2)

// Change Properties outside the class

it1.name = "Steve Smith"
it2.age = 40

console.log(it1, it2)

console.log(names)

// Inheritance - Single and Multiple And Method Overriding

class A {
    a: string
    constructor(a: string) {
        this.a = a
    }
    print() {
        console.log('A')
    }
}

class B extends A {
    b: string
    constructor(a: string, b: string) {
        super(a)
        this.b = b
    }

    // Method 
    print() {
        console.log('B')
    }

    // Change the signature

    // print(x: string) {
    //     console.log('B')
    // }
}

const b1 = new B('a', 'b')

// Access Parent/Self Properties
console.log(b1.a)
console.log(b1.b)
console.log(b1.print())
console.log(b1)

// Multi-Level - Allowed
class C extends B {

}

// Multiple - Not Allowed
class D extends A, B {

}



const form = document.querySelector(".new-emp-form") as HTMLFormElement
const departmentElm = document.querySelector('#department') as HTMLSelectElement
const nameElm = document.querySelector('#name') as HTMLInputElement
const ageElm = document.querySelector('#age') as HTMLInputElement
const isHeadElm = document.querySelector('#departmentHead') as HTMLSelectElement
const emailElm = document.querySelector('#email') as HTMLInputElement
const clear = document.querySelector('#clear') as HTMLButtonElement

form.addEventListener("submit", (e: Event) => {
    e.preventDefault()
    console.log(
        departmentElm.value,
        nameElm.value,
        ageElm.valueAsNumber,
        isHeadElm.value,
        emailElm.value
    )
})

clear.addEventListener("click", () => {
    form.reset()
})

