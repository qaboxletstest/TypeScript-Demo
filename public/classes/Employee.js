export class Employee {
    constructor(department, name, age, isHead, email) {
        this.department = department;
        this.name = name;
        this.age = age;
        this.isHead = isHead;
        this.email = email;
        Employee.numOfEmp++;
    }
    static getEmpCount() {
        return Employee.numOfEmp > 0 ? `Employees Count - ${Employee.numOfEmp}` : "";
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
Employee.numOfEmp = 0;
