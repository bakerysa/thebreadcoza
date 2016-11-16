(function () {

	'use strict';

	/**
	 * @ngdoc function
	 * @name bakeryApp.controller:JobsDetailCtrl
	 * @description
	 * # JobsDetailCtrl
	 * Controller of the bakeryApp
	 */
	angular.module('bakeryApp')
	  	.controller('JobsDetailCtrl', ['$scope', '$sce', '$stateParams', '$timeout', 'JobService', function($scope, $sce, $stateParams, $timeout, JobService){


			$scope.jobs = JobService.list();

          	$scope.selectedJob = JobService.find($stateParams.id);

          	$scope.detailsHTML = $scope.selectedJob.details;
          	$scope.jobDetails = $sce.trustAsHtml($scope.detailsHTML);


        }]);

})();
