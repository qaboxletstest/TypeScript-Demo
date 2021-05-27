import { Position } from "../helpers/position.js";
import { Employee } from "./Employee.js";
export class RenderTemplate {
    constructor(count, container) {
        this.count = count;
        this.container = container;
    }
    render(emp, title, pos) {
        let presentCount = Employee.getEmpCount();
        if (presentCount) {
            this.count.innerText = presentCount;
        }
        const li = document.createElement('li');
        const h4 = document.createElement('h4');
        h4.innerText = title;
        li.append(h4);
        const p = document.createElement('p');
        p.innerText = emp.summary();
        li.append(p);
        if (pos === Position.start) {
            this.container.prepend(li);
        }
        else {
            this.container.append(li);
        }
    }
}
