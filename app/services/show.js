angular.module('MyApp')
  .factory('Show', function($http) {
    return {
      add: function(data) {
        return $http.post('/show', data);
      }
    };
  });