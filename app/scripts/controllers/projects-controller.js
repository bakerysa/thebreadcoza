(function () { 

	'use strict';

	/**
	 * @ngdoc function
	 * @name bakeryApp.controller:ProjectsCtrl
	 * @description
	 * # ProjectsCtrl
	 * Controller of the bakeryApp
	 */
	angular.module('bakeryApp')
	  	.controller('ProjectsCtrl', ['$scope', 'ProjectService', '$timeout', function($scope, ProjectService, $timeout){

        	$scope.projects = ProjectService.list(); 

            var tl = new TimelineMax({
              paused: true
            }),

            

    
            projectTransition = function () {
          
                  tl.to('.js-body', 0.7, {
                    scrollTo:{
                        y: 0
                    }, 
                    ease:Power3.easeInOut
                 });

                tl.play();
                  // $(".content-area").addClass( "transitionClass" );
                  $timeout(function() {
                      $(".js-body").removeClass( "transitionClass" );
                  }, 0.7);

            };


             $scope = angular.extend($scope, {
              projectTransition : projectTransition
             });

        	// projectTransition = function () {
      

        	// };


        	//  $scope = angular.extend($scope, {
        	 	
        	//  });


    	}])


        
       .controller('imageGrid', ['$scope','imageService','angularGridInstance', function ($scope,imageService,angularGridInstance) {
          imageService.then(function(data){
               data.data.items.forEach(function(obj){
                   var desc = obj.description,
                       width = desc.match(/width="(.*?)"/)[1],
                       height = desc.match(/height="(.*?)"/)[1];
                   obj.actualHeight  = height;
                   obj.actualWidth = width;
               });
              $scope.pics = data.data.items;
           });
           $scope.refresh = function(){
               angularGridInstance.gallery.refresh();
           };
       }]);


})(); 
