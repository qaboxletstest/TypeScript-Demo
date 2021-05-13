// Arrays - Collection of Single Data Type(e.g. All String, All Numbers , etc)
let fruits = ['Apple', 'Banana']
let numbers = [1,2,3]

// Allowed
fruits.push('Mango')
fruits[0] = 'Kiwi'

// fruits = []

// Not Allowed
// fruits.push(true)
// fruits[0] = 1
// fruits = 12


// Arrays - Collection of Multiple Data Type(e.g. All String, All Numbers , etc)
let mixedArray = ['Avi', 10]


// Allowed
mixedArray.push('Test')
mixedArray.push(20)
mixedArray[0] = 30
mixedArray[1] = 'Mango'

// Not Allowed
// mixedArray = 10
// mixedArray.push(true)



// Objects
let person = {
    name: 'Avi',
    age: 10
}

// Allowed
person.name = 'Tanisha'
person.age = 5

person = {
    name:'Tanisha',
    age:5
}


// Not Allowed
// person.name = true
// person.age = '5'

// person = {
//     name:'Tanisha',
//     // age:5,
//     // isGirl: true
// }

// person.isGirl = true
