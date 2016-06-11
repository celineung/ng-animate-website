
'use strict';

var tpl = require('./../views/navigation.html');

module.exports = ['$location', function ($location) {
	return {
	    restrict: 'E', //use as attribute 
	    templateUrl: tpl,
	    controller: NavigationController,
	    controllerAs: 'navigationController'
	    // link: function (scope, elem) {
	    //     //after the route has changed
	    //     scope.$on("$routeChangeSuccess", function () {
	    //         var hrefs = ['/#' + $location.path(),
	    //                      '#' + $location.path(), //html5: false
	    //                      $location.path()]; //html5: true
	    //         angular.forEach(elem.find('a'), function (a) {
	    //             a = angular.element(a);
	    //             if (-1 !== hrefs.indexOf(a.attr('href'))) {
	    //                 a.parent().addClass('active');
	    //             } else {
	    //                 a.parent().removeClass('active');   
	    //             };
	    //         });     
	    //     });
	    // }
	}
}];

NavigationController.$inject = ['$scope', '$location', '$anchorScroll'];
function NavigationController($scope, $location, $anchorScroll) {
	var navigationController = this;
	navigationController.gotoInstructions = gotoInstructions;
	navigationController.gotoAnimations = gotoAnimations;

	function gotoInstructions() {
    $location.hash('instructions');
    $anchorScroll();
  };

	function gotoAnimations() {
    $location.hash('animations');
    $anchorScroll();
  };
}