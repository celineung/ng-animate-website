(function () {	
  'use strict';

  if (module.hot) {
    module.hot.accept(function() {});
    module.hot.dispose(function() {});
  }

  require('./scripts/modules/top-navigation/styles/navigation.scss');

	require('./scripts/modules/homepage/homepage');
	require('./scripts/modules/top-navigation/directives/navigationDirective');

	angular.module("NgAppProject", [
		'ngRoute',
		'ng',
		'Homepage',
		'ngAnimate'
	])
	.directive('topNavigationDirective', require('./scripts/modules/top-navigation/directives/navigationDirective'));
})();