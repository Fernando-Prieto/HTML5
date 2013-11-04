require.config({

    'baseUrl': 'scripts/lib',

    'paths': {
				'models': '../mvc/models',
				'collections': '../mvc/collections',
				'views': '../mvc/views'
    },
    
    'shim': {
		        'backbone': {
		            //These script dependencies should be loaded before loading
		            //backbone.js
		            deps: ['underscore', 'jquery'],
		            //Once loaded, use the global 'Backbone' as the
		            //module value.
		            exports: 'Backbone'
		        },

		        'underscore': {
		            exports: '_'
		        }
	}
});

// Load the main app module to start the app
require(['../main']);