(function () { 
  
  'use strict';

  /**
  * @ngdoc function
  * @name bakeryApp.directive:BackgroundImageDirective
  * @description
  * # BackgroundImageDirective
  * BackgroundImageDirective of the bakeryApp
  */
  angular.module('bakeryApp')

  // BACKGROUND IMAGE DIRECTIVE - COVER
  .directive('backImg', function(){
    return function(scope, element, attrs){
        attrs.$observe('backImg', function(value) {
            element.css({
                'background-image': 'url(' + value +')',
                'background-size' : 'cover' 
            });
        });
      };
  })

  // BACKGROUND IMAGE DIRECTIVE - CONTAIN
  .directive('backImgContain', function(){
    return function(scope, element, attrs){
        attrs.$observe('backImgContain', function(value) {
            element.css({
                'background-image': 'url(' + value +')',
                'background-size' : 'contain',
                'background-repeat': 'no-repeat',
                'background-position': 'center center'
            });
        });
    };
  })

  // MAINTAIN ASPECT RATIO
  .directive('maintainAspectRatio', function () {
      return {
          restrict: "A",
          link: function (scope, element) {
              scope.getWidth = function () {
                  return $(element).width();
              };
              scope.$watch(scope.getWidth, function (width) {
                  $(element).height(1 * width);
              });
          }
     };
  })

  .directive('ngSize', ['$rootScope', '$state', '$document', '$timeout', function($root, $state, $document, $timeout) {
    return {
      scope: {
          size: '=?ngSize'
      },
      link: function($scope, element, attrs) {


          $root.ngSizeDimensions  = (angular.isArray($root.ngSizeDimensions)) ? $root.ngSizeDimensions : [];
          $root.ngSizeWatch       = (angular.isArray($root.ngSizeWatch)) ? $root.ngSizeWatch : [];

          var handler = function() {
              angular.forEach($root.ngSizeWatch, function(el, i) {
                  // Dimensions Not Equal?
                  if ($root.ngSizeDimensions[i][0] != el.offsetWidth || $root.ngSizeDimensions[i][1] != el.offsetHeight) {
                      // Update Them
                      $root.ngSizeDimensions[i] = [el.offsetWidth, el.offsetHeight];
                      // Update Scope?
                      $root.$broadcast('size::changed', i);
                  }
              });
          };

          // Add Element to Chain?
          var exists = false;
          angular.forEach($root.ngSizeWatch, function(el, i) { if (el === element[0]) exists = i });

          // Ok.
          if (exists === false) {
              $root.ngSizeWatch.push(element[0]);
              $root.ngSizeDimensions.push([element[0].offsetWidth, element[0].offsetHeight]);
              exists = $root.ngSizeWatch.length-1;
          }

          // Update Scope?
          $scope.$on('size::changed', function(event, i) {
            
              // Relevant to the element attached to *this* directive
              console.log('i is ' + i);
              console.log('exists is ' + exists);
              if (i === exists) {
                  $scope.size = {
                      width: $root.ngSizeDimensions[i][0],
                      height: $root.ngSizeDimensions[i][1]
                  };

                  console.log('inner window height ' + $scope.size.height);
                  $scope.gradientCalc = function(){
                    $scope.viewportOffset = $scope.scrollTop() + $(window).height();
                    $scope.backgroundPositionAuxHeader = '0px -' + $scope.scrollTop() + 'px';
                    $scope.backgroundPositionAuxFooter = '0px -' + $scope.viewportOffset + 'px';

                    $('.header').css({'background-size': $scope.backgroundScrollAux, 'background-position': $scope.backgroundPositionAuxHeader});
                    $('.footer').css({'background-size': $scope.backgroundScrollAux, 'background-position': $scope.backgroundPositionAuxFooter});
                  }
                  // Run this whenever window height changes
                  $( ".header" ).addClass( "shared-bg" );
                  $( ".footer" ).addClass( "shared-bg" );
                  $scope.backgroundScrollAux = "auto " + $scope.size.height + "px";
                  $scope.scrollTop = function(){
                    return $(window).scrollTop();
                  }
                  $scope.gradientCalc();
                  // Run this whenever user scrolls
                  $document.bind('scroll', function () {
                    $scope.gradientCalc();
                  });
              }
              
          });


          // Refresh: 100ms
          if (!window.ngSizeHandler) window.ngSizeHandler = setInterval(handler, 100);

          // Window Resize?
          // angular.element(window).on('resize', handler);

      }
    };
  }])

  .directive('scrollTo', function ($rootScope, $timeout, $state) { 
      return {
          restrict: "AE",
          link: function(scope, elem, attr, ctrl) {


              $timeout(function(){

                  if ($state.is('app.contact')) {
                        $rootScope.goContact();
                  } else if ($state.is('app.work')) {
                        $rootScope.goWork();
                  } else if ($state.is('app.howWeDoIt')) {
                        $rootScope.goHowWeDoIt();
                  } else if ($state.is('app.whatWeDo')) {
                        $rootScope.goWhatWeDo();
                  } else if ($state.is('app.design')) {
                        $rootScope.alignWhatWeDo();
                  } else if ($state.is('app.experiences')) {
                        $rootScope.alignWhatWeDo();
                  } else if ($state.is('app.connections')) {
                        $rootScope.alignWhatWeDo();
                  } else if ($state.is('app.spaces')) {
                        $rootScope.alignWhatWeDo();
                  }
                
                   
              });
 
          }
     };
  })

  
  .directive('magnificPopup', function ($timeout, $state) { 
      return {
          restrict: "AE",
          link: function(scope, elem, attr, ctrl) {


                // This will create a single gallery from all elements that have class "gallery-item"
                $('.project-images').each(function() { // the containers for all your galleries
                  $(this).magnificPopup({
                      delegate: 'a', // the selector for gallery item
                      type: 'image',
                      gallery: {
                        enabled:true
                      }
                  });
              });
  
          }
     };
  });


})(); 
