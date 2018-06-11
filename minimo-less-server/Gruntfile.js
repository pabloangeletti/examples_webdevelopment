module.exports = function (grunt) {
  /*require('jit-grunt')(grunt);*/


  grunt.initConfig({
    'http-server': {

      'dev': {

        // the server root directory 
        root: 'www/',

        // the server port 
        // can also be written as a function, e.g. 
        // port: function() { return 8282; } 
        port: 8888,

        // the host ip address 
        // If specified to, for example, "127.0.0.1" the server will 
        // only be available on that ip. 
        // Specify "0.0.0.0" to be available everywhere 
        host: "0.0.0.0",

        //cache: 0,
        showDir: true,
        autoIndex: true,

        // server default file extension 
        ext: "html",

        // run in parallel with other tasks 
        runInBackground: true | false,

        // specify a logger function. By default the requests are 
        // sent to stdout. 
        logFn: function (req, res, error) {},

        // Proxies all requests which can't be resolved locally to the given url 
        // Note this this will disable 'showDir' 
        // proxy: "http://someurl.com",

        /// Use 'https: true' for default module SSL configuration 
        /// (default state is disabled) 
        /*            https: {
                        cert: "cert.pem",
                        key : "key.pem"
                    },*/

        // Tell grunt task to open the browser 
        openBrowser: false,

        // customize url to serve specific pages 
        customPages: {
          "/readme": "README.md",
          "/readme.html": "README.html"
        }

      }

    },
    less: {
      development: {
        options: {
          compress: false,
          yuicompress: true,
          optimization: 2
        },
        files: {
          "www/css/style.css": "www/css/style.less" // destination file and source file
        }
      }
    },
    watch: {
      styles: {
        files: ['www/css/**/*.less'], // which files to watch
        tasks: ['less'],
        options: {
          nospawn: true
        }
      }
    }
  });

  grunt.registerTask('default', ['http-server', 'less', 'watch']);
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-http-server');

};