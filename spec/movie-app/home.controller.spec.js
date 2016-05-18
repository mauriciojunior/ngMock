describe('Home Controller', function () {
  var results = [
    {
      Title: 'Star Wars: Episode IV - A New Hope',
      imdbID: 'tt0076759'
    },
    {
      Title: 'Star Wars: Episode V - The Empire Strikes Back',
      imdbID: 'tt0076759'
    },
    {
      Title: 'Star Wars: Episode VI - Return of the Jedi',
      imdbID: 'tt0086190'
    },
  ]
  var vm
  var $interval

  beforeEach(module('movieApp'))

  beforeEach(inject(function (_$controller_, _$interval_) {
    $interval = _$interval_
    vm = _$controller_('HomeController')
  }))

  it('should rotate movies every 5 seconds', function (done) {
    expect(vm.result.Title).toBe(results[0].Title)
    $interval.flush(5000)
    expect(vm.result.Title).toBe(results[1].Title)
    $interval.flush(5000)
    expect(vm.result.Title).toBe(results[2].Title)
    $interval.flush(5000)
    expect(vm.result.Title).toBe(results[0].Title)

    done()
  })
})
