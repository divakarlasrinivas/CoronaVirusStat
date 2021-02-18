sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"com/basf/techInterview/test2/CoronaVirusStats/model/models",
	"sap/ui/model/json/JSONModel",
], function (UIComponent, Device, models, JSONModel) {
	"use strict";

	return UIComponent.extend("com.basf.techInterview.test2.CoronaVirusStats.Component", {

		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init:  function () {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			// enable routing
			this.getRouter().initialize();

			// set the device model
			this.setModel(models.createDeviceModel(), "device");
			var url = "https://coronavirus-19-api.herokuapp.com/countries";
			var coronaModel = new JSONModel();
			coronaModel.loadData(url,"", false);
			
			this.setModel(new JSONModel(), "corona");
			
			this.setModel(new JSONModel(), "selectedCountry", {});
			 this.getModel("selectedCountry").setData({});
			 this.getModel("corona").setData(coronaModel.getData())
			
			
		}
	});
});