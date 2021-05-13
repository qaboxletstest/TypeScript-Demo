// Type Annotation - Explicit Type

// Primitive Data Types - STRING , NUMBER AND BOOLEAN

// Single Data Type
let personName: string
let age: number
let isQA: boolean

// Allowed
personName = 'Avi'

// Not Allowed
// personName = 10

// Allowed
age = 10

// Not Allowed
// age = 'Ten'

// Allowed
isQA = false

// Not Allowed
// isQA = 'No'


// Union Data Type
let something: (string | number | boolean)

// Allowed
something = 'Test'
something = 10
something = true

// Not Allowed
// something = []
// something = {}

// Non-Primitive Data Types - ARRAY AND OBJECT

// Single Data Type

// Array
let fruits: string[]
let cars: Array<string> = []

// Allowed
fruits = ['Apple', 'Banana']

// Not Allowed
// fruits.push(1)

// Object
let anyObj: object
let personObj: { name: string, age: number }

// Allowed
anyObj = { skill: 'TypeScript', isQA: false }
anyObj = { name: 'Avi', age: 10 }
anyObj = ['Obj1', 'Obj2']
personObj = { name: 'Tanisha', age: 5 }

// Not Allowed
// anyObj = 10
// personObj = { name: 'Test' }
// personObj = { name: 'Test' , age: 50, isQA: true}

// Union Data Type

// Array
let mixedOne: (string | number | boolean)[] = []
let mixedTwo: Array<(string | number | boolean)> = []

// Allowed
mixedTwo.push('Name')
mixedTwo.push(10)
mixedTwo.push(true)

// Not Allowed
// let numbers = [1,2,3]
// mixedTwo.push(numbers)
// mixedTwo = 10


// Object
let mixedObj: object | { name: string, age: number }
let mixedObj2: { skill: string, isQA: boolean } | { name: string, age: number }

// Allowed
mixedObj = { color: 'Red' }
mixedObj = { name: 'some name', age: 20 }
mixedObj = { name: 'some name', age: 20, skill: 'QA', isQA: true }
mixedObj = []
mixedObj = {}

// mixedObj = 10










