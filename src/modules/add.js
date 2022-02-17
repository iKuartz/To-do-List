import { todoList } from "./refs.js"
export default function addTodo() {
  const todoText = document.querySelector("#taskInput").value;

  if (todoText === "") {
    alert("Please enter a task");
  } else {
    const todoObject = {
      description: todoText,
      completed: false,
      index: todoList.length,
    };

    //New element added to the beginning of the list
    todoList.push(todoObject);
  }
}