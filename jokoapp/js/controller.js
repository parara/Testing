'use strict';

var arr_semester = [{value : "1",label :"Semester Ganjil"} , {value:"2",label:"Semester Genap"} , {value:"3",label:"Semester Pendek"} ];
var URL = "http://service.uin-suka.ac.id/servsiasuper/index.php/sia_public/";
var URLHome = "http://sia.medcominfo.com/";
var pengumuman = "";

function get_tahun_ajaran(angkatan){
	var thn = new Date().getFullYear();
	var ta = [];
	for (var i = thn.valueOf(); i >= angkatan; i--) {
		ta.push({value:i,label : (i+"/"+(i+1))});
	};

	return ta;
}

function decodeFormData(json){
	var data = '';
	angular.forEach(json, function(val, key){
		if (key.search('api_search') != -1) {
			key ='api_search[]'; 
		};
	  	data += key+'='+val+'&';
	});

	data = data.substring(0, data.lastIndexOf('&'));
	return data;
}


function RootCtrl($scope){
	$scope.out = {
		shown: false,
	};

	$scope.out.show = function () {
		$('#charms').charms('close');
		$('.jo-backdrop').fadeOut('fast');
		$scope.out.shown = true;
	}

	$scope.out.hide = function () {
		$scope.out.shown = false;
		$('#charms').charms('close');
		$('.jo-backdrop').fadeOut('fast');
	}

	$scope.out.close = function () {
		$scope.out.shown = false;
		$('#charms').charms('close');
		$('.jo-backdrop').fadeOut('fast');
		navigator.app.exitApp();
	}
}

RootCtrl.$inject  = ['$scope'];
/* Header Controller */

function HeaderCtrl($scope, $http,$navigate,mhsService){
	
	$scope.menus = [{"icon":"icon-home","title" : "Beranda","path" : "/home"},
	{"icon"  : "icon-paper","title" : "KHS Semester","path" : "/semester"},
	{"icon"  : "icon-book","title" : "KHS Kumulatif","path" : "/kumulatif"},
	{"icon"  : "icon-history-2","title" : "Sejarah IP","path" : "/sejarah"},
	{"icon"  : "icon-calendar-alt-fill","title" : "Jadwal Kuliah","path" : "/kuliah"},
	{"icon"  : "icon-calendar-alt-stroke","title" : "Jadwal Ujian","path" : "/ujian"},
	{"icon"  : "icon-calendar-3","title" : "Presensi Mahasiswa","path" : "/presensi"},
	{"icon"  : "icon-info","title" : "Tentang Aplikasi","path" : "/tentang"},
	{"icon"  : "icon-comment","title" : "Umpan Balik","path" : "/umpan"}];		
	

	$scope.user = mhsService.getData();

	$scope.navigate = function(path){	
		$navigate.go(path,'slide');
		$('#charms').charms('close');
		$('.jo-backdrop').fadeOut('fast');		
	}
}

HeaderCtrl.$inject  = ['$scope','$http','$navigate','mhsService'];

/* Header Controller */

/* Splash Controller */
function SplashCtrl($scope, $location,$navigate){
	
	 $scope.countDown = 3;    
	    var timer = setInterval(function(){
	        $scope.countDown--;
	        $scope.$apply();
	        console.log($scope.countDown);
	        if ($scope.countDown == 0) {
	        	$navigate.go('/login','slide');

	        };

	        if ($scope.countDown == -1) {
	        	clearInterval(timer);
	        };
	    }, 1000);  
	  
}
SplashCtrl.$inject = ['$scope','$location','$navigate']
/* Splash Controller */

/* Home Controller */

function HomeCtrl($scope,$http){
	$scope.title = "Home";
	$scope.warning = {shown: false,	};
	$scope.warning.hide = function(){$scope.warning.shown = false};

	if (pengumuman === "") {
		$http({
	        method : 'GET',
	        url : URLHome+'home.php',
	    }).success(function(data,status){
			if((status == 0)|(status == 404)){
				$scope.data = "";
				$scope.warning.shown = true
			}else{				
				pengumuman = data
				$('#umum').html(data);
			}
		});
	}else{
		$('#umum').html(pengumuman);
	}
	 
}

HomeCtrl.$inject = ['$scope','$http']

/* -------------------------------------------------------------------------------------- */

/* Login Controller */

function LoginCtrl($scope,$location,mhsService, $http){
	$scope.warning = {shown: false,	};
	$scope.warning.hide = function(){$scope.warning.shown = false};

	$scope.custom = {shown: false,	};
	$scope.message = "NIM atau password anda salah";

	$scope.username = "";
	$scope.password = "";
	$scope.login = function(){
		if($scope.username.length === 8){
			var form_data = {api_kode : "26000",api_subkode : "12",
				api_search : $scope.username
			};
			var akt = "20"+$scope.username.substring(0,2);
			var data_mhs = {
		      nim : $scope.username,
		      nama : "",
		      angkatan : akt,
		      jurusan : ""
		    }; 
			$http({
		        method : 'POST',
		        url : URL+'sia_mahasiswa/data_search',
		        data : decodeFormData(form_data),
		        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
		    }).success(function(data,status){
				if((status == 0)|(status == 404)){
					$scope.data = "";
					$scope.warning.shown = true
				}else{				
					data_mhs.nama = data[0].NAMA;
					data_mhs.jurusan = data[0].NM_JURUSAN;
					mhsService.setData(data_mhs);
		    		$location.path('/home');
				}
			});

		    
		    
		}else{
			$scope.custom.shown = true;
		}			
	}
}

LoginCtrl.$inject = ['$scope','$location','mhsService', '$http']

/* -------------------------------------------------------------------------------------- */


/* Inputkrs Controller */

function InputkrsCtrl($scope,$location){
	$scope.title = "Input KRS";
}

InputkrsCtrl.$inject = ['$scope','$location']

/* -------------------------------------------------------------------------------------- */


/* Semester Controller */

function SemesterCtrl($scope,$http, $location, mhsService){
	var mhs = mhsService.getData();
	$scope.warning = {shown: false,	};
	$scope.warning.hide = function(){$scope.warning.shown = false};


	$scope.l_semester = arr_semester;
	$scope.l_tahun = get_tahun_ajaran(mhs.angkatan);
	$scope.parameter = {
		tahun : $scope.l_tahun[0].value,
		semester : $scope.l_semester[0].value
	}
	$scope.bt_title = "Cek KHS";
	$scope.title = "KHS Semester";
	$scope.data = "";
	$scope.jmlsks = ""; $scope.jmlmakul = ""; $scope.ipk = "";
	$scope.detail = "0";

	$scope.loaddata = function(){
		$scope.jmlsks = ""; $scope.jmlmakul = "";
		var form_data = {api_kode : "63000",api_subkode : "12",
			api_search1 : $scope.parameter.tahun,
			api_search2 : $scope.parameter.semester,
			api_search3 : mhs.nim
		};
		var kode_krs = {api_kode : "64000",api_subkode : "4",api_search : ""};
		

		$http({
            method : 'POST',
            url : URL+'sia_krs/data_search',
            data : decodeFormData(form_data),
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).success(function(data,status){
			if((status == 0)|(status == 404)){
				$scope.data = "";
				$scope.warning.shown = true
			}else{				
				kode_krs.api_search = data[0].KD_KRS;
				$scope.jmlsks = data[0].AMBIL_SKS;
				get_khs(kode_krs);
			}
		});
	}

	function get_khs(kode_krs){
		var jumlah = 0;
		var jum_sks = 0;

		$http({
            method : 'POST',
            url : URL+'sia_krs/data_search',
            data : decodeFormData(kode_krs),
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).success(function(data,status){
			if((status == 0)|(status == 404)){
				$scope.data = "";
				$scope.warning.shown = true
			}else{
				if(data.length == 0){
					$scope.data = "";
				}else{
					$scope.data = data;
					angular.forEach(data, function(val, key){
						if(val.BOBOT_NILAI !== null){
							jumlah += (parseFloat(val.BOBOT_NILAI) * parseFloat(val.SKS));
							jum_sks += parseFloat(val.SKS);
						}
						
					});
					console.log();
					$scope.ipk = (jumlah / jum_sks).toFixed(2);
					$scope.jmlmakul = data.length;
				}
			}
		});

/*
		var form_data = {api_kode : "65000",api_subkode : "7",
			api_search1 : $scope.parameter.tahun,
			api_search2 : $scope.parameter.semester,
			api_search : mhs.nim
		};

		$http({
	        method : 'POST',
	        url : URL+'sia_krs/data_search',
	        data : decodeFormData(form_data),
	        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
	    }).success(function(data,status){
			if((status == 0)|(status == 404)){
				$scope.data = "";
				$scope.warning.shown = true;
			}else{
				$scope.jmlsks = data[0].SKS; 
				$scope.ipk = parseFloat(data[0].IPK).toFixed(2);
			}
		});
		*/
	}

	$scope.reset = function(){
		$scope.data = "";
	}
	$scope.showDetail = function(index){
		$scope.title = "Detail "+$scope.title;
		$scope.detail = 1;
		$scope.detailData = $scope.data[index];
	}

	$scope.back = function(){
		$scope.title = "KHS Semeter";
		$scope.detail = 0;
	}
	
}

SemesterCtrl.$inject = ['$scope','$http','$location','mhsService']

/* -------------------------------------------------------------------------------------- */


/* Kumulatif Controller */

function KumulatifCtrl($scope,$http,mhsService){
	$scope.warning = {shown: false,	};
	$scope.warning.hide = function(){$scope.warning.shown = false};
	$scope.title = "KHS Kumulatif";
	$scope.detail = 0;
	$scope.jmlsks = ""; $scope.jmlmakul = ""; $scope.ipk = "";
	$scope.parameter = {
		query : "",
		orderProp : "NM_MK"
	}
	var mhs = mhsService.getData();

	var form_data = {api_kode : "65000",api_subkode : "6",
			api_search : mhs.nim
		};

	$http({
        method : 'POST',
        url : URL+'sia_krs/data_search',
        data : decodeFormData(form_data),
        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    }).success(function(data,status){
		if((status == 0)|(status == 404)){
			$scope.data = "";
			$scope.warning.shown = true;
		}else{
			$scope.data = data;
			$scope.jmlmakul = data.length;
		}
	});
    form_data.api_subkode = 8;
	$http({
        method : 'POST',
        url : URL+'sia_krs/data_search',
        data : decodeFormData(form_data),
        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    }).success(function(data,status){
		if((status == 0)|(status == 404)){
			$scope.data = "";
			$scope.warning.shown = true;
		}else{
			$scope.jmlsks = data[0].SKS; 
			$scope.ipk = parseFloat(data[0].IPK).toFixed(2);
		}
	});
	
	
	$scope.showDetail = function(index){
		$scope.title = "Detail "+$scope.title;
		$scope.detail = 1;
		$scope.detailData = $scope.data[index];
	}

	$scope.back = function(){
		$scope.title = "KHS Kumulatif";
		$scope.detail = 0;
	}

}

KumulatifCtrl.$inject = ['$scope','$http','mhsService']

/* -------------------------------------------------------------------------------------- */


/* Sejarah Controller */

function SejarahCtrl($scope,$http,mhsService){
	$scope.warning = {shown: false,	};
	$scope.warning.hide = function(){$scope.warning.shown = false};
	$scope.title = "Sejarah IP";
	$scope.detail = "0";
	var mhs = mhsService.getData();

	var form_data = {api_kode : "63000",api_subkode : "11",
			api_search : mhs.nim
		};

	$http({
        method : 'POST',
        url : URL+'sia_krs/data_search',
        data : decodeFormData(form_data),
        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    }).success(function(data,status){
		if((status == 0)|(status == 404)){
			$scope.data = "";
			$scope.warning.shown = true
		}else{
			$scope.data = data;
			$scope.jmlsks = ""; 
			$scope.jmlmakul = data.length;
		}
	});
	
	$scope.showDetail = function(index){
		$scope.title = "Detail "+$scope.title;
		$scope.detail = 1;
		$scope.detailData = $scope.data[index];
	}

	$scope.back = function(){
		$scope.title = "Sejarah IP";
		$scope.detail = 0;
	}

}

SejarahCtrl.$inject = ['$scope','$http','mhsService']

/* -------------------------------------------------------------------------------------- */


/* Kuliah Controller */

function KuliahCtrl($scope,$http,mhsService){
	var mhs = mhsService.getData();
	$scope.warning = {shown: false,	};
	$scope.warning.hide = function(){$scope.warning.shown = false};
	$scope.l_semester = arr_semester;
	$scope.l_tahun = get_tahun_ajaran(mhs.angkatan);
	
	$scope.parameter = {
		tahun : $scope.l_tahun[0].value,
		semester : $scope.l_semester[0].value
	}
	$scope.bt_title = "Cek Jadwal";
	$scope.title = "Jadwal Kuliah";
	$scope.data = "";
	$scope.detail = 0;

	$scope.loaddata = function(){
		var form_data = {api_kode : "66000",api_subkode : "16",
			api_search1 : $scope.parameter.tahun,
			api_search2 : $scope.parameter.semester,
			api_search3 : mhs.nim
		};
		

		$http({
            method : 'POST',
            url : URL+'sia_krs/data_search',
            data : decodeFormData(form_data),
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).success(function(data,status){
			if((status == 0)|(status == 404)){
				$scope.data = "";
				$scope.warning.shown = true
			}else{
				$scope.data = data;
			}
		});
	}
	$scope.reset = function(){
		$scope.data = "";
	}

	
	$scope.showDetail = function(index){
		$scope.title = "Detail "+$scope.title;
		$scope.detail = 1;
		$scope.detailData = $scope.data[index];
	}

	$scope.back = function(){
		$scope.title = "Jadwal Kuliah";
		$scope.detail = 0;
	}
}

KuliahCtrl.$inject = ['$scope', '$http','mhsService']

/* -------------------------------------------------------------------------------------- */


/* Ujian Controller */

function UjianCtrl($scope,$http,mhsService){
	var mhs = mhsService.getData();
	$scope.warning = {shown: false,	};
	$scope.warning.hide = function(){$scope.warning.shown = false};
	$scope.l_semester = arr_semester;
	$scope.l_tahun = get_tahun_ajaran(mhs.angkatan);
	
	$scope.parameter = {
		tahun : $scope.l_tahun[0].value,
		semester : $scope.l_semester[0].value
	}
	$scope.bt_title = "Cek Jadwal";
	$scope.title = "Jadwal Ujian";
	$scope.uts = ""; $scope.uas = "";
	$scope.detail = "0";

	$scope.loaddata = function(){
		var form_data = {api_kode : "63000",api_subkode : "12",
			api_search1 : $scope.parameter.tahun,
			api_search2 : $scope.parameter.semester,
			api_search3 : mhs.nim
		};
		var kode_uts = {api_kode : "75000",
			api_subkode : "13",
			api_search1 : $scope.parameter.tahun,
			api_search2 : $scope.parameter.semester,
			api_search3 : "",
			api_search4 : "1"
		};

		var kode_uas = {api_kode : "75000",
			api_subkode : "13",
			api_search1 : $scope.parameter.tahun,
			api_search2 : $scope.parameter.semester,
			api_search3 : "",
			api_search4 : "2"
		};
		

		$http({
            method : 'POST',
            url : URL+'sia_krs/data_search',
            data : decodeFormData(form_data),
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).success(function(data,status){
			if((status == 0)|(status == 404)){
				$scope.uts = "";
				$scope.uas = "";
				$scope.warning.shown = true
			}else{				
				kode_uts.api_search3 = data[0].KD_KRS;
				kode_uas.api_search3 = data[0].KD_KRS;
				get_uts(kode_uts);
				get_uas(kode_uas);
			}
		});
	}

	function get_uts(form_data){
		$http({
            method : 'POST',
            url : URL+'sia_absensi/data_search',
            data : decodeFormData(form_data),
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).success(function(data,status){
			if((status == 0)|(status == 404)){
				$scope.uts = "";
				$scope.warning.shown = true
			}else{				
				$scope.uts = data;
			}
		});
	}

	function get_uas(form_data){
		$http({
            method : 'POST',
            url : URL+'sia_absensi/data_search',
            data : decodeFormData(form_data),
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).success(function(data,status){
			if((status == 0)|(status == 404)){
				$scope.uas = "";
				$scope.warning.shown = true
			}else{				
				$scope.uas = data;
			}
		});
	}

	$scope.reset = function(){
		$scope.uts = "";
		$scope.uas = "";
	}

	$scope.showDetail = function(index, mode){
		$scope.detail = 1;
		$scope.title = "Detail "+$scope.title+" "+mode;
		$scope.detailData = "";
		if (mode == 'UTS') {
			// uts
			$scope.detailData = $scope.uts[index];
		}else{
			// uas
			$scope.detailData = $scope.uas[index];
		}		
		
	}

	$scope.back = function(){
		$scope.title = "Jadwal Ujian";
		$scope.detail = 0;
	}
}

UjianCtrl.$inject = ['$scope','$http','mhsService']

/* -------------------------------------------------------------------------------------- */


/* Presensi Controller */

function PresensiCtrl($scope,$http,mhsService){
	var mhs = mhsService.getData();
	$scope.warning = {shown: false,	};
	$scope.warning.hide = function(){$scope.warning.shown = false};
	$scope.l_semester = arr_semester;
	$scope.l_tahun = get_tahun_ajaran(mhs.angkatan);
	
	$scope.parameter = {
		tahun : $scope.l_tahun[0].value,
		semester : $scope.l_semester[0].value
	}
	$scope.bt_title = "Cek Presensi";
	$scope.title = "Presensi";
	$scope.detail = "0";
	$scope.data = "";

	$scope.loaddata = function(){
		var form_data = {api_kode : "66000",api_subkode : "17",
			api_search1 : $scope.parameter.tahun,
			api_search2 : $scope.parameter.semester,
			api_search3 : mhs.nim
		};

		$http({
            method : 'POST',
            url : URL+'sia_krs/data_search',
            data : decodeFormData(form_data),
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).success(function(data,status){
			if((status == 0)|(status == 404)){
				$scope.data = "";
				$scope.warning.shown = true
			}else{
				$scope.data = data;
			}
		});
	}
	$scope.reset = function(){
		$scope.data = "";
	}

	$scope.showDetail = function(index){
		$scope.title = "Detail Presensi";
		$scope.detail = 1;
		$scope.detailData = $scope.data[index];console.log($scope.detailData)
	}

	$scope.back = function(){
		$scope.title = "Cek Presensi";
		$scope.detail = 0;
	}
}

PresensiCtrl.$inject = ['$scope', '$http','mhsService']

/* -------------------------------------------------------------------------------------- */

/* Tentang Controller */

function TentangCtrl($scope){
	$scope.title = "Tentang Aplikasi";
}

TentangCtrl.$inject = ['$scope']

/* -------------------------------------------------------------------------------------- */


/* Umpan Controller */

function UmpanCtrl($scope, $http){
	$scope.title = "Umpan Balik";
	$scope.warning = {shown: false,	};
	$scope.warning.hide = function(){$scope.warning.shown = false};

	$scope.custom = {shown: false,	};
	$scope.message = "Berhasil kirim umpan balik";

	$scope.device_platform = device_platform;
  	$scope.device_model = device_model;
  	$scope.device_version = device_version;
  	$scope.isi = "";

  	$scope.kirim = function(){
  		$http({
            method : 'POST',
            url : URLHome+"feedback/upload_feedback.php",
            data : "isi="+$scope.isi+"&platform="+device_platform+"&model="+device_model+"&versi="+device_version,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).success(function(data,status){
			if((status == 0)|(status == 404)){
				$scope.data = "";
				$scope.warning.shown = true
			}else{
				// pesan berhasil
				$scope.custom.shown = true;
			}
		});
  	}
}

UmpanCtrl.$inject = ['$scope','$http']