export default function addTodo(array) {
  const todoText = document.querySelector('#taskInput').value;

  if (todoText !== '') {
    const todoObject = {
      description: todoText,
      completed: false,
      index: array.length + 1,
    };

    // New element added to the beginning of the list
    array.push(todoObject);
    console.log(array);
    localStorage.setItem('todoList', JSON.stringify(array));
  }
}
