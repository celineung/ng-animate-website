
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
	var animationsController = this;
	animationsController.fadeBool = true;
	animationsController.resetAnimation = resetAnimation;

	function resetAnimation() {
		animationsController.fadeBool = false;
		setTimeout(function(){ 
			animationsController.fadeBool = true; 
		}, 0);
	}
}