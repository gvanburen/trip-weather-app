angular.module('homeCtrl',[])
	.controller('homeController', ['$scope', '$location', '$log','storageFactory', 'wolfFactory',
	function($scope, $location, $log, storageFactory, wolfFactory){
		$scope.gatherData = function(){
			var tripData = {
				'origin': $scope.origin,
				'destination': $scope.destination,
				'toDate': $scope.toDate,
				'fromDate': $scope.fromDate
			};
			storageFactory.setData('trip', JSON.stringify(tripData));
			// test = JSON.parse(storageFactory.getData('trip'));
			// $log.log(test.destination);

			wolfFactory.wolfWeather(tripData).then(function(data){
					$log.log(data);
					storageFactory.setData('wolf', JSON.stringify(data));
					$location.path('/trip');
				});

		};
	}]);
