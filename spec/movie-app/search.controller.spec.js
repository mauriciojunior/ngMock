describe('Search Controller', function () {
  var vm
  var $location

  beforeEach(module('movieApp'))

  beforeEach(inject(function (_$controller_, _$location_, _$timeout_) {
    $controller = _$controller_
    $location = _$location_
    $timeout = _$timeout_
    vm = $controller('SearchController')
  }))

  it('should redirect to the query results page for non-empty query', function (done) {
    vm.query = 'star wars'
    vm.search()

    expect($location.url()).toBe('/results?q=star%20wars')

    done()
  })

  it('should not redirect to query results for empty query', function (done) {
    vm.query = ''
    vm.search()

    expect($location.url()).toBe('')

    done()
  })

  it('should redirect after 1 second of keyboard inactivity', function (done) {
    vm.query = 'star wars'
    vm.keyup()
    $timeout.flush()

    expect($timeout.verifyNoPendingTasks).not.toThrow()
    expect($location.url()).toBe('/results?q=star%20wars')

    done()
  })

  it('should cancel timeout in keydown', function (done) {
    vm.query = 'star wars'
    vm.keyup()
    vm.keydown()

    expect($timeout.verifyNoPendingTasks).not.toThrow()

    done()
  })

  it('should cancel timeout on search', function (done) {
    vm.query = 'star wars'
    vm.keyup()
    vm.search()

    expect($timeout.verifyNoPendingTasks).not.toThrow()

    done()
  })
})
