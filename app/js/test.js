var sampleApp = angular.module('sampleApp', ["ngRoute","ui.bootstrap"]);

sampleApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/ShowOrder/:orderId', {
	templateUrl: 'show_order',
	controller: 'ShowOrderController'
      });
}]);

sampleApp.controller('ShowOrderController', function($scope, $routeParams) {
	$scope.order_id = $routeParams.orderId;
	$scope.message = 'This is Show orders screen';

});

function PostDetailController($scope, $routeParams, $http) {
    $http.get('json/posts.json').success(function(data){
        angular.forEach(data, function(item) {
          if (item.id == $routeParams.postId) 
            $scope.photo = item;
        });
    });
};

phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', '$http',
  function($scope, $routeParams, $http) {
    $http.get('phones/' + $routeParams.phoneId + '.json').success(function(data) {
      $scope.phone = data;
    });
  }]);

var values = {name: 'misko', gender: 'male'};
var log = [];
angular.forEach(values, function(value, key){
this.push(key + ': ' + value);
}, log);
expect(log).toEqual(['name: misko', 'gender: male']);