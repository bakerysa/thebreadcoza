(function () {

	'use strict';

	/**
	 * @ngdoc function
	 * @name bakeryApp.controller:ProjectsDetailCtrl
	 * @description
	 * # ProjectsDetailCtrl
	 * Controller of the bakeryApp
	 */
	angular.module('bakeryApp')
	  	.controller('ProjectsDetailCtrl', ['$scope', '$sce', '$stateParams', '$timeout', 'ProjectService', function($scope, $sce, $stateParams, $timeout, ProjectService){

	  		console.log('project details called')

	  		   // Define selectedProject
          	$scope.selectedProject = ProjectService.find($stateParams.id);
            $scope.projects = ProjectService.list();

          	$scope.nameHTML = $scope.selectedProject.name;
			      $scope.projectName = $sce.trustAsHtml($scope.nameHTML);

            $scope.descriptionHTML = $scope.selectedProject.description;
          	$scope.projectDescription = $sce.trustAsHtml($scope.descriptionHTML);

          	$scope.agencyHTML = $scope.selectedProject.agency;
          	$scope.projectAgency = $sce.trustAsHtml($scope.agencyHTML);

          	$scope.collaboratorsHTML = $scope.selectedProject.collaborators;
          	$scope.projectCollaborators = $sce.trustAsHtml($scope.collaboratorsHTML);


          	$scope.clientHTML = $scope.selectedProject.client;
          	$scope.projectClient = $sce.trustAsHtml($scope.clientHTML);





        }]);

})();
