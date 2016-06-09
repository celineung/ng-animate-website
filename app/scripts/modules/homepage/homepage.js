(function () {
	'use strict';

	require('./views/homepage.html');

	angular.module('Homepage', [
		'ngRoute',
		'ng'
		])
		.config([
	      '$controllerProvider', '$compileProvider', '$filterProvider', '$provide', '$injector',
	      function($controllerProvider, $compileProvider, $filterProvider, $provide, $injector) {
	        angular.module('Homepage').register = {
	          controller: function(name, content) {
	            return $controllerProvider.register(name, content);
	          },
	          directive: function(name, content) {
	            if(!$injector.has(name + 'Directive')) {
	              return $compileProvider.directive(name, content);
	            }
	          },
	          filter: function(name, content) {
	            return $filterProvider.register(name, content);
	          },
	          factory: function(name, content) {
	            return $provide.factory(name, content);
	          },
	          service: function(name, content) {
	            return $provide.service(name, content);
	          }
	        };
	      }
	    ])
		.config(['$routeProvider', function($routeProvider) {
		    $routeProvider
		      .when('/home', {
		        templateUrl: 'scripts/modules/homepage/views/homepage.html',
		        controller: 'HomepageController',
		        controllerAs: 'homepageController',
		        resolve: {
		        	deps: function() {
		        		return require.ensure([], function (require) {
		        			angular.module('Homepage').register.controller("HomepageController", require('./controllers/HomepageController'));
		        		}, '_homepage');
		        	}
		        }
		      });
		}]);
		// .controller("HomepageController", require('./controllers/HomepageController'));
})();