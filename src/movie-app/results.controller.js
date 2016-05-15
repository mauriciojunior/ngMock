;(function () {
  'use strict'

  angular
    .module('movieApp')
    .controller('ResultsController', ResultsController)

  ResultsController.$injector = ['$location', 'omdbApi']
  function ResultsController ($location, omdbApi) {
    var vm = this
    var query = $location.search().q

    omdbApi
      .search(query)
      .then(function (response) {
        vm.results = response.Search
      })
      .catch(function () {
        vm.errorMessage = 'Something went wrong!'
      })
  }
})()
