
'use strict';

var tpl = require('./../views/animations.html');

module.exports = ['$location', function ($location) {
	return {
			restrict: 'E', //use as attribute 
			templateUrl: tpl,
			controller: AnimationsController,
			controllerAs: 'animationsController'
	}
}];

AnimationsController.$inject = ['$scope'];
function AnimationsController($scope) {
	var sidebarController = this;
	sidebarController.fadeBool = true;
	sidebarController.resetAnimation = resetAnimation;

	function resetAnimation() {
		sidebarController.fadeBool = false;
		setTimeout(function(){ 
			sidebarController.fadeBool = true; 
		}, 0);
	}
}