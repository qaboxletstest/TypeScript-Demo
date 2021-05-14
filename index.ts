// ANY

let number: any = true
number = 10
number = 'Five'

console.log(number)

let age

age = 10
age = 'Ten'
age = true
age = [1, 2, 3]
age = { name: 'Any' }
age.isAdult = true

console.log(age)



let mixedArray: any[] = []
mixedArray.push('Text')
mixedArray.push(10)
mixedArray.push(true)

console.log(mixedArray)

let person: { name: any, age: any }

person = {
    name: 'John',
    age: 30
}

console.log(person)

person = {
    name: 30,
    age: 'John'
}

console.log(person)
