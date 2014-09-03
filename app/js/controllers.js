'use strict';

/* Controllers */

var phonecatControllers = angular.module('phonecatControllers', []);

phonecatControllers.controller('PhoneListCtrl', ['$scope', '$http',
  function($scope, $http) {
    $http.get('http://www.malioboro.org/?json=get_category_posts&slug=malioboro&count=10&status=publish').success(function(data) {
      $scope.phones = data;
    });

    // jsonp
    // http://blog.novanet.no/angularjs-with-jsonp-and-how-i-get-to-work-on-time/

    $scope.orderProp = 'age';
  }]);

phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', '$http',
  function($scope, $routeParams, $http) {
    $http.get('phones/' + $routeParams.phoneId + '.json').success(function(data) {
      $scope.phone = data;
    });
  }]);
