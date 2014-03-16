'use strict';

/* Controllers */

var phonecatControllers = angular.module('phonecatControllers', []);

phonecatControllers.controller('PhoneListCtrl', ['$scope',
  function($scope) {
    $scope.phones = [
    {
        "age": 0, 
        "id": "motorola-xoom-with-wi-fi", 
        "imageUrl": "img/phones/motorola-xoom-with-wi-fi.0.jpg", 
        "name": "Motorola XOOM\u2122 with Wi-Fi", 
        "snippet": "The Next, Next Generation\r\n\r\nExperience the future with Motorola XOOM with Wi-Fi, the world's first tablet powered by Android 3.0 (Honeycomb)."
    }, 
    {
        "age": 1, 
        "id": "motorola-xoom", 
        "imageUrl": "img/phones/motorola-xoom.0.jpg", 
        "name": "MOTOROLA XOOM\u2122", 
        "snippet": "The Next, Next Generation\n\nExperience the future with MOTOROLA XOOM, the world's first tablet powered by Android 3.0 (Honeycomb)."
    }
    ];

    $scope.orderProp = 'age';
    $scope.message = 'This is Add new order screen';
  }
]);

// hack cors | where the json
phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    $scope.message = $routeParams.phoneId+'This is Add new order screen';
    $scope.data = [
      {
        "motorola-xoom" : {
          "description": "MOTOROLA XOOM has a super-powerful dual-core processor and Android\u2122 3.0 (Honeycomb) \u2014 the Android platform designed specifically for tablets. With its 10.1-inch HD widescreen display, you\u2019ll enjoy HD video in a thin, light, powerful and upgradeable tablet.",
          "id": "motorola-xoom", 
          "images": [
              "img/phones/motorola-xoom.0.jpg", 
              "img/phones/motorola-xoom.1.jpg", 
              "img/phones/motorola-xoom.2.jpg"
          ], 
          "name": "MOTOROLA XOOM\u2122"
        }
      }, 
      {
        "motorola-xoom-with-wi-fi": {
          "description": "Motorola XOOM with Wi-Fi has a super-powerful dual-core processor and Android\u2122 3.0 (Honeycomb) \u2014 the Android platform designed specifically for tablets. With its 10.1-inch HD widescreen display, you\u2019ll enjoy HD video in a thin, light, powerful and upgradeable tablet.",  
          "id": "motorola-xoom-with-wi-fi", 
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
      }
    ];
    //$scope.test = data.$routeParams.phoneId;
  }
]);