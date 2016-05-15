;(function () {
  'use strict'

  angular
    .module('movieApp', ['ngRoute', 'ui.bootstrap', 'omdb'])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/results', {
          templateUrl: 'movie-app/results.html',
          controller: 'ResultsController as vm'
        })
        .otherwise({ redirectTo: '/' })
    })
})()
