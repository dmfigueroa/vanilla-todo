import { deleteTodo, updateTodo } from "./store.js";

class TodoItem extends HTMLElement {
    connectedCallback() {
        this.value = this.getAttribute('value');
        this.id = this.getAttribute('id');
        this.completed = this.getAttribute('completed') === 'true' ? true : false;

        this.render();
    }

    render() {

        this.innerHTML = /* html */`
          <li>
            <span class="value">${this.value}</span>
            <button class="complete">${this.completed ? 'Uncomplete' : 'Complete'}</button>
            <button class="edit">Edit</button>
            <button class="delete">Delete</button>
          </li>
        `
        this.addEventListeners();
    }

    addEventListeners() {
        this.querySelector('.complete').addEventListener('click', () => this.toggleComplete(!this.completed));
        this.querySelector('.edit').addEventListener('click', () => this.edit());
        this.querySelector('.delete').addEventListener('click', () => this.delete());
    }

    toggleComplete(completed) {
        updateTodo(this.id, { id: this.id, value: this.value, completed });
    }

    edit() {
        const newValue = prompt('Type the new value', this.value);
        updateTodo(this.id, { id: this.id, value: newValue, completed: this.completed })
    }

    delete() {
        const deleteResult = confirm("Do you want to remove this tak?");

        if (deleteResult) deleteTodo(this.id);
    }
}

customElements.define('todo-item', TodoItem);
