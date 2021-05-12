var personName = 'Avi'; // String
var age = 10; // Number
var inSports = false; // Boolean
// Will cover in much more detail in future videos
var fruits = ['Apple', 'Mango', 'Banana']; // Array
var mixArray = [1, true, 'Role']; // Union Type
var person = { name: 'Avi', age: 10 }; // Object
var rectArea = function (length, breadth) { return length * breadth; }; // Function
// personName = 12
personName = 'Tanisha';
// age = 'Yoga'
age = 5;
// inSports = 'No'
inSports = true;
// Contextual Typing
document.onmousedown = function (event) {
    console.log(event.button);
    // console.log(event.troy)
};
document.onclick = function (event) {
    console.log(event.button);
};
