;(function () {
  'use strict'

  angular
    .module('movieApp', ['ngRoute', 'ui.bootstrap', 'omdb', 'MovieCore'])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'movie-app/home.html',
          controller: 'HomeController as vm'
        })
        .when('/results', {
          templateUrl: 'movie-app/results.html',
          controller: 'ResultsController as vm'
        })
        .otherwise({ redirectTo: '/' })
    })
})()
