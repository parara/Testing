var WarsiApp = angular.module('WarsiApp', ["xeditable", "ui.bootstrap","ngRoute"]);

WarsiApp.run(function(editableOptions) {
  editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
});

// start routing
WarsiApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/AddNewOrder', {
        templateUrl: 'add_order',
        controller: 'AddOrderController'
      }).
      when('/ShowOrders', {
        templateUrl: 'show_orders',
        controller: 'ShowOrdersController'
      }).
      otherwise( {
        redirectTo: '/'
      });
   }
]);


WarsiApp.controller('AddOrderController',
  function($scope) { 
    $scope.message = 'This is Add new order screen';}
);

WarsiApp.controller('ShowOrdersController',
  function($scope) {
    $scope.message = 'This is Show orders screen';}
);

// batas WarsiList
WarsiApp.controller('WarsiList', 
  function($scope, $filter) 
  {
/*  
  Data JSON terpaksa digabung dengan JavaScript akibat perbatasan akses file lokal
*/
  $scope.orderProp = 'age';
  $scope.quantity = 3;

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
    }
  ];
  $scope.user = {
    status: 'arsip'
  }; 

  $scope.isi ='arsip';
  
  $scope.$watch('user.status',function(newVal,oldVal){
    $scope.isi=newVal;
    $scope.itemS = "";

    var itemSelected =  _.find($scope.debhttps,function(item){
      return item.kode === newVal;
    });
    console.info(itemSelected);
    $scope.itemS = itemSelected;
  });

  $scope.statuses = [
    {value: 'arsip', text: 'Arsip BlankOn'},
    {value: 'kambing', text: 'Kambing UI'},
    {value: 'repougm', text: 'Repo UGM'},
  ]; 

  $scope.showStatus = function() {
    var selected = $filter('filter')($scope.statuses, {value: $scope.user.status});
    return ($scope.user.status && selected.length) ? selected[0].text : 'Not set';
  }; 

  // i need put release too, so it can more dinamic
 

  $scope.selected = undefined;

  $scope.derets =['brasero','audicious','vlc','totem','firefox','chromium','pidgin','filezilla','geany','gparted','shotwell','stardict','libreoffice','evolution'
  ];

  $scope.apps = [
    {
      "age": 0, 
      "id": "brasero",
      "genre": "audio", 
      "imageUrl": "img/Komodo/apps/scalable/brasero.svg", 
      "name": "Brasero Pembakar Cakram", 
      "info": "Brasero adalah aplikasi untuk membakar Keping CD/DVD untuk desktop Gnome."
    }, 
    {
      "age": 1, 
      "id": "audicious",
      "genre": "audio", 
      "imageUrl": "img/Komodo/apps/scalable/audacious.svg", 
      "name": "Audacious", 
      "info": "Audacious - Pemutar Suara bersumber terbuka. Mampu memutar musik sesui keinginan namun tetap tidak membebani kerja komputer."
    },
    {
      "age": 2, 
      "id": "vlc",
      "genre": "audio", 
      "imageUrl": "img/Komodo/apps/scalable/vlc.svg", 
      "name": "VLC Media Player", 
      "info": "VLC media player adalah pemutar video bebas dan opensource. VLC mampu memainkan semua jenis tipe video yang ada."
    },
    {
      "age": 3, 
      "id": "totem",
      "genre": "audio", 
      "imageUrl": "img/Komodo/apps/scalable/totem.svg", 
      "name": "Totem Media Player", 
      "info": "Pemutar Video Origunal dari GNOME."
    },
    {
      "age": 4, 
      "id": "firefox",
      "genre": "internet", 
      "imageUrl": "img/Komodo/apps/scalable/firefox.svg", 
      "name": "Mozilla Firefox Browser", 
      "info": "Mozilla Firefox sebuah perambah internet, tersedia di semua platform sistem operasi seperti windows, OS x dan Linux. Pengembangan dibawah naungan Mozilla Foundation."
    },
    {
      "age": 5, 
      "id": "chromium",
      "genre": "internet", 
      "imageUrl": "img/Komodo/apps/scalable/chromium.svg", 
      "name": "Chromium Browser", 
      "info": "Chromium salah satu projek open source perambah internet sebagain kode utam untuk perambah Google Chrome."
    },
    {
      "age": 6, 
      "id": "pidgin",
      "genre": "internet", 
      "imageUrl": "img/Komodo/apps/scalable/pidgin.svg", 
      "name": "Pidgin", 
      "info": "Pidgin - Aplikasi chatting Universal, mampu menjalankan layanan chating dari platform lain semisal facebook messanger, gtalk, yahoo! messanger dan lain-lain."
    },
    {
      "age": 7, 
      "id": "filezilla",
      "genre": "internet", 
      "imageUrl": "img/Komodo/apps/scalable/filezilla.svg", 
      "name": "FileZilla", 
      "info": "Open-source (GNU GPL) FTP client untuk Windows, Mac OS X and GNU/Linux."
    },
    {
      "age": 8, 
      "id": "geany",
      "genre": "aksesoris", 
      "imageUrl": "img/Komodo/apps/scalable/geany2.svg", 
      "name": "Geany", 
      "info": "Geany adalah GTK2 text editor yang terhubung dengan integrated development environment(IDE)."
    },
    {
      "age": 9, 
      "id": "gparted",
      "genre": "aksesoris", 
      "imageUrl": "img/Komodo/apps/scalable/gparted.svg", 
      "name": "Gparted", 
      "info": "GParted adalah partisi editor GUI untuk mengatur partisi hardisk anda."
    },
    {
      "age": 10, 
      "id": "shotwell",
      "genre": "aksesoris", 
      "imageUrl": "img/Komodo/apps/scalable/shotwell.svg", 
      "name": "Shotwell", 
      "info": "Photo organizer untuk desktop GNOME."
    },
    {
      "age": 11, 
      "id": "stardict",
      "genre": "aksesoris", 
      "imageUrl": "img/Komodo/apps/scalable/stardict.svg", 
      "name": "Stardict", 
      "info": "Program kamus penterjemah terbaik di Linux dan Windows."
    },
    {
      "age": 12, 
      "id": "libreoffice",
      "genre": "office", 
      "imageUrl": "img/Komodo/apps/scalable/libreoffice-main.svg", 
      "name": "LibreOffice", 
      "info": "Aplikasi perkantoran untuk pengolah kata, presentasi, tabel bebas untuk Windows, Macintosh and Linux."
    },
    {
      "age": 13, 
      "id": "evolution",
      "genre": "office", 
      "imageUrl": "img/Komodo/apps/scalable/evolution.svg", 
      "name": "Evolution", 
      "info": "Aplikasi manajemen informasi pribadi terintegrasi dengan surel, kalender dan buku kontak."
    }
  ];
});