var todos = ['item 1', 'item 2', 'item3', 'item4', 'item 5'];
var myName = 'Boahs';



    function sayName() {
        console.log(myName);
    }

    function displayTodos() {
        console.log('My Todos:', todos);
    }

    function addTodos(todo) {
        todos.push(todo);
        displayTodos();
    }

    function changeTodos(position, newValue) {
        todos[position] = newValue;
    }

    function deleteTodos(position) {
        todos.splice(position, 1);
    }



    addTodos('')
    displayTodos()