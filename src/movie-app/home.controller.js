;(function () {
  'use strict'

  angular
    .module('movieApp')
    .controller('HomeController', HomeController)

  HomeController.$injector = ['$interval']

  function HomeController ($interval) {
    var results = [
      {
        Title: 'Star Wars: Episode IV - A New Hope',
        imdbID: 'tt0076759'
      },
      {
        Title: 'Star Wars: Episode V - The Empire Strikes Back',
        imdbID: 'tt0076759'
      },
      {
        Title: 'Star Wars: Episode VI - Return of the Jedi',
        imdbID: 'tt0086190'
      },
    ]
    var index = 0
    var vm = this
    vm.result = results[0]
    $interval(function () {
      ++index
      vm.result = results[index % results.length]
    }, 5000)
  }
})()
