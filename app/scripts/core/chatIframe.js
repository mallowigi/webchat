/**
 * Created by Elior on 05/06/2015.
 */
angular.module('webChat.core')
/**
 * @ngdoc directive
 * @name chatIframe
 *
 * @description
 * Directive chatIframe
 */
  .directive('chatIframe', ['$interpolate', function chatIframe ($interpolate) {
    'use strict';

    return {
      restrict: 'E',
      replace: true,
      scope: {
        name: '@'
      },
      compile: function (tElem, tAttr, transcludeFn) {
        var template = '<iframe frameborder="0" src="chat.html" name="{{ name }}" seamless width="359" height="450"'
                       + ' scrolling="no"></iframe>';

        return function postlink (scope, elem, attrs) {
          var compiled = $interpolate(template)(scope);
          angular.element(elem).append(compiled);
        };
      }
    };
  }]
);
