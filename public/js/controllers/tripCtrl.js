angular.module('tripCtrl',[])
    .controller('tripController', ['$scope', '$http','$log','storageFactory', 'railFactory',
    function($scope, $http, $log, storageFactory, railFactory){
      var tripData = JSON.parse(storageFactory.getData('trip'));

      $scope.origin = tripData.origin;
      $scope.destination = tripData.destination;
      $scope.toDate = tripData.toDate;
      $scope.fromDate = tripData.fromDate;

      railFactory.getOrigin(tripData).then(function(data){
        $log.log(data[0]);
        //storageFactory.setData('originCode', data[0].code);
      });
      railFactory.getDestination(tripData).then(function(data){
        $log.log(data[0]);
      });

      // call railAPI with tripInformation parameters
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
