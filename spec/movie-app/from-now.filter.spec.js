describe('From Now Filter', function () {
	var fromNow;
	beforeEach(module('movieApp'))

	beforeEach(inject(function (_$filter_) {
		fromNow = _$filter_('fromNow')
	}))

	it('should return throw error for undefined', function (done) {
		expect(fromNow).toThrow('date value cannot be undefined')

		done()
	})

	it('should return same value for invalid date', function (done) {
		expect(fromNow('foo')).toBe('foo')

		done()
	})

	it('should return value of years ago for date object', function (done) {
		var value = new angular.mock.TzDate(0, '2013-07-01T00:00:00.000Z')
		var baseDate = new angular.mock.TzDate(0, '2015-08-01T21:00:00.000Z')

		expect(fromNow(value, baseDate)).toBe('2 years ago')
		done()
	})

	it('should return value of one year ago', function (done) {
		var value = new angular.mock.TzDate(0, '2014-07-01T00:00:00.000Z')
		var baseDate = new angular.mock.TzDate(0, '2015-08-01T21:00:00.000Z')

		expect(fromNow(value, baseDate)).toBe('1 year ago')
		done()
	})

	it('should return value of seven months ago', function (done) {
		var value = new angular.mock.TzDate(0, '2015-01-01T00:00:00.000Z')
		var baseDate = new angular.mock.TzDate(0, '2015-08-01T21:00:00.000Z')

		expect(fromNow(value, baseDate)).toBe('7 months ago')
		done()
	})

	it('should return value of one month ago', function (done) {
		var value = new angular.mock.TzDate(0, '2015-07-01T00:00:00.000Z')
		var baseDate = new angular.mock.TzDate(0, '2015-08-01T21:00:00.000Z')

		expect(fromNow(value, baseDate)).toBe('1 month ago')
		done()
	})
})