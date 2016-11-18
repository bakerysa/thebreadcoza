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


	  		   // Define selectedProject
          	$scope.selectedProject = ProjectService.find($stateParams.id);


          	var nameHTML = $scope.selectedProject.name;
			$scope.projectName = $sce.trustAsHtml(nameHTML);

            var descriptionHTML = $scope.selectedProject.description;
          	$scope.projectDescription = $sce.trustAsHtml(descriptionHTML);

          	var agencyHTML = $scope.selectedProject.agency;
          	$scope.projectAgency = $sce.trustAsHtml(agencyHTML);

          	var collaboratorsHTML = $scope.selectedProject.collaborators;
          	$scope.projectCollaborators = $sce.trustAsHtml(collaboratorsHTML);


          	var clientHTML = $scope.selectedProject.client;
          	$scope.projectClient = $sce.trustAsHtml(clientHTML);





        }]);

})();
