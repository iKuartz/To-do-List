import "./template.css";

// Initialize list array

const todoList = [
  {
    description: 'Wash Car',
    completed: false,
    index: 0,
  },
  {
    description: 'Clean Airplane',
    completed: false,
    index: 1,
  },
  {
    description: 'Tiden Boat',
    completed: false,
    index: 2,
  },
  {
    description: 'Organize Motorcycle',
    completed: false,
    index: 3,
  },
  {
    description: 'Fix House',
    completed: false,
    index: 4,
  },
]

const list = document.querySelector('.todo-list')

const createList = () => {
  todoList.forEach((e) => {
    <li><input type='checkbox'><p>{ }</p><i></i></li> 
  });
}
