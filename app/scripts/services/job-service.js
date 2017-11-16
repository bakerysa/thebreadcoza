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
                   name: 'Social Media Manager',
                   cover: '../../images/social-media-manager.png',
                   snippet: "We are looking for a talented Social media manager to administer our clients social media accounts.",
                   details: "<p>We are looking for a talented Social media manager to administer our clients social media accounts. You will be responsible for creating original content, curating content, managing posts and responding to followers. </p><p>As a Social media manager, we expect you to be up-to-date with the latest digital technologies and social media trends. You should have excellent communication skills and be able to express views and deliver information creatively.</p><p>Applicants need to be comfortable working with various teams, sitting in on meetings, and be able to communicate directly with clients. Our office environment is flexible while our attention to detail is obsessive. Applicants must be able to communicate their ideas and need to take a proactive approach to work.</p><p>Applicants will be judged initially on their portfolio and their bio of less than 300 words.</p>",
                   specs: "<p><strong>Requirements:</strong><ul><li>Good understanding of Social Media platforms, specifically Facebook, Twitter and Instagram. </li><li>Know how to write effective copy in a lot of different styles, for websites, Twitter, Facebook, and Instagram. </li><li>Creating, and curating of relevant, high quality content for a number of different clients</li><li>Able to build reporting frameworks to evaluate return on investment on the various platforms.</li><li>Analysing social media insights to guide future social media campaigns.</li><li>Developing a content calendar across all platforms ensuring a constant supply of relevant content.</li><li>Oversee social media accounts</li><li>Welcomes constructive criticism with an open mind, always seeking to improve work</li></ul></p>",
                   email: "hello@thebread.co.za"
               },
               {
                    id: 2,
                    name: 'Content Creator',
                    cover: '../../images/content-creator.png',
                    snippet: "We're looking for a content creator that will help develop and manage content needs for a number of our clients.",
                    details: "<p>The content creator will help develop and manage content needs for a number of our clients to ensure marketing and communication efforts across all channels meet strategic goals and addresses audience needs and behaviours to drive desired outcomes. This position will take the lead on producing content for all key business objectives and is accountable for managing the scope, timeliness, and quality of all projects executed on behalf of our clients.</p><p>The content creator and manager is responsible for the daily management of projects from inception to completion: strategising, scheduling production teams, assigning tasks, quality control, and the creation of photographic and video content.</p><p>Applicants need to be comfortable working with various teams, sitting in on meetings, and be able to communicate directly with clients. Our office environment is flexible while our attention to detail is obsessive. Applicants must be able to communicate their ideas and need to take a proactive approach to work.</p><p>Applicants will be judged initially on their portfolio and their bio of less than 300 words.</p>",
                    specs: "<p><strong>Requirements:</strong><ul><li>Partner with the content team to plan, execute, and complete projects according to deadlines and budgets</li><li>Serve as point of contact with client, manage client relationships and resolve client issues through excellent client service</li><li>Create photographic and video content</li><li>Oversee aspects of production, including video and image production, review process and client deliverables</li><li>Candidate must have knowledge of Adobe Creative Suite 6 or newer including Adobe Premiere Pro, Adobe After Effects, Adobe Illustrator, Adobe Photoshop, DSLR and professional video and still cameras, lighting, and audio recording; knowledge in compression rates, video and audio codecs, frame rates, standard dimensions and digital media formats</li><li>3-5 years production experience </li><li>Must have working knowledge of Adobe Creative Suite 6 or newer</li><li>Must be a proactive and have the ability to handle multiple projects simultaneously</li><li>STRONG online portfolio that includes examples of work</li><li>Must understand the full spectrum of the production process including camera operation, lighting, audio & editing</li><li>Welcomes constructive criticism with an open mind, always seeking to improve work</li><li>Flexible work times</li></ul></p>",
                    email: "hello@thebread.co.za"
                },
               {
                    id: 3,
                    name: 'UX Designer',
                    cover: '../../images/ux.png',
                    snippet: "We're looking for strong creative thinkers with excellent analytical skills and a deep understanding of how digital products work.",
                    details: "<p>We're looking for UX designers at Junior, Mid, and Senior levels. Applicants need to be comfortable working with various teams, sitting in on meetings, and working closely with our partner agency, The Bread. </p<p>Our office environment is flexible while our attention to detail is obsessive. Applicants must be able to communicate their ideas and need to take a proactive approach to work.</p><p>Passion for design and an ability to advocate for the user is a must. Applicants will be judged initially on their portfolio and their bio of less than 300 words. So make it good! </p>                    ",
                    specs: "<p><strong>Requirements:</strong><ul><li>Good understanding of UX Design processes</li><li>Experience with user journeys and flows</li><li>Experience with wireframing and prototyping</li><li>Strong ability to advocate for the end user</li><li>Design / Information degree or related degree advantageous </li></ul></p>",
                    email: "hello@bakery.co.za"
                },
                {
                    id: 4,
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
