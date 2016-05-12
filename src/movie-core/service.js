(function() {
	'use strict'

	angular
		.module('MovieCore', ['ngResource'])
		.factory('PopularMovies', PopularMovies)

		PopularMovies.$injector = ['$resource']
		function PopularMovies ($resource) {
			return $resource('popular/:movieId', { movieId: '@id' }, {
				update: {
					method: 'PUT'
				}
			})
		}
})()