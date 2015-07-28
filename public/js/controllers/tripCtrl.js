angular.module('tripCtrl',[])
    .controller('tripController', ['$scope', '$http', '$log', 'storageFactory', 'railFactory',
    function($scope, $http, $log, storageFactory, railFactory){
      var wolfData = JSON.parse(storageFactory.getData('wolf'));
      $scope.weather = wolfData;

      var tripData = JSON.parse(storageFactory.getData('trip'));
      $scope.origin = tripData.origin;
      $scope.destination = tripData.destination;
      $scope.toDate = tripData.toDate;
      $scope.fromDate = tripData.fromDate;

      function cleanUp(){
        $log.log('cleaning up');
        storageFactory.clearData('destCode');
        storageFactory.clearData('originCode');
      };

      function getOrigin(){
        $log.log('getting origin');
        railFactory.getOrigin(tripData);
      };

      function getDestination(){
        $log.log('getting destination');
        railFactory.getDestination(tripData);
        window.setTimeout(setFare,1000);
      };

      function setFare(){
        $log.log('setting locations');
        var fareData = {
          'origCode': storageFactory.getData('originCode'),
          'destCode': storageFactory.getData('destCode')
        };
        storageFactory.setData('fareData',JSON.stringify(fareData));
        window.setTimeout(getFare(fareData),1000);
      };

      function getFare(fareData){
        $log.log('getting fare');
        //var fareData = storageFactory.getData('fareData');
        railFactory.getFare(fareData).success(function(data){
          $log.log(data);
          $scope.tickets = data.fares;
        });
      };

      cleanUp();
      getOrigin();
      getDestination();

    }]);
