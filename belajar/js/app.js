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
      when('/home', { //done
        templateUrl: 'home.html',
        controller: 'AppListCtr'
      }).
      when('/kategori', { //done
        templateUrl: 'kategori.html'
      }).
      when('/repo', { //done
        templateUrl: 'repo.html',
        controller: 'RepoCtr'
      }).
      when('/kategori/aksesoris', { //done
        templateUrl: 'aksesoris.html',
        controller: 'AppListCtr'
      }).
      when('/kategori/internet', { //done
        templateUrl: 'internet.html',
        controller: 'AppListCtr'
      }).
      when('/kategori/office', { //done
        templateUrl: 'office.html',
        controller: 'AppListCtr'
      }).
      when('/kategori/audio', { //done
        templateUrl: 'audio.html',
        controller: 'AppListCtr'
      }).
      when('/detail/:appId', { //done
        templateUrl: 'app-detail.html',
        controller: 'AppDetailCtr'
      }).
      when('/cari', { //done
        templateUrl: 'cari.html',
        controller: 'AppListCtr'
      }).
      otherwise({
        redirectTo: '/home'
      });
  }
]);