/*
 * grunt-files-check
 * https://github.com/matthis-perrin/grunt-files-check
 *
 * Copyright (c) 2013 Matthis Perrin
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  grunt.registerMultiTask('files_check', 'Your task description goes here.', function() {

    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      excluded: [],
      pattern: /^$/
    });

    // Iterate over all specified file groups.
    this.files.forEach(function(f) {

      // Filtering of the files described in the `src` option by 
      // removing those specified in the `excluded` option and those
      // which do not exist.
      var files = f.src.filter(function(filepath) {
        if (!grunt.file.exists(filepath)) {
          return false;
        }
        else if (inArray(filepath, options.excluded)) {
          return false;
        }
        else {
          return true;
        }
      });

    });

    return true;
  });




  // ----------------------------------------
  // Return true if `value` is present in the
  // array `array`
  // ----------------------------------------
  function inArray(value, array) {

    if (typeof array === 'undefined') {
      return false;
    }

    for (var i = 0; i < array.length; i++) {
      if (value === array[i]) {
        return true;
      }
    }

    return false;

  }

};
