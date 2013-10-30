//Wrapper function with one parameter
module.exports = function(grunt) {

	grunt.initConfig({

		//pkg is used from templates and therefore must be defined inside initConfig object//
	    pkg : grunt.file.readJSON('package.json'), //load the project information from the package.json file

	    jasmine: {
			    	pivotal:{
						      src: 'src/**/*.js',
						      options: 	{
									        specs: 'spec/*Spec.js',
									        helpers: 'spec/*Helper.js'
								      	}
						    }
			  }

	});

  	//loads grunt-contrib-jasmine from Npm 
 	grunt.loadNpmTasks('grunt-contrib-jasmine');

 	// What to do by default. In this case, nothing.
	grunt.registerTask('default', ['jasmine']);
};