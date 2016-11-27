ngTodo.controller('NgTodoCtrl', function NgTodoCtrl($scope) {
    $scope.todos = [
        {val: "A new cool thing", completed: false},
        {val: "An old cool thing", completed: false},
        {val: "Not a cool thing", completed: true},
        {val: "Sort of a cool thing", completed: false},
        {val: "A new *meh* thing", completed: true}
    ];

    $scope.addNewTask = function () {
        $scope.todos.unshift({completed: false, val: $scope.newTask});
        $scope.newTask = '';
    };

    $scope.clearCompleted = function () {
        $scope.todos = $scope.todos.filter(todo => !todo.completed);
    };

    $scope.removeTodo = function (index) {
        $scope.todos.splice(index, 1);
    };

});