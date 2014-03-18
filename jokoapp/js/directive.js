'use strict';

angular.module('mobile-Directive', [])
.directive('ngTap', function() {
  var isTouchDevice = !!("ontouchstart" in window);
  return function(scope, elm, attrs) {
    if (isTouchDevice) {
      var tapping = false;
      elm.bind('touchstart', function() { tapping = true; });
      elm.bind('touchmove', function() { tapping = false; });
      elm.bind('touchend', function() { 
        tapping && scope.$apply(attrs.ngTap);
      });
    } else {
      elm.bind('click', function() {
        scope.$apply(attrs.ngTap);
      });
    }
  };
})
.directive('jofade', function() {
    return {
      compile: function(elm) {
        $(elm).css('opacity', 0.1);

        return function(scope, elm, attrs) {
          $(elm).animate({ opacity : 1.0 }, 1500 );
        };
      }
    };
  })
.directive('uiModal', ['$timeout', function($timeout) {
  return {
    restrict: 'EAC',
    require: 'ngModel',
    link: function(scope, elm, attrs, model) {
      //helper so you don't have to type class="modal hide"
      elm.addClass('modal hide');
      scope.$watch(attrs.ngModel, function(value) {
        elm.modal(value && 'show' || 'hide');
      });
      //If bootstrap animations are enabled, listen to 'shown' and 'hidden' events
      elm.on(jQuery.support.transition && 'shown' || 'show', function() {
        $timeout(function() {
          model.$setViewValue(true);
          $('.jo-backdrop').fadeIn('slow');
        });
      });
      elm.on(jQuery.support.transition && 'hidden' || 'hide', function() {
        $timeout(function() {
          model.$setViewValue(false);
          $('.jo-backdrop').fadeOut('fast');
        });
      });
    }
  };
}])
.config(function($httpProvider) {
        var numLoadings = 0;
        var loadingScreen = $('<div class="loading"></div>')
            .appendTo($('body')).hide();
        $('.jo-ajax').fadeOut('fast');
        $httpProvider.responseInterceptors.push(function() {
            return function(promise) {
                numLoadings++;
                loadingScreen.show();
                var hide = function(r) { 
                  if (!(--numLoadings)){
                    loadingScreen.hide();
                    $('.jo-ajax').fadeOut('fast'); 
                    return r;
                  }else{
                    $('.jo-ajax').fadeIn('fast');
                    return r;
                  }
                };
                return promise.then(hide, hide);
            };
        });
    })
.service('mhsService', ['$log', function ($log) {
    var data = {
      nim : "",
      nama : "",
      angkatan : "",
      jurusan :""
    };

    return {
        getData:function () {
            return data;
        },
        setData:function (value) {
            data = value;
        },            

    };
}]);


