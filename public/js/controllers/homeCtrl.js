angular.module('homeCtrl',[])
	.controller('homeController', ['$scope', '$log','storageFactory', function($scope, $log, storageFactory){
		$scope.gatherData = function(){
			var tripData = {
				'destination': $scope.destination,
				'toDate': $scope.toDate,
				'fromDate': $scope.fromDate
			};
			storageFactory.setData('trip', JSON.stringify(tripData));
			test = JSON.parse(storageFactory.getData('trip'));
			$log.log(test.destination);
		};
	}]);
