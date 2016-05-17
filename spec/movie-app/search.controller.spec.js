describe('Search Controller', function () {
  var vm
  var $location

  beforeEach(module('movieApp'))

  beforeEach(inject(function (_$controller_, _$location_, _$timeout_) {
    $controller = _$controller_
    $location = _$location_
    $timeout = _$timeout_
  }))

  it('should redirect to the query results page for non-empty query', function (done) {
    vm = $controller('SearchController', { $location: $location }, { query: 'star wars' })
    vm.search()
    expect($location.url()).toBe('/results?q=star%20wars')

    done()
  })

  it('should not redirect to query results for empty query', function (done) {
    vm = $controller('SearchController', { $location: $location }, { query: '' })
    vm.search()
    expect($location.url()).toBe('')

    done()
  })

  it('should redirect after 1 second of keyboard inactivity', function (done) {
    vm = $controller('SearchController')
    vm.keyup()
    $timeout.flush()
    expect($timeout.verifyNoPendingTasks).not.toThrow()
    expect($location.url()).toBe('/results?q=star%20wars')

    done()
  })
})
