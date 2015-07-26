angular.module('tripRail',[])
    .factory('railFactory',['$http', '$log', '$q','storageFactory',
        function($http, $log, $q, storageFactory) {
            var deferred = $q.defer();
            return {
              getOrigin: function (tripData){
                $http.post('/origin', tripData)
                  .success(function(orig){
                    storageFactory.setData('originCode', orig[0].code);
                    deferred.resolve(orig);
                  })
                  .error(function(e){
                    $log.log('Error: ' + e);
                    deferred.reject(e);
                  });
                return deferred.promise;
            },
              getDestination: function(tripData){
                $http.post('/destination', tripData)
                  .success(function(dest){
                    storageFactory.setData('destCode', dest[0].code);
                    deferred.resolve(dest);
                  })
                  .error(function(e){
                    $log.log('Error: ' + e);
                    deferred.reject(e);
                  });
                return deferred.promise;
            },
              getFare: function(fareData){
                $http.post('/fare', fareData)
                  .success(function(data){
                    deferred.resolve(data);
                  })
                  .error(function(e){
                    $log.log('Error: ' + e);
                    deferred.reject(e);
                  });
                  return deferred.promise;
              }
            };
      }]);
