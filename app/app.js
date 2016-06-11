(function () {	
  'use strict';

  if (module.hot) {
    module.hot.accept(function() {});
    module.hot.dispose(function() {});
  }

  require('./scripts/modules/top-navigation/styles/navigation.scss');

	require('./scripts/modules/sidebar/sidebar');
	require('./scripts/modules/top-navigation/directives/navigationDirective');

	angular.module("NgAppProject", [
		'ngRoute',
		'ng',
		'Sidebar'
	])
	.directive('topNavigationDirective', require('./scripts/modules/top-navigation/directives/navigationDirective'));
})();