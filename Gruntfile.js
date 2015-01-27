module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        stylus: {
            pages: {
                files: {
                    'public/app.css' : 'styles/app.styl'  
                }
            }
        },
        autoprefixer: {
            main: {
                src: 'public/app.css'
            }
        },
        connect: {
            server: {
                options: {
                    hostname: '*',
                    useAvailablePort: true,
                    livereload: true,
                    base: 'public/'
                }
            }
        },
        watch: {
            stylus: {
                files: [
                    'styles/app.styl'
                ],
                tasks: ['stylus'],
                options: {
                    livereload: true
                }
            },
            autoprefixer: {
                files: [
                    'public/app.css'
                ],
                tasks: ['autoprefixer']
            },
            livereload: {
                options: {
                    livereload: true
                },
                files: [
                    'index.html',
                    'public/css/app.css',
                    'public/js/app.js'
                ]
            }
        }
    })

    // Load plugins
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-stylus');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Define tasks
    grunt.registerTask('default', ['stylus','autoprefixer']);
    grunt.registerTask('server', ['connect', 'watch']);

}    
