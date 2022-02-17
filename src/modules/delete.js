export default function deleteTodo(array) {
    
    array = array.filter(obj => {
        return obj.completed === false;
    });

    for (let i = 0; i < array.length; i += 1) {
        array[i].index = i
        

};
    
    localStorage.setItem('todoList', JSON.stringify(array));

    return array
}
