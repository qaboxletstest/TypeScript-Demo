// Variables
var channelName = "QA BOX LET'S TEST";
var age = 1;
console.log(channelName, age);
// Array (DOM)
var fruits = ['Apple', 'Mango'];
var inputs = document.querySelectorAll('input');
console.log(inputs);
// Iteration
inputs.forEach(function (input) {
    console.log(input);
});
// Function
var sum = function (num1, num2) {
    return num1 + num2;
};
console.log(sum(1, 2));
