require.config({
    'baseUrl': 'scripts/lib',
    'paths': {
      			'modules': '../modules'
    },
    'shim': {
	    		'jquery.quotes': ['jquery']
	}
});

// Load the main app module to start the app
require(['../main']);