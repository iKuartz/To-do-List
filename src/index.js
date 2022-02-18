import './template.css';

import addTodo from './modules/add.js';
import deleteTodo from './modules/delete.js';
import createList from './modules/creation.js';

let todoList = [];

const initList = JSON.parse(localStorage.getItem('todoList'));
if (initList !== '') {
  createList(initList);
} else {
  createList(todoList);
}

document.querySelector('#taskInput').addEventListener('keydown', (e) => {
  if (e.keyCode === 13) {
    addTodo(todoList);
    createList(todoList);
  }
});

document.querySelector('.delete-tasks').addEventListener('click', () => {
  todoList = deleteTodo(todoList);
  createList(todoList);
});
