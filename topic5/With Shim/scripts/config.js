require.config({
    'baseUrl': 'scripts/lib',
    'paths': {
      			'modules': '../modules'
    },
    'shim': {
    			'jQuery': {
		            deps: ['jquery'],
		            //Once loaded, use the global 'jQueryModule' as the
		            //module value.
		            exports: 'jQueryModule'
		        }
	}
});

// Load the main app module to start the app
require(['../main']);