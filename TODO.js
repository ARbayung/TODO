document.addEventListener('DOMContentLoaded', () => {
    const inputField = document.getElementById('todo-input');
    const addButton = document.getElementById('add-btn');
    const todoList = document.getElementById('todo-list');

    //add new todo

    addButton.addEventListener('click', () => {
        const taskText = inputField.value.trim();

        if(taskText !== '') {
            addTodoItem(taskText);
            inputField.value = "";
        }
    });

    function addTodoItem(text){
        const ListItem = document.createElement('li');
        ListItem.classList.add('todo-item');

        const taskSpan = document.createElement('span');
        taskSpan.textContent = text;

        const buttonContainer = document.createElement('div');
        buttonContainer.classList.add('button-container');

        const completeButton = document.createElement('button');
        completeButton.textContent = "Complete";
        completeButton.classList.add('todo-complete');

        buttonContainer.addEventListener('click', () => {
            ListItem.classList.toggle('todo-completed');
        })

        const deleteButton = document.createElement('button');
        deleteButton.textContent = "Delete";
        deleteButton.classList.add('todo-delete');
        
        deleteButton.addEventListener('click', () => {
            ListItem.remove();
        })


        ListItem.appendChild(taskSpan);
        buttonContainer.appendChild(deleteButton);
        buttonContainer.appendChild(completeButton);
        ListItem.appendChild(buttonContainer);
        
        todoList.appendChild(ListItem);
    }
});