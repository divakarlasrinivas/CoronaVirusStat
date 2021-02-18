sap.ui.define([
	"sap/ui/core/format/NumberFormat"
], function (NumberFormat) {
	"use strict";

	return {

		getTotalTestCount: function (countries) {
			var worldTest = countries.reduce(function (a, b) {
				return {
					totalTests: a.totalTests + b.totalTests
				};
			})
			var numberFormat = NumberFormat.getFloatInstance({
				maxFractionDigits: 1
			});
			var text = numberFormat.format(worldTest.totalTests / 100000);
			return text;
		}
	};
});