
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

AnimationsController.$inject = ['$scope', '$timeout'];
function AnimationsController($scope, $timeout) {
	var animationsController = this;
	animationsController.animationBool = true;
	animationsController.resetAnimation = resetAnimation;

	function resetAnimation() {
		animationsController.animationBool = false;
		$timeout(function(){ 
			animationsController.animationBool = true; 
		}, 600);
	}
}