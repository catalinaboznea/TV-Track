angular.module('MyApp')
  .factory('Show', function($http) {
    return {
      add: function(data) {
        return $http.post('/show', data);
      },
      getAll: function(){
        return $http.get('/shows');
      },
      delete: function(data){
        var p = {
          params: {
            id: data
          }
        };
        return $http.delete('/show', p);
      }
    };
  });