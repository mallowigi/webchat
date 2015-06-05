/**
 * Created by eliorb on 05/06/2015.
 */
angular.module('webChat.chatWindow')
  .directive('chatWindowBox', function () {
    return {
      restrict: 'E',
      // Look for the ngTemplate in chat.html, so I don't need to do an ajax request to fetch the partial
      templateUrl: 'chatWindowBox',

      controller: [function () {
        // The chat messenger
        this.author = chance.first();

        // The contents of the message tp post
        this.message = '';

        // List of messages
        this.messages = [];

        this.postMessage = function postMessage () {
          this.messages.push({
            author: this.author,
            contents: this.message
          });

          this.message = '';
        }
      }],
      controllerAs: 'chat',
      bindToController: true
    }
  });
