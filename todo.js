var myName = 'boahs'
function sayName() {
    console.log(myName);
}

var todoList = {
    todos: [],
    displaytodos: function() {
        console.log('my todos', this.todos)
    },

    addTodo: function(todoText) {
        this.todos.push({
            todoText: todoText,
            completed: false
        });
        this.displaytodos();
    },

    changeTodo: function(position, newValue){
        this.todos[position] = newValue;
        this.displaytodos();

    },

    deleteTodo: function(position){
        this.todos.splice(position, 1);
        this.displaytodos();
    }
    
};




