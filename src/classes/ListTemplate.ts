import { iSummary } from "../interfaces/summary.js"

export class ListTemplate {
    constructor(private container: HTMLUListElement) { }
    render(type: iSummary, heading: string, pos: 'start' | 'end') {
        const li = document.createElement('li')

        const h4 = document.createElement('h4')
        h4.innerText = heading
        li.append(h4)

        const p = document.createElement('p')
        p.innerText = type.summary()
        li.append(p)

        if (pos === 'start') {
            this.container.prepend(li)
        } else {
            this.container.append(li)
        }
    }
}