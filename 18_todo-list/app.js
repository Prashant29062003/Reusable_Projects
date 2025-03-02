const addTodo = document.querySelector('.add-todo');
const inputTodo = document.querySelector('#user-todo');
const todoList = document.querySelector('.todo-list');
addTodo.addEventListener("click",(e)=>{
    const todoItem = document.createElement("li");
    const todoItemText = document.createElement("p");
    const todoItemDelete = document.createElement("span");
    const todoItemDeleteIcon = document.createElement("i");

    todoItemText.classList.add("todo-text")
    todoItemDelete.classList.add("delete-item");
    todoItemDeleteIcon.classList.add("fa-regular","fa-circle-xmark");

    createTodoItem()

    todoItemDelete.appendChild(todoItemDeleteIcon);
    todoItem.appendChild(todoItemText);
    todoItem.appendChild(todoItemDelete);
    todoList.appendChild(todoItem);
})

const deleteTodoItem = document.querySelector(".delete-item");
const textTodoItem = document.querySelector(".todo-text");
deleteTodoItem.addEventListener("click",(e)=>{

})