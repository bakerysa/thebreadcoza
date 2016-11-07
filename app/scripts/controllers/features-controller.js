(function () {

	'use strict';

	/**
	 * @ngdoc function
	 * @name bakeryApp.controller:WorkCtrl
	 * @description
	 * # WorkCtrl
	 * Controller of the bakeryApp
	 */
	angular.module('bakeryApp')
        .controller('WorkCtrl', ['$scope', 'ProjectService', function($scope, ProjectService){


            $scope.projects = ProjectService.list();

	  }]);

  })();
