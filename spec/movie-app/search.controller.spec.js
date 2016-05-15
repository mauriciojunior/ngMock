describe('Search Controller', function () {
  var vm
  var $location

  beforeEach(module('movieApp'))

  beforeEach(inject(function (_$controller_, _$location_) {
    $controller = _$controller_
    $location = _$location_
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
})
