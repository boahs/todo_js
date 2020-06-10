let myName = 'boahs'
function sayName() {
    console.log(myName);
}

let todoList = {
    todos: [],
    displayTodos: function() {
        if (this.todos.length === 0) {
        console.log('Your todo list is empty!');
        } else {
        console.log('my todos:');
        for (let i = 0; i < this.todo; i++) {
        console.log(this.todos[i].todoText);
        if (this.todos[i].completed === true){
            console.log('(x)', this.todos[i].todoText);
        } 
        if (this.todos[j].notcompleted === true) {
            console.log('(not complete)', this.todos[j].todoText)
        }  else{
            console.log('()', this.todos[i].todoText);
         }
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
        let todo = this.todos[position];
        todo.completed = !todo.completed;
        this.displayTodos();
    },
    
    toggleAll: function() {
        let totalTodos = this.todos.length;
        let completedTodos = 0;

        for (let i = 0; i < totalTodos; i++) {
            if (this.todos[i].completed === true){
                completedTodos++;
            }
        }
            if (completedTodos === totalTodos) {
            for (let i = 0; i < totalTodos; i++){
                this.todos[i].completed = false;
            }
        }   else {
            for (let i =0; i < totalTodos; i++){
                this.todos[i].completed === true;
            }

        }
        this.displayTodos();
    }
};




