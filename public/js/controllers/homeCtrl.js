angular.module('homeCtrl',[])
	.controller('homeController', ['$scope', '$location', '$anchorScroll', '$log','storageFactory', 'wolfFactory',
	function($scope, $location, $anchorScroll, $log, storageFactory, wolfFactory){
		$scope.scrollTo = function(id) {
			$location.hash(id);
			$anchorScroll();
		};
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
