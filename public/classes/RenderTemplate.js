export class RenderTemplate {
    constructor(container) {
        this.container = container;
    }
    render(emp, title, pos) {
        const li = document.createElement('li');
        const h4 = document.createElement('h4');
        h4.innerText = title;
        li.append(h4);
        const p = document.createElement('p');
        p.innerText = emp.summary();
        li.append(p);
        if (pos === 'start') {
            this.container.prepend(li);
        }
        else {
            this.container.append(li);
        }
    }
}
