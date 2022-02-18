export default function checkTodo(array, selectedId) {
  let check = array[selectedId].completed;

  if (check === true) {
    check = false;
  } else {
    check = true;
  }
  array[selectedId].completed = check;
  console.log(array);
  localStorage.setItem('todoList', JSON.stringify(array));
}