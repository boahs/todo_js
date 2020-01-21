var myName = 'boahs'
function sayName() {
    console.log(myName);
}

var todoList = {
    todos: [],
    displayTodos: function() {
        console.log('my todos', this.todos);
    },

    addTodo: function(todoText) {
        this.todos.push({
            todoText: todoText,
            completed: false
        });
        this.displayTodos();
    },

    changeTodo: function(position, todoText) {
        this.todos[position].todoText = todoText;
        this.displayTodos();

    },

    deleteTodo: function(position) {
        this.todos.splice(position, 1);
        this.displayTodos();
    }
    
};




