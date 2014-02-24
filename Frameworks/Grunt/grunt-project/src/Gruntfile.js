"use strict";

module.exports = function( grunt ) {

  grunt.initConfig({
    // Watch
    watch: {
      css: {
        files: [ '../assets/scss/**/*' ],
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
          force: true,
          config: 'config.rb',
          outputStyle: 'compressed'
        }
      }
    },
    uglify: {
      options: {
        mangle: false
      },
      dist: {
        files: {
          '../build/js/app.min.js': [
            '../assets/js/app.js'
          ]
        }
      }
    },
    // configuracoes das tarefas

  });

  // carregando plugins
  require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);
  grunt.loadNpmTasks( 'plugin-name' );

  // registrando tarefas
  grunt.registerTask( 'default', [ 'watch' ] );

};