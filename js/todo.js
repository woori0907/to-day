const messageInput = document.querySelector('.schedule-message-input');
const todoInput = document.querySelector('.schedule-todo-input');
const todoInputForm = document.querySelector('.schedule-todo-form');
const todoList = document.querySelector('.schedule-todo-list');

let todoArr = [];

const paintTodoItem = (todoText) => {
    const newListItem = document.createElement('li');
    newListItem.textContent = todoText;
    newListItem.classList.add = "list-item";
    todoList.appendChild(newListItem);
}

const addTodoItem = (event) => {
    event.preventDefault();
    const newTodo = event.target[0].value;
    todoArr.push(newTodo);
    paintTodoItem(newTodo);
    todoInput.value = '';
}

todoInputForm.addEventListener('submit', addTodoItem);