(function () {	
	'use strict';

	if (module.hot) {
		module.hot.accept(function() {});
		module.hot.dispose(function() {});
	}

	require('font-awesome/css/font-awesome.css');
	require('./../styles/app.scss');

	require('./top-navigation/styles/navigation.scss');

	require('./homepage/homepage');
	require('./top-navigation/directives/navigationDirective');

	angular.module("NgAppProject", [
		'ngRoute',
		'ng',
		'Homepage',
		'ngAnimate'
	])
	.directive('topNavigationDirective', require('./top-navigation/directives/navigationDirective'));
})();