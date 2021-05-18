// let sum: Function
// 1. Function Signature
var sum;
sum = function (a, b) {
    return a + b;
};
sum = function (a, b, c) {
    if (c === void 0) { c = 10; }
    if (c) {
        return a + b + c;
    }
    else {
        return a + b;
    }
};
var add = function (a, b, c) {
    if (c === void 0) { c = 10; }
    return a + b + c;
};
var aggregate = function (a, b, c) {
    if (c) {
        return a + b + c;
    }
    else {
        return a + b;
    }
};
