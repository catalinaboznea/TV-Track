angular.module('MyApp')
    .controller('ShowCtrl', function ($scope, $location, Show) {
        $scope.saveShow = function (show) {
            Show.add(show).then(function(response){
                $location.path('/');
            });
        };

    });
