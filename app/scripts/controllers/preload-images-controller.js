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
                $scope.imageLocations = [
                    ( "../../images/pic1.jpg"),
                    ( "../../images/pic2.jpg"),
                    ( "../../images/pic3.jpg"),
                    ( "../../images/pic4.jpg"),
                    ( "../../images/pic5.jpg"),
                    ( "../../images/projects/01/thumb.jpg"),
                    ( "../../images/projects/02/thumb.jpg"),
                    ( "../../images/projects/03/thumb.jpg"),
                    ( "../../images/projects/04/thumb.jpg"),
                    ( "../../images/projects/05/thumb.jpg"),
                    ( "../../images/projects/06/thumb.jpg"),
                    ( "../../images/projects/07/thumb.jpg"),
                    ( "../../images/projects/08/thumb.jpg"),
                    ( "../../images/projects/09/thumb.jpg"),
                    ( "../../images/projects/10/thumb.jpg"),
                    ( "../../images/projects/11/thumb.jpg"),
                    ( "../../images/projects/12/thumb.jpg"),
                    ( "../../images/projects/13/thumb.jpg"),
                    ( "../../images/projects/14/thumb.jpg"),
                    ( "../../images/projects/15/thumb.jpg"),
                    ( "../../images/hov.png"),
                    ( "../../images/hwd.png"),
                    ( "../../images/hwd2.png"),
                    ( "../../images/partners/adriaanlouw.jpg"),
                    ( "../../images/partners/alimaumela.jpg"),
                    ( "../../images/partners/andilekhawphuna.jpg"),
                    ( "../../images/partners/andypetersen.jpg"),
                    ( "../../images/partners/battalion.jpg"),
                    ( "../../images/partners/Beanstalk.jpg"),
                    ( "../../images/partners/CarlAscroft.jpg"),
                    ( "../../images/partners/chadgoddard.jpg"),
                    ( "../../images/partners/danieltingchong.jpg"),
                    ( "../../images/partners/DeanWestmore.jpg"),
                    ( "../../images/partners/eitanstern.jpg"),
                    ( "../../images/partners/FrypanMfula.jpg"),
                    ( "../../images/partners/jakebester.jpg"),
                    ( "../../images/partners/jakelipman.jpg"),
                    ( "../../images/partners/JohnnyKotze.jpg"),
                    ( "../../images/partners/Kalashnikovv.jpg"),
                    ( "../../images/partners/kitsisebati.jpg"),
                    ( "../../images/partners/mkayfrash.jpg"),
                    ( "../../images/partners/mustardpostproduction.jpg"),
                    ( "../../images/partners/mvelokhumalo.jpg"),
                    ( "../../images/partners/LaziMathebula.jpg"),
                    ( "../../images/partners/ninjabreadboy.jpg"),
                    ( "../../images/partners/Radio.jpg"),
                    ( "../../images/partners/richardbolland.jpg"),
                    ( "../../images/partners/rossmaxwell.jpg"),
                    ( "../../images/partners/siyamkaya.jpg"),
                    ( "../../images/partners/SuccessMaake.jpg"),
                    ( "../../images/partners/Thesis.jpg"),
                    ( "../../images/partners/tusamamba.jpg"),
                    ( "../../images/partners/we-are-awesome-film.jpg"),
                    ( "../../images/clients/ANATOMY.png"),
                    ( "../../images/clients/AUTONOMY.png"),
                    ( "../../images/clients/BELAIRE.png"),
                    ( "../../images/clients/LEVIS.png"),
                    ( "../../images/clients/PROTESTHIV.png"),
                    ( "../../images/clients/RAY-BAN.png"),
                    ( "../../images/clients/REDBULL.png"),
                    ( "../../images/clients/SMIRNOFF.png"),

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

