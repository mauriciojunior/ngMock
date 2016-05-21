describe('Movie Result Directive', function () {
  var result = {
    Poster: 'http://localhost/image.jpg',
    Title: 'Star Wars: Episode IV - A New Hope',
    Director: 'George Lucas',
    Actors: 'Mark Hamill, Harrison Ford, Carrie Fisher, Peter Cushing',
    Released: '25 May 1977',
    Genre: 'Action, Adventure, Fantasy'
  }
  var $compile

  beforeEach(module('movieApp'))

  beforeEach(inject(function (_$compile_) {
    $compile = _$compile_
  }))

  it('should output movie result to expected HTML format', function (done) {
    var scope = {}
    var html
    scope.result = result
    html = $compile('<movie-result result="result"></movie-result>')(scope).html()
    expect(html).toBe('<div>Star Wars: Episode IV - A New Hope</div>')

    done()
  })
})
