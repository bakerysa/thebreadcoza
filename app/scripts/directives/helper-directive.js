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

  .directive('gMaps', function ($rootScope, $timeout, $state) { 
      return {
          restrict: "AE",
          link: function(scope, elem, attr, ctrl) {

              scope.setMapStyles = function() {
                scope.map.setOptions({
                  styles: [{"featureType":"all","elementType":"geometry","stylers":[{"visibility":"simplified"},{"hue":"#000000"}]},{"featureType":"administrative","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"administrative.country","elementType":"labels.text.fill","stylers":[{"color":"#1d1d1d"}]},{"featureType":"administrative.province","elementType":"labels.text.fill","stylers":[{"color":scope.mapsColor},{"visibility":"on"}]},{"featureType":"administrative.province","elementType":"labels.text.stroke","stylers":[{"color":"#000000"},{"weight":"5.00"},{"visibility":"on"}]},{"featureType":"administrative.locality","elementType":"labels.text.fill","stylers":[{"color":"#000000"},{"visibility":"on"}]},{"featureType":"administrative.locality","elementType":"labels.text.stroke","stylers":[{"color":scope.mapsColor},{"visibility":"on"},{"weight":"5.00"}]},{"featureType":"administrative.neighborhood","elementType":"labels.text","stylers":[{"visibility":"on"}]},{"featureType":"administrative.neighborhood","elementType":"labels.text.fill","stylers":[{"visibility":"on"},{"color":"#000000"}]},{"featureType":"administrative.neighborhood","elementType":"labels.text.stroke","stylers":[{"color":scope.mapsColor},{"visibility":"on"},{"weight":"5.00"}]},{"featureType":"administrative.land_parcel","elementType":"geometry.fill","stylers":[{"saturation":"64"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":scope.mapsColor}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"geometry","stylers":[{"color":"#2c2c2c"}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#000000"}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"on"},{"color":scope.mapsColor}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#000000"}]},{"featureType":"road","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":scope.mapsColor},{"weight":"5.00"}]},{"featureType":"road","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"visibility":"on"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"visibility":"on"},{"color":"#000000"}]},{"featureType":"road.highway","elementType":"labels.text","stylers":[{"color":scope.mapsColor}]},{"featureType":"road.highway","elementType":"labels.text.fill","stylers":[{"color":scope.mapsColor}]},{"featureType":"road.highway","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"}]},{"featureType":"road.arterial","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"visibility":"on"}]},
                  {"featureType":"transit.station","elementType":"labels.icon","stylers":[{"visibility":"off"}]},
                  {"featureType":"transit.line","stylers":[{"color":"#000000"},{"visibility":"on"}]},
                  {"featureType":"transit.station.airport","elementType":"geometry.fill","stylers":[{"visibility":"simplified"},{"lightness":"4"},{"saturation":"-100"}]},{"featureType":"water","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"visibility":"on"}]}]
                });
              };

              // GOOGLE MAPS      
              $rootScope.loadGoogleMap1 = function(){
                scope.mapsColor = "#dff1d7";
                scope.setMapStyles();
                         
              };

              $rootScope.loadGoogleMap2 = function(){
                  scope.mapsColor = "#f3e0e0";
                  scope.setMapStyles();
              };

              $rootScope.loadGoogleMap3 = function(){
                scope.mapsColor = "#f3edcf";
                scope.setMapStyles();
              };

              (function () { 
              scope.mapsColor = "#dff1d7";
              var mapOptions = {
                  zoom: 16,
                  scrollwheel: false,
                  draggable: false,
                  disableDefaultUI: true,
                  center: new google.maps.LatLng(-26.194211,28.0347852),
                  styles: [{"featureType":"all","elementType":"geometry","stylers":[{"visibility":"simplified"},{"hue":"#000000"}]},{"featureType":"administrative","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"administrative.country","elementType":"labels.text.fill","stylers":[{"color":"#1d1d1d"}]},{"featureType":"administrative.province","elementType":"labels.text.fill","stylers":[{"color":scope.mapsColor},{"visibility":"on"}]},{"featureType":"administrative.province","elementType":"labels.text.stroke","stylers":[{"color":"#000000"},{"weight":"5.00"},{"visibility":"on"}]},{"featureType":"administrative.locality","elementType":"labels.text.fill","stylers":[{"color":"#000000"},{"visibility":"on"}]},{"featureType":"administrative.locality","elementType":"labels.text.stroke","stylers":[{"color":scope.mapsColor},{"visibility":"on"},{"weight":"5.00"}]},{"featureType":"administrative.neighborhood","elementType":"labels.text","stylers":[{"visibility":"on"}]},{"featureType":"administrative.neighborhood","elementType":"labels.text.fill","stylers":[{"visibility":"on"},{"color":"#000000"}]},{"featureType":"administrative.neighborhood","elementType":"labels.text.stroke","stylers":[{"color":scope.mapsColor},{"visibility":"on"},{"weight":"5.00"}]},{"featureType":"administrative.land_parcel","elementType":"geometry.fill","stylers":[{"saturation":"64"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":scope.mapsColor}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"geometry","stylers":[{"color":"#2c2c2c"}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#000000"}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"on"},{"color":scope.mapsColor}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#000000"}]},{"featureType":"road","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":scope.mapsColor},{"weight":"5.00"}]},{"featureType":"road","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"visibility":"on"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"visibility":"on"},{"color":"#000000"}]},{"featureType":"road.highway","elementType":"labels.text","stylers":[{"color":scope.mapsColor}]},{"featureType":"road.highway","elementType":"labels.text.fill","stylers":[{"color":scope.mapsColor}]},{"featureType":"road.highway","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"}]},{"featureType":"road.arterial","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"visibility":"on"}]},
                  {"featureType":"transit.station","elementType":"labels.icon","stylers":[{"visibility":"off"}]},
                  {"featureType":"transit.line","stylers":[{"color":"#000000"},{"visibility":"on"}]},
                  {"featureType":"transit.station.airport","elementType":"geometry.fill","stylers":[{"visibility":"simplified"},{"lightness":"4"},{"saturation":"-100"}]},{"featureType":"water","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"visibility":"on"}]}]
              };
              var mapElement = document.getElementById('map');
              scope.map = new google.maps.Map(mapElement, mapOptions);


              var marker = new google.maps.Marker({
                  position: new google.maps.LatLng(-26.194211,28.0347852),
                  map: scope.map,
                  title: 'The Bread'
              }); 

              })(); 


              $timeout(function(){

              var $elements = $('.header, .footer, .primarycontent');
              var mouseTrap = function (aMouseMethod) {
                $rootScope[aMouseMethod]();
              };
              var mapChange = function (aElementClassName, aMouseOver, aMouseOut) {
                var $element = $(aElementClassName);
                $element.mouseover(function () {
                  mouseTrap(aMouseOver);
                });
                $element.mouseout(function () {
                  mouseTrap(aMouseOut);
                });
              };


              mapChange('.js-network', 'loadGoogleMap1', 'loadGoogleMap1');
              mapChange('.js-careers', 'loadGoogleMap2', 'loadGoogleMap1');
              mapChange('.js-team', 'loadGoogleMap3', 'loadGoogleMap1');

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
                var mouseTrap = function (aClass, aAdd) {
                  $elements.toggleClass(aClass, aAdd);
                };
                var colorChangeNew = function (aElementClassName, aClass, aMouseOver, aMouseOut) {
                  var $element = $(aElementClassName);
                  $element.mouseover(function () {
                    mouseTrap(aClass, true);
                  });
                  $element.mouseout(function () {
                    mouseTrap(aClass, false);
                  });
                };

                colorChangeNew('.js-network', 'h-bg-1-aux');
                colorChangeNew('.js-careers', 'h-bg-2-aux');
                colorChangeNew('.js-team', 'h-bg-3-aux');

                });

                $timeout(function(){

                    var svgNS = "http://www.w3.org/2000/svg";  

                    var total = 50;
                    var w = $("#confettiSVG").width();
                    var h = $("#confettiSVG").height();

                    var i;
                     
                    for (i=0; i<total; i++){ 
                    var myCircle = document.createElementNS(svgNS,"rect"); 
                    myCircle.setAttributeNS(null,"class","dot"); 
                    myCircle.setAttributeNS(null,"width",7);
                      myCircle.setAttributeNS(null,"height",12);
                    document.getElementById("confettiSVG").appendChild(myCircle); 
                    TweenMax.set($(".dot")[i],{x:Random(w),y:0,rotation:Random(180) ,opacity:1,scale:Random(0.5)+0.5,fill:"hsl(" + random(0,0) + ",0%,0%)"});
                     animm($(".dot")[i]);
                     }
                     
                     function animm(elm){   
                     TweenMax.to(elm,Random(5)+4,{y:h,ease:Linear.easeNone,repeat:-1, delay:-5});
                     TweenMax.to(elm,Random(5)+1,{x:'+=70', repeat:-1,yoyo:true,ease:Sine.easeInOut})
                     TweenMax.to(elm,Random(5)+1,{scaleX:0.2,rotation:Random(360), repeat:-1,yoyo:true,ease:Sine.easeInOut})
                     TweenMax.to(elm,Random(1)+0.5,{opacity:0, repeat:-1,yoyo:true,ease:Sine.easeInOut})
                     };

                    function Random (max) {
                    return Math.random()*max;
                    }

                    function random(min, max) {
                    return min + Math.floor( Math.random() * (max - min));
                    }


                },500);

                

  
          }
     };
  });


})();
