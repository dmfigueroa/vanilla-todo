import { getTodos } from "./store.js";

class Todos extends HTMLElement {
    connectedCallback() {
        this.render();

        document.addEventListener('reloadlist', () => this.render());
    }

    render() {
        const todos = getTodos();

        this.innerHTML = /* html */`<ul>
            ${todos.map((todo) => /* html */`
                <todo-item id="${todo.id}" value="${todo.value}" completed="${todo.completed || false}"></todo-item>
            `).join('')}
        </ul>`;
    }
}

customElements.define('todo-list', Todos);
