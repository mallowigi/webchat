angular.module('wix.pushServer')
  .controller('MainController', ['$scope', function ($scope) {
    $scope.isShownForm = false;

    $scope.$watch('isShownForm', function(newVal) {
    	if (newVal && Wix) {
    		Wix.resizeWindow(450, 400);
    	}
    });
  }])
;

