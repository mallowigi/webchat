angular.module('wix.pushServer')
  .directive('maxLengthBlock', ['maxChars', function (maxChars) {
    'use strict';
    return {
      restrict: 'A',
      require: 'ngModel',
      scope:true,
      link: function (scope, element, attrs, ctrl) {
        element.on('keypress', function (e) {
          var value = ctrl.$viewValue;
          if (value.length >= maxChars) {
            e.preventDefault();
            e.stopPropagation();
            return;
          }
        });
      }
    };
  }]
);
