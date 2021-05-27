import { IRenderTemplate } from "../interfaces/renderTemplate.js"
import { ISummary } from "../interfaces/summary.js"
import { Position } from "../helpers/position.js"
import { Employee } from "./Employee.js"

export class RenderTemplate implements IRenderTemplate {
    constructor(private count: HTMLHeadingElement, private container: HTMLUListElement) { }
    render(emp: ISummary, title: string, pos: Position) {

        let presentCount = Employee.getEmpCount()
        if (presentCount) {
            this.count.innerText = presentCount
        }

        const li = document.createElement('li')

        const h4 = document.createElement('h4')
        h4.innerText = title
        li.append(h4)

        const p = document.createElement('p')
        p.innerText = emp.summary()
        li.append(p)

        if (pos === Position.start) {
            this.container.prepend(li)
        } else {
            this.container.append(li)
        }
    }
}