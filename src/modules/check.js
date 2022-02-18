export default function checkTodo(array, selectedId) {
  let check = array[selectedId - 1].completed;

  if (check === true) {
    check = false;
  } else {
    check = true;
  }
  array[selectedId - 1].completed = check;
  localStorage.setItem('todoList', JSON.stringify(array));
}