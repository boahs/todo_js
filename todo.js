var todoList = {
    todos: ['item 1', 'item 2', 'item3', 'item4', 'item 5'],
    displaytodos: function() {
        console.log('my todos', this.todos)
    }
};

var myName = 'Boahs';



    function sayName() {
        console.log(myName);
    }

    function addTodos(todos) {
        todos.push(todos);
    }

    function changeTodos(position, newValue) {
        todos[position] = newValue;
    }

    function deleteTodos(position) {
        todos.splice(position, 1);
    }