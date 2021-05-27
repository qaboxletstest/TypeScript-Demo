import { ISummary } from '../interfaces/summary.js'

export class Employee implements ISummary {
    private static numOfEmp = 0;

    constructor(
        private department: string,
        private name: string,
        private age: number,
        private isHead: boolean,
        private email: string,
    ) {
        Employee.numOfEmp++
    }

    static getEmpCount(): string {
        return Employee.numOfEmp > 0 ? `Employees Count - ${Employee.numOfEmp}` : ""
    }

    summary(): string {
        if (this.isHead) {
            return `${this.name} leads ${this.department} department and is ${this.age} years old. (Email - ${this.email})`
        } else {
            return `${this.name} works into ${this.department} department and is ${this.age} years old. (Email - ${this.email})`
        }
    }
}
