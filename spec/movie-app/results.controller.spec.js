describe('Results Controller', function () {
  var results = {
    Search: [
      {
        Title: 'Star Wars: Episode IV - A new Hope',
        Year: '1977',
        imdbID: 'tt0076759',
        Type: 'movie'
      },
      {
        Title: 'Star Wars: Episode V - The Empiree Strikes Back',
        Year: '1980',
        imdbID: 'tt00B0684',
        Type: 'movie'
      },
      {
        Title: 'Star Wars: Episode VI - Return of the Jedi',
        Year: '1983',
        imdbID: 'tt0086190',
        Type: 'movie'
      },
    ]
  }
  var vm
  var $q
  var $rootScope
  var $controller
  var $location
  var omdbApi

  beforeEach(module('omdb'))
  beforeEach(module('movieApp'))

  beforeEach(inject(function (_$controller_, _$q_, _$rootScope_, _omdbApi_, _$location_) {
    $controller = _$controller_
    $q = _$q_
    $rootScope = _$rootScope_
    $location = _$location_
    omdbApi = _omdbApi_
  }))

  it('should load search results', function (done) {
    spyOn(omdbApi, 'search').and.callFake(function () {
      var deferred = $q.defer()
      deferred.resolve(results)
      return deferred.promise
    })

    $location.search('q', 'star wars')
    vm = $controller('ResultsController', { $location: $location, omdbApi: omdbApi })
    $rootScope.$apply()

    expect(vm.results[0].Title).toBe(results.Search[0].Title)
    expect(vm.results[1].Title).toBe(results.Search[1].Title)
    expect(vm.results[2].Title).toBe(results.Search[2].Title)

    done()
  })

  it('should set result status to error', function (done) {
    spyOn(omdbApi, 'search').and.callFake(function () {
      var deferred = $q.defer()
      deferred.reject()
      return deferred.promise
    })

    $location.search('q', 'star wars')
    vm = $controller('ResultsController', { $location: $location, omdbApi: omdbApi })
    $rootScope.$apply()

    expect(vm.errorMessage).toBe('Something went wrong!')
    done()
  })
})
