'use strict';

/* App Module 
Change
phonecatApp => WarsiApp
phonecatControllers => WarsiCtr
*/

var WarsiApp = angular.module('WarsiApp', [
  'ngRoute',
  'ng-breadcrumbs',
  'WarsiCtr'
]);

WarsiApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/home', { //done
        templateUrl: 'home.html',
        controller: 'AppListCtr',
        label: 'Muka'
      }).
      when('/kategori', { //done
        templateUrl: 'kategori.html',
        label: 'Kategori'
      }).
      when('/repo', { //done
        templateUrl: 'repo.html',
        controller: 'RepoCtr',
        label: 'Repo'
      }).
      when('/kategori/aksesoris', { //done
        templateUrl: 'aksesoris.html',
        controller: 'AppListCtr',
        label: 'Aksesoris'
      }).
      when('/kategori/internet', { //done
        templateUrl: 'internet.html',
        controller: 'AppListCtr',
        label: 'Internet'
      }).
      when('/kategori/office', { //done
        templateUrl: 'office.html',
        controller: 'AppListCtr',
        label: 'Office'
      }).
      when('/kategori/audio', { //done
        templateUrl: 'audio.html',
        controller: 'AppListCtr',
        label: 'Audio'
      }).
      // testing 
      when('/kategori/aksesoris/detail/:appId', { //done
        templateUrl: 'app-detail.html',
        controller: 'AppDetailCtr',
        label: 'Detail'
      }).
      when('/kategori/internet/detail/:appId', { //done
        templateUrl: 'app-detail.html',
        controller: 'AppDetailCtr',
        label: 'Detail'
      }).
      when('/kategori/office/detail/:appId', { //done
        templateUrl: 'app-detail.html',
        controller: 'AppDetailCtr',
        label: 'Detail'
      }).
      when('/kategori/audio/detail/:appId', { //done
        templateUrl: 'app-detail.html',
        controller: 'AppDetailCtr',
        label: 'Detail'
      }).
      when('/kategori/detail/:appId', { //done
        templateUrl: 'app-detail.html',
        controller: 'AppDetailCtr',
        label: 'Detail'
      }).
      when('/kategori/:genre/detail/:appId', { //done
        templateUrl: 'app-detail.html',
        controller: 'AppDetailCtr',
        label: '{{app.genre}}/Detail'
      }).
      when('/cari', { //done
        templateUrl: 'cari.html',
        controller: 'AppListCtr',
        label: 'Pencarian'
      }).
      otherwise({
        redirectTo: '/home'
      });
  }
]);