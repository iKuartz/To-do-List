import checkTodo from './check.js';
import deleteOne from './deleteone.js';

const list = document.querySelector('.todo-list');

export default function createList(array = []) {
  list.innerHTML = '';
  for (let i = 0; i < array.length; i += 1) {
    list.innerHTML += `<li><input class="checkbox" data-id="${array[i].index}" type="checkbox"><input data-id="${array[i].index}" class= "taskEdit" type="text" value ="${array[i].description}"><button data-id="${array[i].index}"class="delete-one">Done!</button><i class="fa fa-ellipsis-v" aria-hidden="true" ></i></li>`;
  }
  const elements = document.getElementsByClassName('checkbox');
  const edits = document.getElementsByClassName('taskEdit');
  const deleteBtn = document.getElementsByClassName('delete-one');

  /* eslint-disable no-plusplus */
  for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', (e) => {
      const selectedId = e.target.getAttribute('data-id');
      checkTodo(array, selectedId);
    });
    edits[i].addEventListener('keyup', (e) => {
      const selectedId = e.target.getAttribute('data-id');
      array[selectedId - 1].description = e.target.value;
      localStorage.setItem('todoList', JSON.stringify(array));
    });
    deleteBtn[i].addEventListener('click', (e) => {
      const selectedId = e.target.getAttribute('data-id');
      deleteOne(array, selectedId);
      createList(array);
    });
  } return list;
}