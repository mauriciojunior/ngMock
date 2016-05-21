;(function () {
  'use strict'

  angular
    .module('movieApp')
    .directive('movieResult', function movieResult () {
      return {
        restrict: 'E',
        replace: true,
        scope: {
          result: '=result'
        },
        template: '<div>{{ result.Title }}</div>'
      }
    })
})()
