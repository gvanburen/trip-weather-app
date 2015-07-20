angular.module('trather',['ngRoute'])
	.config(['$routeProvider', function($routeProvider){
		$routeProvider
			.when('/', {
				templateUrl: './app/components/home/home.html',
				controller: 'homeCtrl'
			})
			.when("/trip", {
				templateUrl: './app/components/information/trip.html',
				controller: 'tripCtrl'
			})
			.otherwise({
				templateUrl: './app/components/error/error.html',
				controller: 'errorCtrl'
			})
	}]);
