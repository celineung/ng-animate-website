(function () {
	'use strict';

	require('./styles/homepage.scss');
	
	require('./views/homepage.html');	
	require('./views/instructions.html');	
	require('./views/animations.html');
	require('./views/tab-fade.html');
	
	var sidebarController = require('./controllers/SidebarController');
	var animationsDirective = require('./directives/animationsDirective');
	var instructionsDirective = require('./directives/instructionsDirective');

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
					.when('/', {
						templateUrl: 'scripts/homepage/views/homepage.html',
						controller: 'SidebarController',
						controllerAs: 'sidebarController',
						resolve: {
							deps: function() {
								return require.ensure([], function (require) {
									angular.module('Homepage').register.controller("SidebarController", sidebarController);
									angular.module('Homepage').register.directive("animationsDirective", animationsDirective);
									angular.module('Homepage').register.directive("instructionsDirective", instructionsDirective);
								}, '_sidebar');
							}
						}
					});
		}]);
		// .controller("HomepageController", require('./controllers/HomepageController'));
})();