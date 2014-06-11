/*
 * grunt-jenkins-svn-revision
 * https://github.com/facultymatt/grunt-jenkins-svn-revision
 *
 * Copyright (c) 2014 Matt Miller
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  var DESC = 'Adds revision property to package.json and bower.json using the Jenkins SVN revision number.';
  grunt.registerTask('jenkins_svn_revision', DESC, function(revision) {
    var opts = this.options({
      currentRevision: revision || process.env.SVN_REVISION || null,
      files: []
    });

    if (opts.currentRevision === null) {
      grunt.fatal('Can not find a currentRevision');
    }

    opts.files.forEach(function(file, idx) {
      var content = grunt.file.read(file);
      content.revision = opts.currentRevision;
      grunt.file.write(file, content);
      grunt.log.ok('currentRevision bumped to ' + opts.currentRevision);
    });

    grunt.verbose.writeln('Completed revision bumping.');

  });

};
