angular.module('tripCtrl',[])
    .controller('tripController', ['$scope', '$http', '$log', 'storageFactory', 'railFactory',
    function($scope, $http, $log, storageFactory, railFactory){
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
        $log.log('first');
        railFactory.getOrigin(tripData);
      };

      function getDestination(){
        $log.log('second');
        railFactory.getDestination(tripData);
        window.setTimeout(setFare,1000);
      };

      function setFare(){
        $log.log('third');
        var fareData = {
          'origCode': storageFactory.getData('originCode'),
          'destCode': storageFactory.getData('destCode')
        };
        storageFactory.setData('fareData',JSON.stringify(fareData));
        window.setTimeout(getFare,1000);
      };

      function getFare(){
        var fareData = JSON.parse(storageFactory.getData('fareData'));
        $scope.origCode = fareData.origCode;
        $scope.destCode = fareData.destCode;
        railFactory.getFare(fareData);
      };

      cleanUp();
      getOrigin();
      getDestination();



      // test data
      var apiData  = {
        "orig": {
            "nlc": "8487",
            "crs": "LDS",
            "name": "LEEDS",
            "longname": "LEEDS",
            "ticketname": "LEEDS",
            "code": "LDS"
        },
        "dest": {
            "nlc": "3115",
            "crs": "OXF",
            "name": "OXFORD",
            "longname": "OXFORD",
            "ticketname": "OXFORD",
            "code": "OXF"
        },
        "fares": [
            {
                "adult": {
                    "status": {
                        "code": "000",
                        "name": "ADULT",
                        "ticket_code": ""
                    },
                    "fare": 68280
                }
            },
            {
                "adult": {
                    "status": {
                        "code": "000",
                        "name": "ADULT",
                        "ticket_code": ""
                    },
                    "fare": 42940
                }
            },
            {
                "adult": {
                    "status": {
                        "code": "000",
                        "name": "ADULT",
                        "ticket_code": ""
                    },
                    "fare": 41000
                }
            },
            {
                "adult": {
                    "status": {
                        "code": "000",
                        "name": "ADULT",
                        "ticket_code": ""
                    },
                    "fare": 24530
                }
            },

        ]
    };
      $scope.data = apiData.fares;
    }]);
