
'use strict';

module.exports = [
	'$scope',
	function SidebarController($scope) {
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
];
