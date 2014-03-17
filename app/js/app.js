'use strict';

/* App Module 
Change
phonecatApp => WarsiApp
phonecatControllers => WarsiCtr
*/

var WarsiApp = angular.module('WarsiApp', [
  'ngRoute',
  'WarsiCtr'
]);

WarsiApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/phones', {
        templateUrl: 'app-list.html',
        controller: 'PhoneListCtrl'
      }).
      when('/phones/:phoneId', {
        templateUrl: 'app-detail.html',
        controller: 'PhoneDetailCtrl'
      }).
      otherwise({
        redirectTo: '/phones'
      });
  }
]);