var WarsiJson = angular.module('WarsiJson', []);

WarsiJson.factory('DaftarApp', function() {
  return {
    name :[
    {
      "age": 0,
      "id": "brasero",
      "genre": "audio", 
      "imageUrl": "img/Komodo/apps/scalable/brasero.svg", 
      "name": "Brasero",
      "snipset": "Pembakar Cakram",
      "info": "Brasero adalah sebuah aplikasi untuk membakar CD / DVD untuk Gnome Desktop. Hal ini dirancang untuk menjadi sesederhana mungkin dan memiliki beberapa fitur unik yang memungkinkan pengguna untuk membuat cakram mereka dengan mudah dan cepat.",
      "url" :[
        "Unduh rilis: http://download.gnome.org/sources/brasero/",
        "Git: http://git.gnome.org/browse/brasero/",
        "Mailing List: brasero-list@gnome.org",
        "channel IRC: #brasero di irc.gimp.org"],
      "authors" : [
        "Philippe Rouquier",
        "Luis Medinas",
        "Joshua Lock"],
      "versi" : "3.8.0-2"
    }, 
    {
      "age": 1,
      "id": "audicious",
      "genre": "audio", 
      "imageUrl": "img/Komodo/apps/scalable/audacious.svg", 
      "name": "Audacious",
      "snipset": "",
      "info": "Audacious - Pemutar Suara bersumber terbuka. Mampu memutar musik sesui keinginan namun tetap tidak membebani kerja komputer. Audacious berjalan pada Linux, derivatif BSD, dan Microsoft Windows.",
      "url" :[
        "Unduh rilis: http://audacious-media-player.org",
        "Git: http://github.com/audacious-media-player",
        "channel IRC: #audacious di irc.atheme.org"],
      "authors" : [
        "George Averill",
        "Daniel Barkalow",
        "Christian Birchinger",
        "Ralf Ertzinger",
        "Michael Färber",
        "Matti Hämäläinen"],
      "versi" : "3.4.1-1"
    },
    {
      "age": 2, 
      "id": "vlc",
      "genre": "audio", 
      "imageUrl": "img/Komodo/apps/scalable/vlc.svg", 
      "name": "VLC Media Player",
      "snipset": "",
      "info": "VLC media player adalah pemutar video cross-platform bebas dan opensource. VLC mampu memainkan semua jenis tipe video, DVD, Audio CD, VCD, dan berbagai protokol streaming.",
      "url" :[
        "Unduh rilis: http://www.videolan.org/vlc/",
        "Git: http://git.videolan.org/",
        "channel IRC: IRC on  #videolan di irc.videolan.org"],
      "authors" : [
        "VideoLAN non-profit Organization."],
      "versi" : "2.1.2-2"
    },
    {
      "age": 3, 
      "id": "totem",
      "genre": "audio", 
      "imageUrl": "img/Komodo/apps/scalable/totem.svg", 
      "name": "Totem",
      "snipset": "",
      "info": "Pemutar Video Origunal dari GNOME.",
      "url" :[
        "Laman Web: http://wiki.gnome.org/Apps/Totem",
        "Git: http://git.gnome.org/browse/totem/",
        "channel IRC: #totem di irc.gimp.org"],
      "authors" : [
        "The Telestrator mode was sponsored by Paul Cooper",
        "The video zooming feature was sponsored by Lyndon Drake",
        "The Totem Mozilla plugin was sponsored by Ryan Thiessen",
        "Fluendo have sponsored Ronald Bultje and Tim-Philipp", 
        "Müller's work on Totem's GStreamer backend",
        "Collabora Multimedia sponsors Tim-Philipp Müller's work on Totem's GStreamer backend now"],
      "versi" : "3.10.1-1"
    },
    {
      "age": 4, 
      "id": "firefox",
      "genre": "internet", 
      "imageUrl": "img/Komodo/apps/scalable/firefox.svg", 
      "name": "Firefox",
      "snipset": "",
      "info": "Firefox sebuah perambah internet dikembangkan oleh Mozilla, tersedia di semua platform sistem operasi seperti windows, OS x dan Linux. Pengembangan dibawah naungan Mozilla Foundation.",
      "url" :[
        "Unduh: http://mozilla.org/firefox"],
      "authors" : [
      "Mozilla.org"],
      "versi" : "3.10.1-1"
    },
    {
      "age": 5, 
      "id": "chromium",
      "genre": "internet", 
      "imageUrl": "img/Komodo/apps/scalable/chromium.svg", 
      "name": "Chromium Browser",
      "snipset": "",
      "info": "Chromium salah satu projek open source perambah internet yang cepat, aman dan stabil.",
      "url" :[
        "Laman Web: http://chromium.org"],
      "authors" : [
        "Chromium Project"],
      "versi" : "32.0.1700"
    },
    {
      "age": 6, 
      "id": "pidgin",
      "genre": "internet", 
      "imageUrl": "img/Komodo/apps/scalable/pidgin.svg", 
      "name": "Pidgin",
      "snipset": "", 
      "info": "Pidgin - Aplikasi chatting Universal, mampu menjalankan layanan chating dari platform lain semisal facebook messanger, gtalk, yahoo! messanger dan lain-lain.",
      "url" :[
        "Laman Web: http://www.pidgin.im"],
      "authors" : [
        "Pidgin Dev"],
      "versi" : "2.10.9-1"
    },
    {
      "age": 7, 
      "id": "filezilla",
      "genre": "internet", 
      "imageUrl": "img/Komodo/apps/scalable/filezilla.svg", 
      "name": "FileZilla",
      "snipset": "", 
      "info": "Open-source (GNU GPL) File Transfer Protokol (FTP) client untuk Windows, Mac OS X and GNU/Linux.",
      "url" :[
        "Laman Web: http://filezilla-project.org"],
      "authors" : [
        "Tim Kosse"],
      "versi" : "3.7.3"
    },
    {
      "age": 8, 
      "id": "geany",
      "genre": "aksesoris", 
      "imageUrl": "img/Komodo/apps/scalable/geany.svg", 
      "name": "Geany",
      "snipset": "",
      "info": "Geany adalah teks editor dengan toolkit GTK2 yang yang terhubung dengan integrated development environment(IDE). Hal ini dikembangkan untuk memberikan IDE kecil dan cepat, hanya memiliki beberapa dependensi dari paket lain. Geany mendukung banyak tipe file dengan beberapa fitur yang bagus.",
      "url" :[
        "Laman Web: http://www.geany.org"],
      "authors" : [
        "Colomban Wendling <lists.ban@herbesfolles.org> (maintainer, developer)",
        "Nick Treleaven <nick.treleaven@btinternet.com> (developer)",
        "Matthew Brush <matt@geany.org> (developer)",
        "Enrico Tröger <enrico.troeger@uvena.de> (developer)",
        "Frank Lanitz <frank@frank.uvena.de> (translation maintainer)",
        "Lex Trotman <elextr@gmail.com> (Regular Contributors)",
        "Eugene Arshinov <earshinov@gmail.com> (Regular Contributors)"],
      "versi" : "1.23.1"
    },
    {
      "age": 9, 
      "id": "gparted",
      "genre": "aksesoris", 
      "imageUrl": "img/Komodo/apps/scalable/gparted.svg", 
      "name": "Gparted",
      "snipset": "",
      "info": "GParted adalah partisi editor GUI untuk mengatur partisi hardisk anda. Dengan GParted Anda dapat mengubah ukuran, menyalin, dan memindahkan partisi tanpa kehilangan data, memungkinkan Anda untuk: Menambah atau mengurangi ukuran drive C: Menciptakan ruang untuk sistem operasi baru, Mencoba penyelamatan data dari partisi yang hilang",
      "url" :[
        "Laman Web: http://gparted.org/",
        "Git : http://gparted.org/git.php"],
      "authors" : [
        "Curtis Gedak (GParted Application Manager)"],
      "versi" : "0.18.0"
    },
    {
      "age": 10, 
      "id": "shotwell",
      "genre": "aksesoris", 
      "imageUrl": "img/Komodo/apps/scalable/shotwell.svg", 
      "name": "Shotwell",
      "snipset": "",
      "info": "Photo organizer untuk desktop GNOME. Fitur :(1)Impor dari disk atau kamera,(2)Mengatur dengan berbasis waktu Events, Tag (kata kunci), Folders, dan lebih,(3)Lihat foto Anda dalam full-window atau mode fullscreen,(4)Crop, rotate, warna menyesuaikan, meluruskan, dan meningkatkan foto slideshow,(5)Video dan dukungan foto RAW, (6)Berbagi ke layanan Web utama, termasuk Facebook, Flickr, dan YouTube",
      "url" :[
        "Laman Web: http://www.yorba.org/projects/shotwell"],
      "authors" : [
        "Jim Nelson - Executive Director",
        "Charles - ",
        "Adam -",
        "Dave Neary"],
      "versi" : "0.15.1"
    },
    {
      "age": 11, 
      "id": "stardict",
      "genre": "aksesoris", 
      "imageUrl": "img/Komodo/apps/scalable/accessories-dictionary.svg", 
      "name": "Stardict",
      "snipset": "",
      "info": "Program kamus penterjemah terbaik di Linux dan Windows.",
      "url" :[
        "Laman Web: http://code.google.com/p/stardict-3/"],
      "authors" : [
        "Stardict3 Team"],
      "versi" : "3.0.4"
    },
    {
      "age": 12, 
      "id": "libreoffice",
      "genre": "office", 
      "imageUrl": "img/Komodo/apps/scalable/libreoffice-main.svg", 
      "name": "LibreOffice",
      "snipset": "", 
      "info": "LibreOffice adalah 'powerful office suite', antarmuka yang bersih, tool yang lengkap. LibreOffice terdiri dari beberapa aplikasi, diantarany: Writer, pengolah kata, Calc, aplikasi spreasheet, Impress, mesin presentasi, Menggambar, menggambar dan aplikasi flowcharting, Base, database kami dan frontend database, dan matematika untuk mengedit matematika.",
      "url" :[
        "Laman Web: http://www.libreoffice.org"],
      "authors" : [
        "The Document Foundation"],
      "versi" : "4.1.4"
    },
    {
      "age": 13, 
      "id": "evolution",
      "genre": "office", 
      "imageUrl": "img/Komodo/apps/scalable/evolution.svg", 
      "name": "Evolution",
      "snipset": "",
      "info": "Aplikasi manajemen informasi pribadi terintegrasi dengan surel, kalender dan buku kontak.",
      "url" :[
        "Laman Web: http://wiki.gnome.org/Apps/Evolution"],
      "authors" : [
        "Matthew Barnes <mbarnes@redhat.com>",
        "Milan Crha <mcrha@redhat.com>",
        "Fabiano FidÍncio <fabiano@fidencio.org>"],
      "versi" : "3.10.3"
    }
  ]};
});

WarsiJson.factory('DaftarRepo', function(){
  return {
    name : [
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
  ]};
});