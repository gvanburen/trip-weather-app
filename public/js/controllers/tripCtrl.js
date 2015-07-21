angular.module('tripCtrl',[])
    .controller('tripController', ['$scope',function($scope){
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
