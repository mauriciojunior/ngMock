;(function () {
  'use strict'

  angular
    .module('movieApp')
    .controller('HomeController', HomeController)

  HomeController.$injector = ['$scope', '$interval', 'omdbApi', 'PopularMovies']
  function HomeController ($scope, $interval, omdbApi, PopularMovies) {
    var results = []
    var index = 0

    PopularMovies
      .query(function (response) {
        results = response
        findMovie(results[0])
        $interval(function () {
          ++index
          findMovie(results[index % results.length])
        }, 5000)
      })

    function findMovie (id) {
      omdbApi
        .find(id)
        .then(function (response) {
          $scope.result = response
        })
    }
  }
})()
