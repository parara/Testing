/*
$(document).ready(function () {
       tanggal();
    });
*/
function testing() 	{ 
  //document.writeln('Hello, world!');
  var hanoi = function hanoi(disc, src, aux, dst) {
         if (disc > 0) {
             hanoi(disc - 1, src, dst, aux);
             document.writeln('Move disc ' + disc +
                     ' from ' + src + ' to ' + dst);
             hanoi(disc - 1, aux, src, dst);
    }
  };
  
  hanoi(3, 'Src', 'Aux', 'Dst');
  //(Apps.injek());
  var new_date = new Date();
  document.writeln(new_date);

}
function tanggal(){
  var new_date = new Date();
  document.writeln(new_date);
}