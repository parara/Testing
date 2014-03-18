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
      when('/home', {
        templateUrl: 'home.html',
        controller: 'PhoneListCtrl'
      }).
      when('/home/kategori', {
        templateUrl: 'app-list.html',
        controller: 'PhoneListCtrl'
      }).
      when('/home/kategori/:appId', {
        templateUrl: 'app-detail.html',
        controller: 'PhoneDetailCtrl'
      }).
      otherwise({
        redirectTo: '/home'
      });
  }
]);