(function () { 

    'use strict';

    /**
     * @ngdoc function
     * @name bakeryApp.AppController
     * @description
     * # AppController
     * Controller of the bakeryApp
     */
    angular.module('bakeryApp')
        .controller(
            "AppController",
            function( $rootScope, $scope, $state, $location, preloader ) {

                // I keep track of the state of the loading images.
                $scope.isLoading = true;
                $scope.isSuccessful = false;
                $scope.percentLoaded = 0;
                // I am the image SRC values to preload and display./
                // --
                // NOTE: "cache" attribute is to prevent images from caching in the
                // browser (for the sake of the demo).
<<<<<<< HEAD
                $scope.imageLocations = [
                    ( "https://i.ytimg.com/vi/c7oV1T2j5mc/maxresdefault.jpg?v=1&cache=" + ( new Date() ).getTime() ),
                    ( "https://i.ytimg.com/vi/c7oV1T2j5mc/maxresdefault.jpg?v=2&cache=" + ( new Date() ).getTime() ),
                    ( "https://i.ytimg.com/vi/c7oV1T2j5mc/maxresdefault.jpg?v=3&cache=" + ( new Date() ).getTime() ),
                    ( "https://i.ytimg.com/vi/c7oV1T2j5mc/maxresdefault.jpg?v=4&cache=" + ( new Date() ).getTime() ),
                    ( "https://i.ytimg.com/vi/c7oV1T2j5mc/maxresdefault.jpg?v=5&cache=" + ( new Date() ).getTime() ),
                    ( "https://i.ytimg.com/vi/c7oV1T2j5mc/maxresdefault.jpg?v=6&cache=" + ( new Date() ).getTime() ),
=======

                // $scope.imageLocations = [
                //     ( "https://i.ytimg.com/vi/c7oV1T2j5mc/maxresdefault.jpg?v=1&cache=" + ( new Date() ).getTime() ),
                //     ( "https://i.ytimg.com/vi/c7oV1T2j5mc/maxresdefault.jpg?v=2&cache=" + ( new Date() ).getTime() ),
                //     ( "https://i.ytimg.com/vi/c7oV1T2j5mc/maxresdefault.jpg?v=3&cache=" + ( new Date() ).getTime() ),
                //     ( "https://i.ytimg.com/vi/c7oV1T2j5mc/maxresdefault.jpg?v=4&cache=" + ( new Date() ).getTime() ),
                //     ( "https://i.ytimg.com/vi/c7oV1T2j5mc/maxresdefault.jpg?v=5&cache=" + ( new Date() ).getTime() ),
                //     ( "https://i.ytimg.com/vi/c7oV1T2j5mc/maxresdefault.jpg?v=6&cache=" + ( new Date() ).getTime() ),
                // ];
                $scope.imageLocations = [
                    ( "https://i.ytimg.com/vi/c7oV1T2j5mc/maxresdefault.jpg?v=1&cache=" )
>>>>>>> 4ee647eae2677bd2f942e81477278b4b8c1fa70c
                ];
                // Preload the images; then, update display when returned.
                preloader.preloadImages( $scope.imageLocations ).then(
                    function handleResolve( imageLocations ) {
                        // Loading was successful.
                        $scope.isLoading = false;
                        $scope.isSuccessful = true;
                        imageLocations = imageLocations;
                    },
                    function handleReject( imageLocation ) {
                        // Loading failed on at least one image.
                        $scope.isLoading = false;
                        $scope.isSuccessful = false;
                        console.error( "Image Failed", imageLocation );
                        console.info( "Preload Failure" );
                    },
                    function handleNotify( event ) {
                        $scope.percentLoaded = event.percent;
                    }
                );

            }
        );


})(); 

