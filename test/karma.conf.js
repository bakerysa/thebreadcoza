// Karma configuration
// http://karma-runner.github.io/0.12/config/configuration-file.html
// Generated on 2015-10-18 using
// generator-karma 1.0.0

module.exports = function(config) {
  'use strict';

  config.set({
    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // base path, that will be used to resolve files and exclude
    basePath: '../',

    // testing framework to use (jasmine/mocha/qunit/...)
    // as well as any additional frameworks (requirejs/chai/sinon/...)
    frameworks: [
      "jasmine"
    ],

    // list of files / patterns to load in the browser
    files: [
      // bower:js
      'bower_components/jquery/dist/jquery.js',
      'bower_components/angular/angular.js',
      'bower_components/bootstrap-sass-official/assets/javascripts/bootstrap.js',
      'bower_components/angular-animate/angular-animate.js',
      'bower_components/angular-resource/angular-resource.js',
      'bower_components/ui-router/release/angular-ui-router.js',
      'bower_components/underscore/underscore.js',
      'bower_components/greensock/src/uncompressed/TweenMax.js',
      'bower_components/slick-carousel/slick/slick.min.js',
      'bower_components/angular-slick/dist/slick.js',
      'bower_components/angulargrid/angulargrid.js',
      'bower_components/d3/d3.js',
      'bower_components/vega/vega.js',
      'bower_components/vega-lite/vega-lite.js',
      'bower_components/viscompass/compass.js',
      'bower_components/angular-scroll/angular-scroll.js',
      'bower_components/featherlight/release/featherlight.min.js',
      'bower_components/magnific-popup/dist/jquery.magnific-popup.js',
      'bower_components/angular-ui-router/release/angular-ui-router.js',
      'bower_components/angular-ui-router-anim-in-out/anim-in-out.js',
      'bower_components/ng-videosharing-embed/build/ng-videosharing-embed.min.js',
      'bower_components/jquery-duotone/jquery.duotone.js',
      'bower_components/fastclick/lib/fastclick.js',
      'bower_components/ngMeta/dist/ngMeta.js',
      // endbower
      "app/scripts/**/*.js",
      "test/mock/**/*.js",
      "test/spec/**/*.js"
    ],

    // list of files / patterns to exclude
    exclude: [
    ],

    // web server port
    port: 8080,

    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: [
      "PhantomJS"
    ],

    // Which plugins to enable
    plugins: [
      "karma-phantomjs-launcher",
      "karma-jasmine"
    ],

    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false,

    colors: true,

    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO,

    // Uncomment the following lines if you are using grunt's server to run the tests
    // proxies: {
    //   '/': 'http://localhost:9000/'
    // },
    // URL root prevent conflicts with the site root
    // urlRoot: '_karma_'
  });
};
