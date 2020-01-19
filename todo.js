var todos = ['item 1', 'item 2', 'item3', 'item4', 'item 5'];


    function displayTodos() {
        console.log('My Todos:', todos);

    }

    displayTodos()

    function addTodo(todos) {
        todos.push(todos);
        displayTodos();
    }