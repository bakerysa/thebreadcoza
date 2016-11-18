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
                    name: 'Graphic Designer',
                    cover: '../../images/projects/01/cover.png',
                    snippet: 'Some awesome cool description comes here about being a graphic designer. Some awesome cool description comes here about being a graphic designer.',
                    details: "<p>We specialise in building the perfect team around each project that comes our way. Our core team heads up each department and works with a multitude of freelance creative partners to find solutions to each challenge.</p> <p>We specialise in building the perfect team around each project that comes our way. Our core team heads up each department and works with a multitude of freelance creative partners to find solutions to each challenge.</p> <p>We specialise in building the perfect team around each project that comes our way. Our core team heads up each department and works with a multitude of freelance creative partners to find solutions to each challenge.</p> <p>We specialise in building the perfect team around each project that comes our way. Our core team heads up each department and works with a multitude of freelance creative partners to find solutions to each challenge.</p>",
                    specs: "<p><strong>Requirements:</strong><ul><li>1-3 year experience working with Javascript</li><li>Experience with building Wordpress websites</li><li>Good working knowledge of HTML and CSS (including LESS or SASS, etc)</li><li>Good understanding of Version Control </li><li>Good understanding of responsive design and media queries, etc</li></ul></p>"
                },
                {
                    id: 2,
                    name: 'Developer',
                    cover: '../../images/projects/01/cover.png',
                    snippet: 'Some awesome cool description comes here about being a graphic designer. Some awesome cool description comes here about being a graphic designer.',
                    details: "<p>We specialise in building the perfect team around each project that comes our way. Our core team heads up each department and works with a multitude of freelance creative partners to find solutions to each challenge.</p> <p>We specialise in building the perfect team around each project that comes our way. Our core team heads up each department and works with a multitude of freelance creative partners to find solutions to each challenge.</p> <p>We specialise in building the perfect team around each project that comes our way. Our core team heads up each department and works with a multitude of freelance creative partners to find solutions to each challenge.</p> <p>We specialise in building the perfect team around each project that comes our way. Our core team heads up each department and works with a multitude of freelance creative partners to find solutions to each challenge.</p>",
                    specs: "<p><strong>Requirements:</strong><ul><li>1-3 year experience working with Javascript</li><li>Experience with building Wordpress websites</li><li>Good working knowledge of HTML and CSS (including LESS or SASS, etc)</li><li>Good understanding of Version Control </li><li>Good understanding of responsive design and media queries, etc</li></ul></p>"
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
