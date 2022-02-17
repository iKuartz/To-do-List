import "./template.css";

// Initialize list array
let todoList = []

export default { todoList };

import addTodo from "./modules/add.js"
import checkTodo from "./modules/check.js"
import deleteTodo from "./modules/delete.js"

const list = document.querySelector('.todo-list')

const createList = () => {
  list.innerHTML=''
  for (let i = 0; i < todoList.length; i += 1) {
  list.innerHTML+=`<li><input class="checkbox" data-id="${todoList[i].index}" type="checkbox"><p>${todoList[i].description}<p><i class="fa fa-ellipsis-v" aria-hidden="true" ></i></li>`
  }
  
  var elements = document.getElementsByClassName("checkbox");

    for (var i = 0; i < elements.length; i=i+1) {
    elements[i].addEventListener('click', function (e) {
  const selectedId = e.target.getAttribute("data-id");
      checkTodo(selectedId);
    });

  } return list
};

const initList = JSON.parse(localStorage.getItem('todoList'));
if (initList !== '') {
  todoList = initList
}

createList();

document.querySelector("#taskInput").addEventListener("keydown", function (e) {
  if (e.keyCode === 13) {
    addTodo()
    createList()
  }
});

 
document.querySelector(".delete-tasks").addEventListener("click", function (a) {
  todoList = deleteTodo(todoList)
  createList()
  console.log(todoList)
  }
 );
;
