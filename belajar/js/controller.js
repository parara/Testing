'use strict';

function install0() { 
  (Apps.install0());
}

/* Controllers */

var WarsiCtr = angular.module('WarsiCtr', ['WarsiJson','xeditable','ui.bootstrap']);

WarsiCtr.run(function(editableOptions) {
  editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
});

WarsiCtr.controller('History', ['$scope',
  function($scope) {
    $scope.$back = function() { 
      window.history.back();
    }
}]);

WarsiCtr.controller('AppListCtr', ['$scope', 'DaftarApp',
  function($scope, DaftarApp) {
    $scope.selected = undefined;
    $scope.apps = DaftarApp.name;
    $scope.derets =['brasero','audicious','vlc','totem','firefox','chromium','pidgin','filezilla','geany','gparted','shotwell','stardict','libreoffice','evolution'
    ];
    $scope.orderProp = 'age';
    $scope.aksi = $scope.selected;
  }
]);

// hack cors | where the json
WarsiCtr.controller('AppDetailCtr', ['$scope', '$routeParams','DaftarApp',
  function($scope, $routeParams, DaftarApp) {
    $scope.user = $routeParams.appId;
    $scope.isis = DaftarApp.name;
    $scope.apps = "";
    var itemSelected =  _.find($scope.isis,function(item){
      return item.id === $routeParams.appId;
    });
    $scope.app = itemSelected;
    $scope.install = function(app){
      alert(app)
    }
    $scope.installapp = function(app){
      if (app === "brasero") {
        (Apps.installbrasero())
      } else if (app ==="audacious"){
        (Apps.installaudacious())
      } else if (app ==="vlc"){
        (Apps.installvlc())
      } else if (app ==="totem"){
        (Apps.installtotem())
      } else if (app ==="firefox"){
        (Apps.installfirefox())
      } else if (app ==="chromium"){
        (Apps.installchromium())
      } else if (app ==="pidgin"){
        (Apps.installpidgin())
      } else if (app ==="geany"){
        (Apps.installgeany())
      } else if (app ==="gparted"){
        (Apps.installgparted())
      } else if (app ==="shotwell"){
        (Apps.installshotwell())
      } else if (app ==="stardict"){
        (Apps.installstardict())
      } else if (app ==="libreoffice"){
        (Apps.installlibreoffice())
      } else {
      (Apps.installevolution())
      };
    }

    $scope.removeapp = function(app){
      if (app === "brasero") {
        (Apps.removebrasero())
      } else if (app ==="audacious"){
        (Apps.removeaudacious())
      } else if (app ==="vlc"){
        (Apps.removevlc())
      } else if (app ==="totem"){
        (Apps.removetotem())
      } else if (app ==="firefox"){
        (Apps.removefirefox())
      } else if (app ==="chromium"){
        (Apps.removechromium())
      } else if (app ==="pidgin"){
        (Apps.removepidgin())
      } else if (app ==="geany"){
        (Apps.removegeany())
      } else if (app ==="gparted"){
        (Apps.removegparted())
      } else if (app ==="shotwell"){
        (Apps.removeshotwell())
      } else if (app ==="stardict"){
        (Apps.removestardict())
      } else if (app ==="libreoffice"){
        (Apps.removelibreoffice())
      } else {
      (Apps.removeevolution())
      };
    }
  }
]);

WarsiCtr.controller('RepoCtr', 
  function($scope, $filter) {
  $scope.debhttps = [
    {
      "kode": "arsip",
      "konten" : {
        "komentar": "## Repository BlankOn Suroboyo - Original",
        "isimain": "deb http://arsip.blankonlinux.or.id/blankon/suroboyo main restricted extras extras-restricted",
        "isiupdate": "deb http://arsip.blankonlinux.or.id/blankon suroboyo-updates main restricted extras extras-restricted",
        "isisecurity": "deb http://arsip.blankonlinux.or.id/blankon suroboyo-security main restricted extras extras-restricted"
      }
    },
    {
      "kode": "kambing",
      "konten" : {
        "komentar": "## Repository BlankOn Suroboyo - Kambing",
        "isimain": "deb http://kambing.ui.ac.id/blankon/suroboyo main restricted extras extras-restricted",
        "isiupdate": "deb http://kambing.ui.ac.id/blankon suroboyo-updates main restricted extras extras-restricted",
        "isisecurity": "deb http://kambing.ui.ac.id//blankon suroboyo-security main restricted extras extras-restricted"
      }
    },
    {
      "kode": "repougm",
      "konten" : {
        "komentar": "## Repository BlankOn Suroboyo - repougm",
        "isimain": "deb http://repo.ugm.ac.id/blankon/suroboyo main restricted extras extras-restricted",
        "isiupdate": "deb http://repo.ugm.ac.id/blankon suroboyo-updates main restricted extras extras-restricted",
        "isisecurity": "deb http://repo.ugm.ac.id//blankon suroboyo-security main restricted extras extras-restricted"
      }
    }];
  $scope.user = {
    status: 'arsip'
  };
  //ini status akan dapat kiriman dari JSCore, but how?
  
  $scope.$watch('user.status',function(newVal,oldVal){
    $scope.user.status=newVal;
    $scope.itemS = "";
    var itemSelected =  _.find($scope.debhttps,function(item){
      return item.kode === newVal;
    });
    $scope.itemS = itemSelected;
  });

  $scope.statuses = [
    {value: 'arsip', text: 'Arsip BlankOn'},
    {value: 'kambing', text: 'Kambing UI'},
    {value: 'repougm', text: 'Repo UGM'}]; 

  $scope.showStatus = function() {
    var selected = $filter('filter')($scope.statuses, {value: $scope.user.status});
    return ($scope.user.status && selected.length) ? selected[0].text : 'Not set';
  };
  $scope.simpanrepo = function(app) {
    
    if (app === "repougm") {
      (Apps.ugm())
    } else if (app ==="kambing"){
      (Apps.kambing())
    } else {
      (Apps.arsip())
    };
  }
  $scope.updaterepo = function(app){
      (Apps.update())
    }
  $scope.upgraderepo = function(app){
      (Apps.upgrade())
    }
});