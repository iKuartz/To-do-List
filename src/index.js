import './template.css';

import addTodo from './modules/add.js';
import deleteTodo from './modules/deleteall.js';
import createList from './modules/creation.js';
import { isNull } from 'lodash';

let todoList = [];

const initList = JSON.parse(localStorage.getItem('todoList'));
if (initList !== '' && initList !== isNull) {
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
