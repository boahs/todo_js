var myName = 'boahs'
function sayName() {
    console.log(myName);
}

var todoList = {
    todos: [],
    displayTodos: function() {
        if (this.todos.length === 0) {
        console.log('Your todo list is empty!');
        } else {
        console.log('my todos:');
        for (var i = 0; i < this.todo; i++) {
            this.todos[i].todoText;
        }
                }
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
    },

    toggleCompleted: function(position) {
        var todo = this.todos[position];
        todo.completed = !todo.completed;
        this.displayTodos();
    }
    
};




