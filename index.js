// GENERICS
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// ARRAYS - 
var numArray1;
var numArray2;
// FUNCTIONS - SINGLE GENERIC TYPE
var lastItem = function (arr) {
    return arr[arr.length - 1];
};
var item1 = lastItem([1, 2, 3]);
var item2 = lastItem(['a', 'b', 'c']);
// FUNCTIONS - MULTIPLE GENERIC TYPE
// function getEmployee(id: number, code: string): string {
//     return `${id} - ${code}`
// }
function getEmployee(id, code) {
    return id + " - " + code;
}
getEmployee(1, 7); // number, number
getEmployee(1, "Steve SMith"); // number, string
getEmployee('JD01', "Jack Daniel"); // string, string
// FUNCTIONS WITH OBJECTS
// const addFullNameProp = (obj: { firstname: string, lastname:string}) => {
//     return {
//         ...obj,
//         FullName: `${obj.firstname} ${obj.lastname}`
//     }
// }
var addFullNameProp = function (obj) {
    return __assign(__assign({}, obj), { FullName: obj.firstname + " " + obj.lastname });
};
var perOne = addFullNameProp({ firstname: 'John', lastname: "Smith", age: 32 });
console.log(perOne);
var p1 = {
    name: "John",
    age: 32,
    misc: 'Some secret'
};
var p2 = {
    name: "Steve",
    age: 45,
    misc: ['Some', 'secret']
};
