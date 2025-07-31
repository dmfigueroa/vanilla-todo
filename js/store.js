/** @typedef {{ id: string, value: string, completed?: boolean }} Todo */

/**
 * @type {Todo[]}
 */
let todoStore = JSON.parse(localStorage.getItem('todos') || '[]');

/**
 * 
 * @param {Todo} todo 
 */
export function addTodo(todo) {
    todoStore.push(todo);

    saveTodos(todoStore);
}

export function getTodos() {
    return todoStore;
}

function saveTodos(todos) {
    localStorage.setItem('todos', JSON.stringify(todos));

    document.dispatchEvent(new CustomEvent('reloadlist'));
}

export function updateTodo(id, value) {
    const todoIndex = todoStore.findIndex((todo) => todo.id === id);

    todoStore[todoIndex] = value;
    saveTodos(todoStore);
}

export function deleteTodo(id) {
    todoStore = todoStore.filter((todo) => todo.id !== id);
    saveTodos(todoStore);
}