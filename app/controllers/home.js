angular.module('MyApp')
  .controller('HomeCtrl', function($scope, $location) {
   $scope.goToCreate = function(){
    $location.path('/show');
   };
  });
