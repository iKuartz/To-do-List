export default function deleteOne(array, selectedId) {
  array.splice(selectedId - 1, 1);
  for (let i = 0; i < array.length; i += 1) {
    array[i].index = i + 1;
  }
  // descriptive comment
  localStorage.setItem('todoList', JSON.stringify(array));
}