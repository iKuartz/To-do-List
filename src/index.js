import _ from 'lodash';
import "./template.css";

// Initialize list array

let todoList = [
  {
    description: '',
    completed: false,
    index: 0,
  },]

class Todo_List {
  constructor(li)
    this.ulElement = li;
}

function addTask() {
  const todoInput = document.querySelector('#taskInput').value;
  const taskObject = {
    description: todoInput,
    completed: false,
    index: todoList.length,
    }
}

function check(a) {

}

function deleteElenent(b) {
  
}

function dragNdrop(c) {

}

function generateHTML(details) {
  const template = `
  <li>${description}</li>
  `;
  return template;
}

const listElements = document.querySelector('.to-do-list');

myTodoList = new Todo_List(listSection);
document.querySelector("#taskInput").addEventListener("click"), function () {
  myTodoList.addTask()
};

