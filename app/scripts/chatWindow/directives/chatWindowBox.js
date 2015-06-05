/**
 * Created by eliorb on 05/06/2015.
 */
angular.module('webChat.chatWindow')
  .directive('chatWindowBox', function () {
    "use strict";

    return {
      restrict: 'E',
      // Look for the ngTemplate in chat.html, so I don't need to do an ajax request to fetch the partial
      templateUrl: 'chatWindowBox',

      controller: [
        '$scope',
        '$window',
        'events',
        function chatWindowBoxCtrl (
          $scope,
          $window,
          events
        ) {
          // The chat messenger
          this.author = $window.name;

          // The contents of the message tp post
          this.message = '';

          // List of messages
          this.messages = [];

          this.postMessage = function postMessage () {
            var newMessage = {
              author: this.author,
              contents: this.message
            };

            this.message = '';

            $scope.$emit(events.POST_MESSAGE, newMessage);
          };

          // When receiving a message

          $scope.$on(events.RECEIVE_MESSAGE, function (event, data) {
            this.messages.push(data);
            $scope.$digest();
          }.bind(this));

        }],
      controllerAs: 'chat'
    }
  });
