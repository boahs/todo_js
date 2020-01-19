var todos = ['item 1', 'item 2', 'item3', 'item4', 'item 5'];


    function displayTodos() {
        console.log('My Todos:', todos);

    }

    function addTodos(todos) {
        todos.push(todos);
        displayTodos();
    }

    function changeTodos(position, newValue) {
        todos[position] = newValue;
    }



    addTodos('')
    displayTodos()