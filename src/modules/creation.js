import checkTodo from './check.js';

const list = document.querySelector('.todo-list');

export default function createList(array) {
  list.innerHTML = '';
  for (let i = 0; i < array.length; i += 1) {
    list.innerHTML += `<li><input class="checkbox" data-id="${array[i].index}" type="checkbox"><input class= "taskEdit" type="text" value ="${array[i].description}"><i class="fa fa-ellipsis-v" aria-hidden="true" ></i></li>`;
  }

  const elements = document.getElementsByClassName('checkbox');

  for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', (e) => {
      const selectedId = e.target.getAttribute('data-id');
      checkTodo(array, selectedId);
    });
  } return list;
}