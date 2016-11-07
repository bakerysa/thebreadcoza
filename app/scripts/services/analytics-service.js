(function () { 

	'use strict';

	/**
	 * @ngdoc function
	 * @name bakeryApp.controller:AnalyticsService
	 * @description
	 * # AnalyticsService
	 * Service of the projects for bakeryApp
	 */
	angular.module('bakeryApp')
	  .service('AnalyticsService', function(){

        /* jshint ignore:start */
        this.recordPageview = function(url) {
            ga('set', 'page', url);
            ga('send', 'pageview');
          };

        /* jshint ignore:end */

         
        });

  })(); 
