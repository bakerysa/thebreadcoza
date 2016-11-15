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

						console.log('JobsCtrl fired');
            $scope.jobs = JobService.list();
<<<<<<< HEAD
=======
            console.log('JobsCtrl fired');
            console.log($scope.jobs);
>>>>>>> 4ee647eae2677bd2f942e81477278b4b8c1fa70c

						console.log($scope.jobs);

	  }]);

  })();
