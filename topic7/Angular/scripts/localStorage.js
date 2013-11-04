/**
 * Services that persists and retrieves TODOs from localStorage
 */

var movieApp = angular.module('movies-app', []);

movieApp.factory('angularStorage', function () {

	var STORAGE_ID = 'movies-angularjs';

	return {
		get: function () {
			return JSON.parse(localStorage.getItem(STORAGE_ID) || '[]');
		},

		put: function (todos) {
			localStorage.setItem(STORAGE_ID, JSON.stringify(todos));
		}
	};
});