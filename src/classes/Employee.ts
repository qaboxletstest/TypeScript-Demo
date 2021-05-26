import { ISummary } from '../interfaces/summary.js'

export class Employee implements ISummary {
    constructor(
        private department: string,
        private name: string,
        private age: number,
        private isHead: boolean,
        private email: string,
    ) { }

    summary(): string {
        if (this.isHead) {
            return `${this.name} leads ${this.department} department and is ${this.age} years old. (Email - ${this.email})`
        } else {
            return `${this.name} works into ${this.department} department and is ${this.age} years old. (Email - ${this.email})`
        }
    }
}
