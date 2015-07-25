angular.module('tripWolf',[])
    .factory('wolfFactory',['$http', '$log', '$q',
        function($http, $log, $q) {
            var deferred = $q.defer();
            return {
              wolfWeather: function (tripData){
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
