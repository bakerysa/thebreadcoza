(function () {

	'use strict';

	/**
	 * @ngdoc function
	 * @name bakeryApp.controller:HeaderCtrl
	 * @description
	 * # HeaderCtrl
	 * Controller of the bakeryApp
	 */
	angular.module('bakeryApp')
		.controller('HeaderCtrl', ['$scope', '$rootScope', '$state', '$document', '$location', '$timeout', function($scope, $rootScope, $state, $document, $location, $timeout){

					
					console.log('header called');

					$rootScope.primaryColor = 'black';
					$rootScope.secondaryColor = 'white';


					$scope.theme1 = function (){
						$rootScope.primaryColor = '#ffd5c0';
					};

					$scope.theme2 = function (){
						$rootScope.primaryColor = '#fff';
					};

					var tl = new TimelineMax({
					    paused: true
					});

					tl.to(".header", 0.3, {
					    top: 0,
					    css: {
					    	// 'padding-top': '10px',
					    	'padding-bottom': '10px',
					    },
					    ease: Circ.easeInOut
					},"=-0.3")

					.to(".js-logo", 0.3, {
					    height: 55,
					    ease: Circ.easeInOut
					}, "=-0.3")

					.to(".nav ul li", 0.3, {
					    css: {
					    	'padding-top': '1.2em'
					    },
					    ease: Circ.easeInOut
					}, "=-0.3");


					$document.scroll(function() {
					  if ($document.scrollTop() >= 50) {
					  	tl.play();
					  	$('.header').addClass('shadow');
					  	$('.footer').addClass('shadow');
					  } else {
					  	tl.reverse();
					  	$('.header').removeClass('shadow');
					  	$('.footer').removeClass('shadow');
					  }
					});

					$rootScope.goHome = function() {
						$state.go('app');
						var tid = setInterval( function () {
						    if ( document.readyState !== 'complete' ) return;
						    clearInterval( tid );
						    TweenMax.to(window, 0.7, {scrollTo:{y: $('#home').position().top+20},  autoKill : false, ease:Circ.easeInOut});
						}, 100 );
					};

					$rootScope.goHomeQuick = function() {
						$state.go('app');
						var tid = setInterval( function () {
						    if ( document.readyState !== 'complete' ) return;
						    clearInterval( tid );
						    TweenMax.to(window, 0, {scrollTo:{y: $('#home').position().top+20},  autoKill : false, ease:Circ.easeInOut});
						}, 100 );
					};


					// WHAT WE DO

					$rootScope.goWhatWeDo = function() {
						$state.go('app.whatWeDo');
						var tid = setInterval( function () {
						    if ( document.readyState !== 'complete' ) return;
						    clearInterval( tid );
						    TweenMax.to(window, 0.7, {scrollTo:{y: $('#what-we-do').position().top-95},  autoKill : false, ease:Circ.easeInOut});
						}, 100 );
					};

						// Design

						$rootScope.alignWhatWeDo = function() {
							var tid = setInterval( function () {
							    if ( document.readyState !== 'complete' ) return;
							    clearInterval( tid );
							    TweenMax.to(window, 0.7, {scrollTo:{y: $('#what-we-do').position().top-95},  autoKill : false, ease:Circ.easeInOut});
							}, 100 );
						};



					// HOW WE DO IT

					$rootScope.goHowWeDoIt = function() {
						$state.go('app.howWeDoIt');
						var tid = setInterval( function () {
						    if ( document.readyState !== 'complete' ) return;
						    clearInterval( tid );
						    TweenMax.to(window, 0.7, {scrollTo:{y: $('#how-we-do-it').position().top-80},  autoKill : false, ease:Circ.easeInOut});
						}, 100 );
					};

					// OUR WORK

					$rootScope.goWork = function() {
						$state.go('app.work');
						var tid = setInterval( function () {
						    if ( document.readyState !== 'complete' ) return;
						    clearInterval( tid );
						    TweenMax.to(window, 0.7, {scrollTo:{y: $('#work').position().top-75},  autoKill : false, ease:Circ.easeInOut});
						}, 100 );
					};

					// CONTACT

					$rootScope.goContact = function() {
						$state.go('app.contact');
						var tid = setInterval( function () {
						    if ( document.readyState !== 'complete' ) return;
						    clearInterval( tid );
						    TweenMax.to(window, 0.7, {scrollTo:{y: $('#contact').position().top-80},  autoKill : false, ease:Circ.easeInOut});
						}, 100 );
					};


					$('.js-logo').featherlight({
					    beforeOpen: function(event){
					        $("#breadVSbakery").css("display", "block");
					    },
					    beforeClose: function(event){
					        $("#breadVSbakery").css("display", "none");
					    }
					});


					$rootScope.goTop = function() {
						$timeout(function(){
							TweenMax.to(window, 0, {scrollTo:{y: 0},  autoKill : false, ease:Circ.easeInOut});
							console.log('goTop() called');
						}, 0.5);
					};

					
						$('#nav-icon').click(function(){
							$(this).toggleClass('open');
						});

						$scope.toggleMenu = function() {
								var menuBox = document.getElementById('mobile-menu');
								if (menuBox.style.display == "block") {
										menuBox.style.display = "none";
								} else {
										menuBox.style.display = "block";
								}
						};

						$('#mobile-menu ul li a').click(function(){
	  						document.getElementById('mobile-menu').style.display = 'none';
							$('#nav-icon').toggleClass('open');
						});

						// $scope.hideMenu = function() {

						// }


	  }]);

  })();
