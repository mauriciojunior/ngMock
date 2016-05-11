(function() {
	'use strict'

	angular
		.module('omdb', [])
		.factory('omdbApi', omdbApi)

	omdbApi.$injector = ['$http', '$q']
	function omdbApi($http, $q) {
		var baseUrl = 'http://www.omdbapi.com/?v=1&'

		return {
			search: search,
			find: find,
		}

		function search(query) {
			return $http.get(baseUrl + 's=' + encodeURIComponent(query))
				.then(function(response) { return response.data } )
		}

		function find(id) {
			return $http.get(baseUrl + 'i=' + id)
				.then(function(response) { return response.data } )
		}
	}
})()