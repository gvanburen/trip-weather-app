angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: './views/home_old.html',
        controller: 'MainController'
      });
    $locationProvider.html5Mode(true);
  }]);
