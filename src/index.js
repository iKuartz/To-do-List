import "./template.css";

// Initialize list array

import { todoList } from "./modules/refs.js"

import addTodo from "./modules/add.js"
import deleteTodo from "./modules/delete.js"

const list = document.querySelector('.todo-list')

const createList = () => {
  list.innerHTML=''
  for (let i = 0; i < todoList.length; i += 1) {
  list.innerHTML+=`<li><input type="checkbox"><p>${todoList[i].description}<p><i class="fa fa-ellipsis-v" aria-hidden="true" ></i></li>`
  
}return list};

document.querySelector("#taskInput").addEventListener("keydown", function (e) {
  if (e.keyCode == 13) {
    addTodo()
    createList();
  }
});

createList();
 
document.querySelector(".delete-tasks").addEventListener("click"); {
  deleteTodo()
  createList();
  console.log(todoList)}
    ;
  