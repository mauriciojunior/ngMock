(function() {
	'use strict'

	angular
		.module('movieApp')
		.filter('fromNow', fromNowFilter)

	function fromNowFilter () {
		return function (value, baseDate) {
			var date = value

			if (!date) throw 'date value cannot be undefined'

			if (typeof value === 'string') date = new Date(date)

			if (isNaN(date.getTime())) return value

			var YEAR_IN_MS = 60 * 60 * 24 * 365
			var MONTH_IN_MS = 60 * 60 * 24 * 30
			var now =  baseDate || new Date()
			var dateDiff = (now.getTime() - date.getTime()) / 1000
			var tzDiff = (now.getTimezoneOffset() - date.getTimezoneOffset()) * 60
			var difInMs = dateDiff + tzDiff

			var yearsDiff = difInMs / YEAR_IN_MS
			var monthsDiff = difInMs / MONTH_IN_MS

			if (yearsDiff > 1) {
				yearsDiff = Math.floor(yearsDiff)
				return (yearsDiff === 1) ? '1 year ago' : yearsDiff + ' years ago'
			} else {
				monthsDiff = Math.floor(monthsDiff)
				return (monthsDiff === 1) ? '1 month ago' : monthsDiff + ' months ago'
			}
		}
	}
})()