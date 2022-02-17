import { todoList } from "../index.js"

export default function checkTodo(selectedId) {
    let check = todoList[selectedId].completed
    console.log(todoList[selectedId].completed)
        if (check === true) {
            check = false;
        }else {
            check = true;
        }
    todoList[selectedId].completed = check

    localStorage.setItem('todoList', JSON.stringify(todoList));

}