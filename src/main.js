var app = angular.module("agendaApp", ['ui.bootstrap','ngRoute']);

app.config(['$routeProvider'],
  function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "index.html"
    })
    .when("/progress", {
        templateUrl : "templates/progress.html"
    })
});


app.controller("agendaController", function($scope) {
  $scope.toDo = [
    {activity : "Arrumar a casa"},
    {activity : "Fazer atividade de OAC"},
    {activity : "Pagar contas"}
  ];
  $scope.doing = [];
  $scope.done = [];

  $scope.addTask = function () {
    $scope.toDo.push({activity: $scope.newTask});
    $scope.newTask = '';
  }

  $scope.move = function (task,from,to) {
    if (from == "do") {
      var index = $scope.toDo.indexOf(task);
      $scope.toDo.splice(index,1);
      $scope.doing.push(task);
    }

    else if (from == "doing"){
      var index = $scope.doing.indexOf(task);
      $scope.doing.splice(index,1);

      if (to == "done") {
        $scope.done.push(task);
      }
      else {
        $scope.toDo.push(task);
      }
    }

    else {
      var index = $scope.done.indexOf(task);
      $scope.done.splice(index,1);
      $scope.doing.push(task);
    }
  }

  $scope.remove = function(task,table) {
    var index = table.indexOf(task);
    table.splice(task,1);
  } 
}); 