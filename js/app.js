angular
  .module('shopCart', [
    'ngRoute',
    'customFilters'
  ])
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '../views/main.html',
        controller: 'MainCtrl'
      })
      .when('/cart', {
        templateUrl: '../views/cart.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
