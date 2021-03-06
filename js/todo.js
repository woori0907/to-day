const todoInput = document.querySelector('.todo-input');
const todoInputForm = document.querySelector('.todo-form');
const todoList = document.querySelector('.todo-list');

let todoArr = [];

const paintTodoItem = (todoText) => {
    const newListItem = document.createElement('li');
    const itemText = document.createElement('span');
    const checkBox = document.createElement('i');
    const deleteBtn = document.createElement('i');
    itemText.innerText = todoText;
    deleteBtn.classList.add("fa-solid", "fa-xmark","list-deletebtn");
    checkBox.classList.add ("fa-regular", "fa-square","list-checkbox");
    newListItem.classList.add("list-item");
    newListItem.appendChild(checkBox);
    newListItem.appendChild(itemText);
    newListItem.appendChild(deleteBtn);
    todoList.appendChild(newListItem);
    deleteBtn.addEventListener("click", deleteTotoItem);
    checkBox.addEventListener("click", checkTodoItem);
}

const saveTodoItem = () => {
    localStorage.setItem('item', todoArr);
}

const addTodoItem = (event) => {
    event.preventDefault();
    const newTodo = event.target[0].value;
    if(newTodo){
        todoArr.push(newTodo);
        paintTodoItem(newTodo);
        saveTodoItem();
        todoInput.value = '';
    }
}

const checkTodoItem = (event) => {
    const item = event.target.parentNode;
    if(item.classList.contains('is-checked')){
        item.classList.remove('is-checked');
    }
    else{
        item.classList.add('is-checked');
    }
}

const deleteTotoItem = (event) =>{
    const newTodo = todoArr.filter((item) => item !== event.target.parentNode.textContent);
    todoArr = newTodo;
    todoArr.forEach(item => console.log(item));

    saveTodoItem();
    event.target.parentNode.remove();
}

window.addEventListener('load', ()=>{
    const loadedTodoItem = localStorage.getItem('item');
    const savedDay = localStorage.getItem('today');
    const date = new Date();
    const currentDay = date.getDay();
    const obj = loadedTodoItem.split(',');
    if(obj && savedDay == currentDay){
        todoArr = obj;
        obj.forEach(item => {
            paintTodoItem(item);
        });
    }
    else if(obj&&savedDay != currentDay){
        localStorage.clear();
    }
});

window.addEventListener('beforeunload', ()=>{
    const date = new Date();
    const currentDay = date.getDay();
    localStorage.setItem('today', currentDay);
});

todoInputForm.addEventListener('submit', addTodoItem);