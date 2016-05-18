;(function () {
  'use strict'
  angular
    .module('movieApp')
    .controller('SearchController', SearchController)

  SearchController.$injector = ['$location', '$timeout']
  function SearchController ($location, $timeout) {
    var vm = this
    var timeout

    vm.search = search
    vm.keyup = keyup
    vm.keydown = keydown

    function search () {
      $timeout.cancel(timeout)
      if (vm.query) {
        $location.path('/results').search('q', vm.query)
      }
    }

    function keyup () {
      timeout = $timeout(vm.search, 1000)
    }

    function keydown () {
      $timeout.cancel(timeout)
    }
  }
})()
