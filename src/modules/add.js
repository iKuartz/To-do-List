/* eslint-disable import/no-cycle */
import todoList from '../index.js';

export default function addTodo() {
  const todoText = document.querySelector('#taskInput').value;

  if (todoText !== '') {
    const todoObject = {
      description: todoText,
      completed: false,
      index: todoList.length,
    };

    // New element added to the beginning of the list
    todoList.push(todoObject);

    localStorage.setItem('todoList', JSON.stringify(todoList));
  }
}
