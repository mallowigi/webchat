angular.module('wix.pushServer')
  .controller('MainController', ['$scope', '$window', function ($scope, $window) {
    this.isShownForm = false;
    var Wix = $window.Wix;

    $scope.$watch('main.isShownForm', function(newVal) {
    	if (Wix && Wix.resizeWindow) {
        if (newVal) {
          Wix.resizeWindow(450, 400);
        } else {
          Wix.resizeWindow(450, 60);
        }
    	}
    });

  }])
;

