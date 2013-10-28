require.config({
    'baseUrl': 'scripts/lib',
    'paths': {
      			'modules': '../modules'
    },
    'shim': {
    			'jQuery': {
		            //These script dependencies should be loaded before loading
		            //backbone.js
		            deps: ['jquery'],
		            //Once loaded, use the global 'Backbone' as the
		            //module value.
		            exports: 'jQueryModule'
		        }
	}
});

// Load the main app module to start the app
require(['../main']);