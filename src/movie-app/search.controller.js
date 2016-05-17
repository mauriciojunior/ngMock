;(function () {
  'use strict'
  angular
    .module('movieApp')
    .controller('SearchController', SearchController)

  SearchController.$injector = ['$location']
  function SearchController ($location) {
    var vm = this

    vm.search = search
    vm.keyup = keyup

    function search () {
      if (vm.query) {
        $location.path('/results').search('q', vm.query)
      }
    }

    function keyup () {
      $timeout(vm.search, 1000)
    }
  }
})()
