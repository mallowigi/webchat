angular.module('wix.pushServer')
  .controller('MainController', ['$scope', '$window', function ($scope, $window) {
    'use strict';
    this.isShownForm = true;
    var Wix = $window.Wix;
  }])
;

