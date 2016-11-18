(function () {

	'use strict';

	/**
	 * @ngdoc function
	 * @name bakeryApp.controller:JobCtrl
	 * @description
	 * # JobCtrl
	 * Controller of the bakeryApp
	 */
	angular.module('bakeryApp')
        .controller('JobsCtrl', ['$scope', '$timeout', 'JobService', function($scope, $timeout, JobService){

            			$scope.jobs = JobService.list();

	  }]);

  })();
