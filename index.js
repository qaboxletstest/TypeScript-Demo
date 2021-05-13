// Type Annotation - Explicit Type
// Primitive Data Types - STRING , NUMBER AND BOOLEAN
// Single Data Type
var personName;
var age;
var isQA;
// Allowed
personName = 'Avi';
// Not Allowed
// personName = 10
// Allowed
age = 10;
// Not Allowed
// age = 'Ten'
// Allowed
isQA = false;
// Not Allowed
// isQA = 'No'
// Union Data Type
var something;
// Allowed
something = 'Test';
something = 10;
something = true;
// Not Allowed
// something = []
// something = {}
// Non-Primitive Data Types - ARRAY AND OBJECT
// Single Data Type
// Array
var fruits;
var cars = [];
// Allowed
fruits = ['Apple', 'Banana'];
// Not Allowed
// fruits.push(1)
// Object
var anyObj;
var personObj;
// Allowed
anyObj = { skill: 'TypeScript', isQA: false };
anyObj = { name: 'Avi', age: 10 };
anyObj = ['Obj1', 'Obj2'];
personObj = { name: 'Tanisha', age: 5 };
// Not Allowed
// anyObj = 10
// personObj = { name: 'Test' }
// personObj = { name: 'Test' , age: 50, isQA: true}
// Union Data Type
// Array
var mixedOne = [];
var mixedTwo = [];
// Allowed
mixedTwo.push('Name');
mixedTwo.push(10);
mixedTwo.push(true);
// Not Allowed
// let numbers = [1,2,3]
// mixedTwo.push(numbers)
// mixedTwo = 10
// Object
var mixedObj;
var mixedObj2;
// Allowed
mixedObj = { color: 'Red' };
mixedObj = { name: 'some name', age: 20 };
mixedObj = { name: 'some name', age: 20, skill: 'QA', isQA: true };
mixedObj = [];
mixedObj = {};
// mixedObj = 10
