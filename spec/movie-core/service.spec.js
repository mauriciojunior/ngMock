describe('MovieCore', function () {
  var $httpBackend
  var PopularMovies

  beforeEach(module('MovieCore'))
  beforeEach(inject(function (_PopularMovies_, _$httpBackend_) {
    PopularMovies = _PopularMovies_
    $httpBackend = _$httpBackend_
  }))
  afterEach(function () {
    $httpBackend.verifyNoOutstandingExpectation()
  })

  it('should create popular movie', function (done) {
    var expectedData = { movieId: 'tt0076759', description: 'Great movie!' }

    $httpBackend
      .expectPOST(/./, expectedData)
      .respond(201)

    var popularMovie = new PopularMovies({
      movieId: 'tt0076759',
      description: 'Great movie!'
    })
    popularMovie.$save()

    expect($httpBackend.flush).not.toThrow()
    done()
  })

  it('should get popular movie by id', function (done) {
    $httpBackend
      .expectGET('popular/tt0076759')
      .respond(200)

    PopularMovies
      .get({ movieId: 'tt0076759' })

    expect($httpBackend.flush).not.toThrow()
    done()
  })

  it('should update popular movie', function (done) {
    $httpBackend
      .expectPUT('popular')
      .respond(200)

    var popularMovie = new PopularMovies({
      movieId: 'tt0076759',
      description: 'Great movie!'
    })

    popularMovie.$update()
    expect($httpBackend.flush).not.toThrow()
    done()
  })

  it('should authenticate requests', function (done) {
    var expectedHeaders = { authToken: 'teddybear', Accept: 'application/json, text/plain, */*' }
    $httpBackend
      .expectGET('popular/tt0076759', expectedHeaders)
      .respond(200)

    PopularMovies
      .get({ movieId: 'tt0076759' })

    $httpBackend.flush()
    done()
  })
})
