;(function () {
  'use strict'
  angular
    .module('movieApp')
    .controller('SearchController', SearchController)

  SearchController.$injector = ['$location']
  function SearchController ($location) {
    var vm = this

    vm.search = search

    function search () {
      if (vm.query) {
        $location.path('/results').search('q', vm.query)
      }
    }
  }
})()
