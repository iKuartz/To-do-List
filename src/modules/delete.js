import { todoList } from "./refs.js"
export default function deleteTodo() {
    todoList = todoList.filter(function (obj) {
        return obj.completed !== true;
    })
}
