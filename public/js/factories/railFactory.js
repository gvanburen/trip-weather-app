angular.module('tripRail',[])
    .factory('railFactory',['$http', '$log', '$q',
        function($http, $log, $q) {
            var deferred = $q.defer();
            return {
              getOrigin: function (tripData){
                $log.log('getting origin');
                $http.post('/origin', tripData)
                  .success(function(data){
                    deferred.resolve(data);
                    $log.log(data);
                  })
                  .error(function(e){
                    $log.log('Error: ' + e);
                    deferred.reject(e);
                  });
                return deferred.promise;
            },
              getDestination: function(tripData){
                $log.log('getting destination');
                $http.post('/destination', tripData)
                  .success(function(data){
                    deferred.resolve(data);
                    $log.log(data);
                  })
                  .error(function(e){
                    $log.log('Error: ' + e);
                    deferred.reject(e);
                  });
                return deferred.promise;
            }/*,
              getFare: function(){
                $http.post('/fare', )
                  .success(function(data){
                    deferred.resolve(data);
                    $log.log(data);
                  })
                  .error(function(e){
                    $log.log('Error: ' + e);
                    deferred.reject(e);
                  });
                  return deferred.promise;
              }*/
            };


            //   var tripOrigin = tripData.origin;
            //   var tripDest = tripData.destination;
            //   $http({
            //     method: 'GET',
            //     url: 'http://api.brfares.com/ac_loc?term=' + tripOrigin
            //   }).then(function(data){
            //     var fareOrigin = data[0].code;
            //     $http({
            //       method: 'GET',
            //       url: 'http://api.brfares.com/ac_loc?term=' + tripDestination
            //     }).then(function(data){
            //       var fareDestination = data[0].code;
            //       $http({
            //         method: 'GET',
            //         url: 'http://api.brfares.com/querysimple?orig=' + fareOrigin + '&dest=' + fareDestination
            //       }).then(function(data){
            //
            //       })
            //     })
            //   })
            //   }).post('/wolf', tripData)
            //     .success(function(data){
            //       deferred.resolve(data);
            //       $log.log(data);
            //     })
            //     .error(function(e){
            //       $log.log('Error: ' + e);
            //       deferred.reject(e);
            //     });
            //   return deferred.promise;
            //   }
            // };
      }]);
