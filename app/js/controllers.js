'use strict';

/* Controllers */

var WarsiCtr = angular.module('WarsiCtr', []);

WarsiCtr.factory('DaftarApp', function() {
  return {
    name :[
    {
        "age": 0, 
        "id": "motorola-xoom-with-wi-fi", 
        "imageUrl": "img/phones/motorola-xoom-with-wi-fi.0.jpg", 
        "name": "Motorola XOOM\u2122 with Wi-Fi", 
        "snippet": "The Next, Next Generation\r\n\r\nExperience the future with Motorola XOOM with Wi-Fi, the world's first tablet powered by Android 3.0 (Honeycomb).",
        "konten": {
          "description": "Motorola XOOM with Wi-Fi has a super-powerful dual-core processor and Android\u2122 3.0 (Honeycomb) \u2014 the Android platform designed specifically for tablets. With its 10.1-inch HD widescreen display, you\u2019ll enjoy HD video in a thin, light, powerful and upgradeable tablet.",  
           "images": [
              "img/phones/motorola-xoom-with-wi-fi.0.jpg", 
              "img/phones/motorola-xoom-with-wi-fi.1.jpg", 
              "img/phones/motorola-xoom-with-wi-fi.2.jpg", 
              "img/phones/motorola-xoom-with-wi-fi.3.jpg", 
              "img/phones/motorola-xoom-with-wi-fi.4.jpg", 
              "img/phones/motorola-xoom-with-wi-fi.5.jpg"
          ], 
          "name": "Motorola XOOM\u2122 with Wi-Fi"
        } 
    }, 
    {
        "age": 1, 
        "id": "motorola-xoom", 
        "imageUrl": "img/phones/motorola-xoom.0.jpg", 
        "name": "MOTOROLA XOOM\u2122", 
        "snippet": "The Next, Next Generation\n\nExperience the future with MOTOROLA XOOM, the world's first tablet powered by Android 3.0 (Honeycomb).",
        "konten" : {
          "description": "MOTOROLA XOOM has a super-powerful dual-core processor and Android\u2122 3.0 (Honeycomb) \u2014 the Android platform designed specifically for tablets. With its 10.1-inch HD widescreen display, you\u2019ll enjoy HD video in a thin, light, powerful and upgradeable tablet.",
          "images": [
              "img/phones/motorola-xoom.0.jpg", 
              "img/phones/motorola-xoom.1.jpg", 
              "img/phones/motorola-xoom.2.jpg"
          ], 
          "name": "MOTOROLA XOOM\u2122"
        }
    }]
  };
});

WarsiCtr.controller('PhoneListCtrl', ['$scope', 'DaftarApp',
  function($scope, DaftarApp) {
    $scope.apps = DaftarApp.name;
    $scope.orderProp = 'age';
  }
]);

// hack cors | where the json
WarsiCtr.controller('PhoneDetailCtrl', ['$scope', '$routeParams','DaftarApp',
  function($scope, $routeParams, DaftarApp) {
    $scope.user = $routeParams.appId;
    $scope.isis = DaftarApp.name;
    $scope.apps = "";
    var itemSelected =  _.find($scope.isis,function(item){
      return item.id === $routeParams.appId;
    });
    console.info(itemSelected);
    $scope.app = itemSelected;
  }
]);