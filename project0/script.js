const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')
const input_check = document.getElementById('myInput')

function newTodo() {
    const task = input_check.value
    if(!task){
        alert("No task selected");}
    else {
        console.log('succes');
    }
    

    
}

