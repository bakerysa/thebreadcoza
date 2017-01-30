(function () {

	'use strict';

	/**
	 * @ngdoc function
	 * @name bakeryApp.controller:PrimaryContentCtrl
	 * @description
	 * # PrimaryContentCtrl
	 * Controller of the bakeryApp
	 */
	angular.module('bakeryApp')
		.controller('PrimaryContentCtrl', ['$rootScope', '$scope', '$state', '$document', 'ProjectService', function($rootScope, $scope, $state, $document, ProjectService){

			$scope.projects = ProjectService.list();











			// END GOOGLE MAPS

	  }]);

  })();
