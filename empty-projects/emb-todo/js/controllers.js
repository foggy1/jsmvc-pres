Todos.TodoController = Ember.ObjectController.extend({
    actions: {
        removeTodo: function () {
            var todo = this.get('model');
            todo.deleteRecord();
            todo.save();
        }
    }
});

Todos.TodosController = Ember.ArrayController.extend({
    actions: {
        
    }
});