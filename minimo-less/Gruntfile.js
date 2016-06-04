module.exports = function(grunt) {
  /*require('jit-grunt')(grunt);*/


  grunt.initConfig({
    less: {
      development: {
        options: {
          compress: false,
          yuicompress: true,
          optimization: 2
        },
        files: {
          "css/style.css": "css/style.less" // destination file and source file
        }
      }
    },
    watch: {
      styles: {
        files: ['css/**/*.less'], // which files to watch
        tasks: ['less'],
        options: {
          nospawn: true
        }
      }
    }
  });

  grunt.registerTask('default', ['less', 'watch']);
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
};