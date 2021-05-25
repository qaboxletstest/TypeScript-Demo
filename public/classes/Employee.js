export default class Employee {
    constructor(department, name, age, isHead, email) {
        this.department = department;
        this.name = name;
        this.age = age;
        this.isHead = isHead;
        this.email = email;
    }
    summary() {
        if (this.isHead) {
            return `${this.name} leads ${this.department} department and is ${this.age} years old. (Email - ${this.email})`;
        }
        else {
            return `${this.name} works into ${this.department} department and is ${this.age} years old. (Email - ${this.email})`;
        }
    }
}
