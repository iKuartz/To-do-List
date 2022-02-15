import _ from 'lodash';
import "./template.css";

// Initialize list array

const todoList = [
  {
    description: '',
    completed: false,
    index: 0,
  },]

class Todo_List {
  constructor(li) {
    this.ulElement = li;
  }

  addTask() {
    const todoInput = document.querySelector('#taskInput').value;
    const taskObject = {
      description: todoInput,
      completed: false,
      index: todoList.length,
    }
  
    todoList.unshift(todoObject);
    this.generateHTML();
    document.querySelector("#taskInput").value = '';

  }

  check(a) {
    const selectedTodoIndex =
      todoList.findIndex((item) => item.index == a);
    condition ? exprIfTrue : exprIfFalse;
    this.generateHTML()
  }

  deleteElement(b) {
  
  }

  dragNdrop(c) {

  }

  generateHTML(details) {
    this.ulElement.innerHTML = "";

    todoList.forEach((object_item) => {

      const liElement = document.createElement("li");
      const delBtn = document.createElement("i");

      liElement.innerText = object_item.description;
      liElement.setAttribute("data-id", object_item.index);

      delBtn.setAttribute("data-id", object_item.index);
      delBtn.classList.add("far", "fa-trash-alt")

      liElement.appendChild(delBtn);

      delBtn.addEventListener("click", function (e) {
        const deleteId = e.target.getAttribute("data - id");
        todoList.deleteElement(deleteId);
      })

      liElement.addEventListener("click", function (e) {
        const selectedId = e.target.getAttribute("data - id");
        todoList.check(selectedId);
      })

      if (object_item.completed) {
        liElement.classList.add("checked");
      }

      this.ulElement.appendChild(liElement);

    })
  }
}

  const listElements = document.querySelector('.to-do-list');

  myTodoList = new Todo_List(listSection);
document.querySelector("#taskInput").addEventListener("click"), function() {
    myTodoList.addTask()
  };

