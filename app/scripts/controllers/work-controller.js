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
        .controller('WorkCtrl', ['$scope', '$timeout', 'ProjectService', function($scope, $timeout, ProjectService){

            $scope.projects = ProjectService.list();


            // $('.js-eff-work-img').duotone({
            //    gradientMap: '#000000, #ecede0'
            // });

            // $('.js-eff-wwd-img').duotone({
            //    gradientMap: '#000000, #fff5de'
            // });

        



	  }]);

  })(); 