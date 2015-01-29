'use strict';

var config = require('./config');

var watch = {
  scripts: {
    files: [config.src + '/**/*.js'],
    tasks: ['jshint:scripts', 'browserify', 'mocha_phantomjs']
  },
  tests: {
    files: [config.test + '/*.html', config.test + '/**/*.js'],
    tasks: [ 'jshint:tests', 'browserify', 'mocha_phantomjs']
  },
  gruntfile: {
    files: ['Gruntfile.js'],
    tasks: ['jshint:gruntfile']
  }
};

module.exports = watch;