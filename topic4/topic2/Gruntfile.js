//Wrapper function with one parameter
module.exports = function(grunt) {

	// Compose a short banner from the project name, version, license and current date
	var bannerContent = '/*! <%= pkg.name %> v<%= pkg.version %> - ' +
                '<%= grunt.template.today("yyyy-mm-dd") %> \n' +
                ' *  License: <%= pkg.license %> */\n',
    	name = '<%= pkg.name %>-v<%= pkg.version%>',

	    /* define filenames */
		latest = '<%= pkg.name %>',
		name = '<%= pkg.name %>-v<%= pkg.version%>',
		
		sourceFolder = 'distrib/source/',
		minFolder = 'distrib/minified/',

		devRelease = sourceFolder+name+'.js',
		devCssRelease = sourceFolder+name+'.css',

		minRelease = minFolder+name+'.min.js',
		minCssRelease = minFolder+name+'.min.css',

		sourceMapMin = minFolder+name+'.min.js.map', //'distrib/source-map-'+name+'.min.js',

		lDevRelease = sourceFolder+latest+'.js',
		lMinRelease = minFolder+latest+'.min.js',
		lSourceMapMin = minFolder+latest+'.min.js.map'; //'distrib/source-map-'+latest+'.min.js';

	grunt.initConfig({

		//pkg is used from templates and therefore must be defined inside initConfig object//
	    pkg : grunt.file.readJSON('package.json'), //load the project information from the package.json file

	    copy: 	{
			      development: 	{ // copy non-minified release file
							        src: devRelease,
							        dest: lDevRelease
							    },

			      minified: 	{ // copy minified release file
							        src: minRelease,
							        dest: lMinRelease
						      	},

			      smMinified: 	{ // source map of minified release file
							        src: sourceMapMin,
							        dest: lSourceMapMin
						      	}
			    },

	    concat: {
			     	 options: 	{
							    	banner: bannerContent
							    },

	  				jsFiles: 	{
									// concatenate all files in src directory
									src : ['src/**/*.js'],
									/* 	place the result into the dist directory,
										name variable contains template prepared in
										previous section */
									dest : devRelease //'distrib/' + name + '.js'
								},

			      	cssFiles: {
								// concatenate all files in src directory
								src : ['src/**/*.css'],
								/* 	place the result into the dist directory,
									name variable contains template prepared in
									previous section */
								dest : devCssRelease 
							}
			    },       

		jshint: {
					options: 	{
								  eqeqeq: true, //warnings for == and != equality operators
								  trailing: true //warns about trailing whitespaces in the code
								},

					target: 	{
								  src : ['src/**/*.js', 'test/**/*.js'] //validate all JavaScript files in all sub-directores of both the src and test directories
								}
				},

		uglify: {
					options:{
								banner: bannerContent,
								sourceMapRoot: '../',
								sourceMap: sourceMapMin, //'distrib/'+name+'.min.js.map',
								sourceMapUrl: name+'.min.js.map'
							},

					target: {
								src : ['<%= concat.jsFiles.dest %>'], //['src/**/*.js']<%= concat.dist.dest %>,
								dest : minRelease //'distrib/' + name + '.min.js'
							}
	    		},

		cssmin: {
				  minify: {
						    src: ['<%= concat.cssFiles.dest %>'],
						    dest: minCssRelease,
						    ext: '.min.css'
						  }
				},

		imagemin: {                          
				    dynamic: {    
				    			options: {                      
									        optimizationLevel: 7
									      }, 

						      	files: 	[{
									        expand: true,                  // Enable dynamic expansion
									        cwd: 'src/',                   // Src matches are relative to this path
									        src: ['**/*.{png,jpg,gif}'],   // Actual patterns to match
									        dest: minFolder                 // Destination path prefix
								      	}]
						    }
				  }

	});

  	//loads grunt-contrib-* from Npm 
 	grunt.loadNpmTasks('grunt-contrib-jshint'); 
 	grunt.loadNpmTasks('grunt-contrib-concat');
 	grunt.loadNpmTasks('grunt-contrib-uglify');
 	grunt.loadNpmTasks('grunt-contrib-copy');
 	grunt.loadNpmTasks('grunt-contrib-cssmin');
 	grunt.loadNpmTasks('grunt-contrib-imagemin');

 	// What to do by default. In this case, nothing.
	grunt.registerTask('default', ['jshint','concat', 'uglify', 'copy', 'cssmin', 'imagemin']);
};

/*Ref: 	http://flippinawesome.org/2013/07/01/building-a-javascript-library-with-grunt-js/
	   	http://gruntjs.com/sample-gruntfile*/