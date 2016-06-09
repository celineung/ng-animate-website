(function () {	
  'use strict';

  if (module.hot) {
    module.hot.accept(function() {});
    module.hot.dispose(function() {});
  }

	require('./scripts/modules/homepage/homepage');

	angular.module("NgAppProject", [
		'ngRoute',
		'ng',
		'Homepage'
	]);
})();