angular.module('tripWolf',[])
    .factory('wolfFactory',['$http', '$log',
        function($http, $log) {
            return {
              wolfWeather: function (tripData){
              $http.post('/wolf', tripData)
                .success(function(data){
                  $log.log(data);
                })
                .error(function(data){
                  $log.log('Error:' + data);
                });
              }
            };
      }]);
