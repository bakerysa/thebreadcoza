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
          $root.ngSizeWatch = [];

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

              if (i === exists) {

                  $scope.size = {
                      width: $root.ngSizeDimensions[i][0],
                      height: $root.ngSizeDimensions[i][1]
                  };

                  var $elements = $('.header, .footer');
                  var $header = $('.header');
                  var $footer = $('.footer');
                  $elements.addClass('shared-bg');
                  var backgroundScrollAux = "auto " + $scope.size.height + "px";
                  var gradientCalc = function(){
                    var scrollTop = $(window).scrollTop();
                    var viewportOffset = scrollTop + $(window).height();
                    $scope.backgroundPositionAuxHeader = '0px -' + scrollTop + 'px';
                    $scope.backgroundPositionAuxFooter = '0px -' + viewportOffset + 'px';
                    $header.css({'background-size': backgroundScrollAux, 'background-position': $scope.backgroundPositionAuxHeader});
                    $footer.css({'background-size': backgroundScrollAux, 'background-position': $scope.backgroundPositionAuxFooter});
                  }
                  // Run this whenever window height changes
                  
                  gradientCalc();
                  // Run this whenever user scrolls
                  $document.on('scroll', _.throttle(function() {
                    gradientCalc();
                  }));
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

  })

  .directive('colorChange', function ($rootScope, $timeout, $state) { 
      return {
          restrict: "AE",
          link: function(scope, elem, attr, ctrl) {


                $timeout(function(){

                var $elements = $('.header, .footer, .primarycontent');
                var mouseTrap = function (aClass, aAdd, aMouseMethod) {
                  $elements.toggleClass(aClass, aAdd);
                  $rootScope[aMouseMethod]();
                };
                var colorChangeNew = function (aElementClassName, aClass, aMouseOver, aMouseOut) {
                  var $element = $(aElementClassName);
                  $element.mouseover(function () {
                    mouseTrap(aClass, true, aMouseOver);
                  });
                  $element.mouseout(function () {
                    mouseTrap(aClass, false, aMouseOut);
                  });
                };

                colorChangeNew('.js-network', 'h-bg-1', 'loadGoogleMap1', 'loadGoogleMap1');
                colorChangeNew('.js-careers', 'h-bg-2', 'loadGoogleMap2', 'loadGoogleMap1');
                colorChangeNew('.js-team', 'h-bg-3', 'loadGoogleMap3', 'loadGoogleMap1');

                });

                // $timeout(function(){

                //     var svgNS = "http://www.w3.org/2000/svg";  

                //     var total = 50;
                //     var w = $("#confettiSVG").width();
                //     var h = $("#confettiSVG").height();

                //     var i;
                     
                //     for (i=0; i<total; i++){ 
                //     var myCircle = document.createElementNS(svgNS,"rect"); 
                //     myCircle.setAttributeNS(null,"class","dot"); 
                //     myCircle.setAttributeNS(null,"width",7);
                //       myCircle.setAttributeNS(null,"height",12);
                //     document.getElementById("confettiSVG").appendChild(myCircle);  
                //     TweenMax.set($(".dot")[i],{x:Random(w),y:0,rotation:Random(180) ,opacity:1,scale:Random(0.5)+0.5,fill:"hsl(" + random(0,0) + ",0%,0%)"});
                //      animm($(".dot")[i]);
                //      }
                     
                //      function animm(elm){   
                //      TweenMax.to(elm,Random(5)+4,{y:h,ease:Linear.easeNone,repeat:-1, delay:-5});
                //      TweenMax.to(elm,Random(5)+1,{x:'+=70', repeat:-1,yoyo:true,ease:Sine.easeInOut})
                //      TweenMax.to(elm,Random(5)+1,{scaleX:0.2,rotation:Random(360), repeat:-1,yoyo:true,ease:Sine.easeInOut})
                //      TweenMax.to(elm,Random(1)+0.5,{opacity:0, repeat:-1,yoyo:true,ease:Sine.easeInOut})
                //      };

                //     function Random (max) {
                //     return Math.random()*max;
                //     }

                //     function random(min, max) {
                //     return min + Math.floor( Math.random() * (max - min));
                //     }


                // });

                

  
          }
     };
  });


})();
