describe('Movie Result Directive', function () {
  var result = {
    Poster: 'http://localhost/image.jpg',
    Title: 'Star Wars: Episode IV - A New Hope',
    Actors: 'Mark Hamill, Harrison Ford, Carrie Fisher, Peter Cushing',
    Director: 'George Lucas',
    Released: '25 May 1977',
    Genre: 'Action, Adventure, Fantasy'
  }

  var expectedHTML = [
    '<div class="col-sm-4">',
    	'<img data-ng-src="http://localhost/image.jpg" alt="Star Wars: Episode IV - A New Hope" width="220" src="http://localhost/image.jpg">',
    '</div>',
    '<div class="col-sm-8">',
	    '<h3 class="ng-binding">Star Wars: Episode IV - A New Hope</h3>',
	    '<p class="ng-binding"><strong>Director:</strong> George Lucas</p>',
	    '<p class="ng-binding"><strong>Actors:</strong> Mark Hamill, Harrison Ford, Carrie Fisher, Peter Cushing</p>',
	    '<p class="ng-binding"><strong>Released:</strong> 25 May 1977</p>',
	    '<p class="ng-binding"><strong>Genre:</strong> Action, Adventure, Fantasy</p>',
    '</div>'
  ].join('')
  var $compile

  beforeEach(module('movieApp'))

  beforeEach(inject(function (_$compile_, _$rootScope_) {
    $compile = _$compile_
    $rootScope = _$rootScope_
  }))

  it('should output movie result to expected HTML format', function (done) {
    $rootScope.result = result
    var element
    element = $compile('<movie-result result="result"></movie-result>')($rootScope)
    $rootScope.$digest()
    expect(element.html()).toBe(expectedHTML)

    done()
  })
})
