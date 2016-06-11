
'use strict';

var tpl = require('./../views/instructions.html');

module.exports = ['$location', function ($location) {
	return {
			restrict: 'E', //use as attribute 
			templateUrl: tpl,
			controller: InstructionsController,
			controllerAs: 'instructionsController'
	}
}];

InstructionsController.$inject = ['$scope'];
function InstructionsController($scope) {
	var instructionsController = this;
}