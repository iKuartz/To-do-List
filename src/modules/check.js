import { todoList } from "./refs.js"

export default function checkTodo(selectedId) {
    let check = todoList[selectedId].completed
    console.log(todoList[selectedId].completed)
        if (check === true) {
            check = false;
        }else {
            check = true;
        }
    todoList[selectedId].completed = check
console.log(todoList)
}