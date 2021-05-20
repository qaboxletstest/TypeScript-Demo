// Interface and Object
// INTERFACE WITH CLASSES
var Animal = /** @class */ (function () {
    function Animal(species) {
        this.id = '';
        this.species = species;
    }
    return Animal;
}());
var Person = /** @class */ (function () {
    function Person(name) {
        this.id = '';
        this.name = name;
    }
    return Person;
}());
var employee = {
    id: '1',
    species: 'human',
    name: 'Joe',
    employeeCode: '123',
    title: 'laborer'
};
// CLASSES WITH INTERFACE - WILL COVER IN A FUTURE VIDEO - THERE IT WOULD MAKE MORE SENSE
// interface IPerson {
//     name: string
// }
// class Person implements IPerson {
//     name: string;
//     constructor(name: string) {
//         this.name = name
//     }
// }
