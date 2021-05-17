// Functions
var greetOne = function () {
    console.log('Hello');
};
// greetOne = 10
var greetTwo;
// greetTwo = 10
greetTwo = function () {
    console.log('Hello');
};
// Parameters - Parameters Data Type, Optional and Default
// Type
var multiplication = function (num1, num2) {
    return num1 * num2;
};
// Type - Union Type Parameter
var id = function (userID) {
    return userID + " is active";
};
// Optional - Should be after all required Parameters - Need to handle Undefined case
// let sum = (a: number, b: number, c?: number) => {
//     return a + b + c
// }
var sum = function (a, b, c) {
    if (c) {
        return a + b + c;
    }
    else {
        return a + b;
    }
};
// console.log(sum(10, 20))
// console.log(sum(10, 20, 30))
// Default 
var add = function (a, b, c) {
    if (c === void 0) { c = 10; }
    return a + b + c;
};
// console.log(sum(10, 20))
var addTwo = function (c, a, b) {
    if (c === void 0) { c = 10; }
    return a + b + c;
};
console.log(addTwo(undefined, 10, 20));
// Return Type
// Type detected by return statement
var sumOne = function (num1, num2) {
    return (num1 + num2);
};
var sumTwo = function (num1, num2) {
    return (num1 + num2) + "Test";
};
// Explicit Type
var isBoolean = function (bool1, bool2) {
    return bool1 && bool2;
};
// console.log(isBoolean(true, false))
// Void Return Type
var greetThree = function () {
    console.log('Hello');
};
