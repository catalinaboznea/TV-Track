angular.module('MyApp')
  .controller('HomeCtrl', function ($scope, $location, Show) {
    $scope.goToCreate = function () {
      $location.path('/show');
    };

    $scope.deleteShow = function (show) {
      Show.delete(show.id).then(function (response) {
        if (response) {
          init();
        }
      });
    };

    init();

    function init() {
      Show.getAll().then(function (response) {
        if (response) {
          $scope.shows = response.data.shows.filter(function (elem) {
            return elem.list === 'watching';
          });
        }
      })
    }
  });
