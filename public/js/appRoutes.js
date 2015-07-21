angular.module('appRoutes', [])
.config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: './views/home.html',
        controller: 'homeController'
      })
      .when('/trip', {
        templateUrl: './views/trip.html',
        controller: 'tripController'
      });
    $locationProvider.html5Mode(true);
  }]);
