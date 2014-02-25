"use strict";

module.exports = function( grunt ) {

  require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

  grunt.initConfig({

    // configuracoes das tarefas

    watch: {
      css: {
        files: '../assets/sass/**/*' ,
        tasks: [ 'compass' ]
      },
      js: {
        files: '../assets/js/**/*',
        tasks: [ 'uglify' ]
      }
    },
    // Compile scss
    compass: {
      dist: {
        options: {
          /*force: true,
          config: '../assets/config.rb',
          outputStyle: 'compressed'*/
          sassDir: '../assets/sass',
          cssDir: '../assets/css',
          imagesDir: '../assets/img',
          boring: false,
          outputStyle: 'compressed',
        }
      }
    },

    // Concat and minify javascripts
    uglify: {
      options: {
        mangle: false
      },
      dist: {
        files: {
          '../build/js/app.min.js': [
            '../assets/js/app.js',
            '../assets/js/jquery.js',
            '../assets/js/jquery.suiting.js',
            '../assets/js/modernizr.js'
          ]
        }
      }
    },

  });

  // registrando tarefas
  grunt.registerTask( 'default', [ 'watch' ] );

};