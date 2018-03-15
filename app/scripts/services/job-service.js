(function() {

    'use strict';

    /**
     * @ngdoc function
     * @name bakeryApp.controller:JobService
     * @description
     * # JobService
     * Service of the careers for bakeryApp
     */
    angular.module('bakeryApp')
        .service('JobService', function() {
            /* jshint ignore:start */
            var jobs = [
               {
                    id: 1,
                    name: 'UX Designer',
                    cover: '../../images/ux.png',
                    snippet: "We're looking for strong creative thinkers with excellent analytical skills and a deep understanding of how digital products work.",
                    details: "<p>We're looking for UX designers at Junior, Mid, and Senior levels. Applicants need to be comfortable working with various teams, sitting in on meetings, and working closely with our partner agency, The Bread. </p<p>Our office environment is flexible while our attention to detail is obsessive. Applicants must be able to communicate their ideas and need to take a proactive approach to work.</p><p>Passion for design and an ability to advocate for the user is a must. Applicants will be judged initially on their portfolio and their bio of less than 300 words. So make it good! </p>                    ",
                    specs: "<p><strong>Requirements:</strong><ul><li>Good understanding of UX Design processes</li><li>Experience with user journeys and flows</li><li>Experience with wireframing and prototyping</li><li>Strong ability to advocate for the end user</li><li>Design / Information degree or related degree advantageous </li></ul></p>",
                    email: "hello@bakery.co.za"
                },
                {
                    id: 2,
                    name: 'Front-End Developer',
                    cover: '../../images/dev.png',
                    snippet: "We're always on the look out for front-end developers to join our team. We need strong systematic thinkers and problem solvers.",
                    details: "<p>We're looking for developers with some experience as well as a portfolio (no matter how small) or projects they have worked on. </p><p>Our office environment is flexible while our attention to detail is obsessive. Applicants must be able to communicate their ideas and need to take a proactive approach to work.</p><p>Send us a small selection of your work as well as a short paragraph on why you'd like to work with us.</p>",
                    specs: "<p><strong>Requirements:</strong><ul><li>Experience working with Javascript</li><li>Experience with JS MV* frameworks (eg. AngularJS / ReactJS / etc )</li><li>Good working knowledge of HTML and CSS (including LESS or SASS, etc)</li><li>Good understanding of Version Control </li><li>Good understanding of responsive design and media queries, etc</li></ul></p>",
                    email: "hello@bakery.co.za"
                }
            ];
            return {
                list: function() {
                    return jobs;
                },
                find: function(id) {
                    return _.find(jobs, function(job) {
                        return job.id == id;
                    });
                }
            };
            /* jshint ignore:end */
        });

})();
