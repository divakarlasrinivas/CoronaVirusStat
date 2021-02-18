sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/Filter",
	"../model/formatter"
], function (Controller,Filter, formatter) {
	"use strict";
	var self = null;
	return Controller.extend("com.basf.techInterview.test2.CoronaVirusStats.controller.Main", {
		formatter: formatter,
		onInit: function () {
			
			this.setSelectedCountryData("World"); // lets show world by default
			this.searchFiled = this.getView().byId("searchField");
			self = this;
		},
		setSelectedCountryData: function(country){
			 var selectedCountryData = 
			 this.getView().getModel("corona").getData().filter(function(item){
			 	return item.country === country
			 })                         
			
			this.getView().getModel("selectedCountry").setData(selectedCountryData[0])
		},
		onSearch: function (event) {
			var item = event.getParameter("suggestionItem");
			if(item){
			this.setSelectedCountryData(item.getText());
			}else{
				this.setSelectedCountryData("World");
			}
		
		},

		onSuggest: function (event) {
			var that = this;
			var sValue = event.getParameter("suggestValue"),
				aFilters = [];
			if (sValue) {
				aFilters = [
					new Filter([
						new Filter("country", function (sText) {
							return (sText || "").toUpperCase().indexOf(sValue.toUpperCase()) > -1;
						}),
					
					], false)
				];
			}
			that.searchFiled.getBinding("suggestionItems").filter(aFilters);
			that.searchFiled.suggest();
		}
	});
});