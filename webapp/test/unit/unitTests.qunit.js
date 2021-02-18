/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"com/basf/techInterview/test2/CoronaVirusStats/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});