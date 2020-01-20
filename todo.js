var todoList = {
    todos: ['item 1', 'item 2', 'item3', 'item4', 'item 5'],
    displaytodos: function() {
        console.log('my todos', this.todos)
    },

    addTodo: function(todo) {
        this.todos.push(todo)
        this.displaytodos();
    },
    changeTodo: function(position, newValue){
        this.todos[position] = newValue;
        this.displaytodos();

    }
    
};

var myName = 'Boahs';



    function sayName() {
        console.log(myName);
    }

    function changeTodos(position, newValue) {
        todos[position] = newValue;
    }

    function deleteTodos(position) {
        todos.splice(position, 1);
    }