angular.module('tripWolf',[])
    .factory('wolfFactory',['$http', '$log', '$q',
        function($http, $log, $q) {
            return {
              wolfWeather: function (tripData){
              var deferred = $q.defer();
              $http.post('/wolf', tripData)
                .success(function(data){
                  deferred.resolve(data);
                  $log.log(data);
                })
                .error(function(e){
                  $log.log('Error: ' + e);
                  deferred.reject(e);
                });
              return deferred.promise;
              }
            };
      }]);
