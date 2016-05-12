describe('MovieCore', function() {
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

	it('should create popular movie', function(done) {
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
})