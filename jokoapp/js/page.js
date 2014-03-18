'use strict';

angular.module('sia', [
  'mobile-navigate',
  'mobile-Directive'
  ])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  when("/", {
      templateUrl: "partial/splash.html",
      controller:SplashCtrl}).
   when("/login", {
      templateUrl: "partial/login.html",
      controller:LoginCtrl}).
    when("/home", {
      templateUrl: "partial/home.html",
      controller:HomeCtrl}).
    when("/inputkrs", {
      templateUrl: "partial/inputkrs.html",
      controller:InputkrsCtrl}).
    when("/semester", {
      templateUrl: "partial/semester.html",
      controller:SemesterCtrl}).
    when("/kumulatif", {
      templateUrl: "partial/kumulatif.html",
      controller:KumulatifCtrl}).
    when("/sejarah", {
      templateUrl: "partial/sejarah.html",
      controller:SejarahCtrl}).
    when("/kuliah", {
      templateUrl: "partial/kuliah.html",
      controller:KuliahCtrl}).
    when("/ujian", {
      templateUrl: "partial/ujian.html",
      controller:UjianCtrl}).
    when("/presensi", {
      templateUrl: "partial/presensi.html",
      controller:PresensiCtrl}).
    when("/tentang", {
      templateUrl: "partial/tentang.html",
      controller:TentangCtrl}).
    when("/umpan", {
      templateUrl: "partial/umpan.html",
      controller:UmpanCtrl}).
    otherwise({
      redirectTo: "/login"
  });
}])
.run(function($route, $http, $templateCache) {
  angular.forEach($route.routes, function(r) {
    if (r.templateUrl) { 
      $http.get(r.templateUrl, {cache: $templateCache});
    }
  });
})
.run(['$rootScope', function ($rootScope) {
    // Page info
    $rootScope.appName = "Mobile SIA";
}])
.config(function($httpProvider) {
  $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
});