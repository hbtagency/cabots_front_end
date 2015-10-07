/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),

    banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
      '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
      '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
      '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
      ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',

    // Task configuration.
    concat: {
      // this is _DG specific JS Code
      app: {
        src: [
          'library/__source/js/_DG.js',
          'library/__source/js/modules/*.js',
          'library/__source/js/project/*.js',
        ],
        dest: 'library/build/js/tmp/_DG.js' 
      },

      // Any External modules that need to be loaded
      vendor: {
        src: [
          'library/__source/bower_components/jquery/dist/jquery.min.js',
          'library/__source/bower_components/bootstrap-sass/assets/javascripts/bootstrap.min.js',
          'library/__source/bower_components/slick-carousel/slick/slick.js',
        ],
        dest: 'library/build/js/tmp/vendor.js' 
      },

      // let's concat vendor and app – we always load vendor first 
      dist: {
        src: [
          'library/build/js/tmp/vendor.js',
          'library/build/js/tmp/_DG.js'
        ],
        dest: 'library/build/js/tmp/_DG.concat.js'
      }
    },

    // minifying the concat code
    uglify: {
      dist: {
        src: 'library/build/js/tmp/_DG.concat.js',
        dest: 'library/build/js/_DG.min.js'
      }
    },

    // compile yo sass
    sass: {
      dist: {
        options: {
          require: 'sass-globbing' 
        },
        files: {
          'library/build/css/_DG.min.css': 'library/__source/css/style.scss',
        }
      }
    },

    // remove unnecessary concat files and tidy it all up
    clean: {
      build: {
        src: [
          'library/build/js/tmp'
        ]
      }
    },

    // TODO
    watch: {
      css : {
        files: 'library/__source/css/**/*.scss',
        tasks: ['sass']        
      },
      js : {
        files: ['<%= concat.app.src %>', '<%= concat.vendor.src %>', '<%= concat.dist.src %>', '<%= uglify.dist.src %>' ],
        tasks: [ 'concat', 'uglify', 'clean']
      }
    }

  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  //grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-sass');

  // Default task.
  grunt.registerTask('default', ['sass', 'concat', 'uglify', 'clean']);

};
