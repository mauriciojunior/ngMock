;(function () {
  'use strict'

  angular
    .module('movieApp')
    .controller('ResultsController', ResultsController)

  ResultsController.$injector = ['$location', 'omdbApi']
  function ResultsController ($location, omdbApi) {
    var vm = this
    var query = $location.search().q

    vm.expand = expand

    function expand (index, id) {
      omdbApi
        .find(id)
        .then(function (response) {
          vm.results[index].data = response
          vm.results[index].open = true
        })
    }

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
