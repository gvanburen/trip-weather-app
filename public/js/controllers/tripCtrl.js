angular.module('tripCtrl',[])
    .controller('tripController', ['$scope', '$http', '$log', 'storageFactory', 'railFactory',
    function($scope, $http, $log, storageFactory, railFactory){
      $scope.loading = true;

      var tripData = JSON.parse(storageFactory.getData('trip'));
        $scope.origin = tripData.origin;
        $scope.destination = tripData.destination;
        $scope.toDate = tripData.toDate;
        $scope.fromDate = tripData.fromDate;

      var wolfData = JSON.parse(storageFactory.getData('wolf'));
      $log.log(wolfData);

      function filtered (data){
        for(i=0;i<data.length;i++){
          if(data[i].title == "Temperature history"){
            $log.log('i found it!');
            var temp = data[i].subpods[0].value;
            $scope.tempImage = data[i].subpods[0].image;
            $scope.tempFound = true;
            $scope.noTemp = false;
          } else {
            $scope.noTemp = true;
          }
        }
        textParser(temp);
      };
      function textParser(text){
        $log.log(text);
  			text = text.match(/([0-9])+( °F| °C)\s+/g);
  			textArray = text.toString();
  			temp = textArray.match(/([0-9])\w+/g);
  			tempHigh = temp.slice(1,2);
  			tempHigh = tempHigh.toString();
  			tempLow = temp.slice(2,3);
  			tempLow = tempLow.toString();
  			$scope.tempHigh = tempHigh;
  			$scope.tempLow = tempLow;
      };

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
          $scope.tickets = data.fares;
          $scope.loading = false;
          $scope.fareFound = true;
          // $log.log($scope.tickets);
        }).error(function(err){
          $scope.noFare = true;
          $scope.loading = false;
        });
      };

      cleanUp();
      getOrigin();
      getDestination();
      filtered(wolfData);

    }]);
