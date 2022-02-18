export default function addTodo(array) {
  const todoText = document.querySelector('#taskInput').value;

  for (let i = 0; i < array.length; i += 1) {
    array[i].index = i + 1;
  }

  if (todoText !== '') {
    const todoObject = {
      description: todoText,
      completed: false,
      index: array.length + 1,
    };

    // New element added to the beginning of the list
    array.push(todoObject);
    localStorage.setItem('todoList', JSON.stringify(array));
  }
}
