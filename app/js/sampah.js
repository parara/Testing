  <script type="text/ng-template" id="home.html">
//<!-- Docs master nav header
//================================================== -->
  <a class="sr-only" href="#content">Skip to main content</a>

  <header class="navbar navbar-static-top bs-docs-nav" id="top" role="banner">
    <div class="container">
      <div class="navbar-header">
        <button class="navbar-toggle" type="button" data-toggle="collapse" data-target=".bs-navbar-collapse">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="#home">Warung Aplikasi</a>
      </div>


      <nav class="collapse navbar-collapse bs-navbar-collapse" role="navigation">
        <ul class="nav navbar-nav navbar-right nav-tabs">
          <li><a href="#home" data-toggle="tab">Muka</a></li>
          <li><a href="#kategori" data-toggle="tab">Kategori</a></li>
          <li><a href="#repo" data-toggle="tab">Repository</a></li>
        </ul>
        <form class="navbar-form navbar-right col-md-3" ng-controller="WarsiList">
          <input type="text" ng-model="selected" typeahead="deret for deret in derets | filter:$viewValue" class="form-control input-normal" placeholder="Pencarian...">
        </form>
      </nav>
    </div>
  </header>

//<!-- Docs page layout
//================================================== -->
    <div class="bs-docs-header" id="content">
      
      <div class="container">
          <center><h2>BlankOn Linux</h2>
          100% buatan Putra-Putri Indonesia.
          </center>
      </div>
    </div>
  </script>


phonecatApp
phonecatControllers


//hijaking file
phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', '$http',
  function($scope, $routeParams, $http) {
    $http.get('phones/' + $routeParams.phoneId + '.json').success(function(data) {
      $scope.phone = data;
    });
  }
]);
{{ data | json }}

app.controller('MainCtrl', function($scope) {
  $scope.cars = [ 
      {
      	"make":"koenigsegg",
      	"model":"agera"
      },
      {
      	"make":"pagani",
      	"model":"huayra"
      },
      {
      	"make":"noble",
      	"model":"m600"
      }, 
      {
      	"make":"bugatti",
      	"model":"veyron"
      } 
    ]
});

app.controller('CarCtrl', function($scope, $routeParams) {
  var findCar = function(){
    for(var i = 0; i < $scope.$parent.cars.length; ++i){
      var car = $scope.$parent.cars[i];
      if(car.make === $routeParams.make && car.model === $routeParams.model){
        return car;
      }
    }
  }
  $scope.car = findCar();
  
  $scope.$routeParams = $routeParams;
});

$scope.isis = [
      {
        "id": "motorola-xoom",
        "konten" : {
          "description": "MOTOROLA XOOM has a super-powerful dual-core processor and Android\u2122 3.0 (Honeycomb) \u2014 the Android platform designed specifically for tablets. With its 10.1-inch HD widescreen display, you\u2019ll enjoy HD video in a thin, light, powerful and upgradeable tablet.",
          "images": [
              "img/phones/motorola-xoom.0.jpg", 
              "img/phones/motorola-xoom.1.jpg", 
              "img/phones/motorola-xoom.2.jpg"
          ], 
          "name": "MOTOROLA XOOM\u2122"
        }
      }, 
      {
        "id": "motorola-xoom-with-wi-fi",
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
      }
    ];
    var findPhone = function(){
      for (var i = 0; i < $scope.isis.length;++i) {
        var phone = $scope.isis[i];
        if (isis.id === $routeParams.phoneId){
          return phone;
        }
    }
    $scope.phone= findPhone();
    $scope.$routeParams = $routeParams;

<ul class="specs">
      <li>
        <span>Availability and Networks</span>
        <dl>
          <dt>Availability</dt>
          <dd ng-repeat="availability in phone.id.availability">{{availability}}</dd>
        </dl>
      </li>
      <li>
        <span>Android</span>
        <dl>
          <dt>OS Version</dt>
          <dd>{{phone.android.os}}</dd>
          <dt>UI</dt>
          <dd>{{phone.android.ui}}</dd>
        </dl>
      </li>
      <li>
        <span>Size and Weight</span>
        <dl>
          <dt>Dimensions</dt>
          <dd ng-repeat="dim in phone.sizeAndWeight.dimensions">{{dim}}</dd>
          <dt>Weight</dt>
          <dd>{{phone.sizeAndWeight.weight}}</dd>
        </dl>
      </li>
    </ul>