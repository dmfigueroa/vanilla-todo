import { addTodo } from './store.js';

class TodoForm extends HTMLElement {
    connectedCallback() {
        const form = this.querySelector('form');

        form.addEventListener('submit', this.handleSubmit);
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const formProps = Object.fromEntries(formData);

        formProps.id = crypto.randomUUID();

        addTodo(formProps);

        const input = this.querySelector('input');
        input.value = '';
        input.focus();
    }
}

customElements.define('todo-form', TodoForm);
