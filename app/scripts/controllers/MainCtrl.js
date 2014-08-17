angular.module('wix.pushServer')
  .controller('MainController', ['$scope', function ($scope) {
    $scope.isShownForm = false;

    if (Wix) {
      Wix.resizeWindow(450, 400);
    }
  }])
;

