/**
 * Created by eliorb on 05/06/2015.
 */
angular.module('webChat.chatWindow')
  .directive('chatWindowBox', function () {
    return {
      restrict: 'E',
      // Look for the ngTemplate in chat.html, so I don't need to do an ajax request to fetch the partial
      templateUrl: 'chatWindowBox',

      controller: ['$rootScope', '$window', function ($rootScope, $window) {
        // The chat messenger
        this.author = chance.first();

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

          $rootScope.$emit('webChat:postMessage', newMessage);
        };

        // When receiving a message

        $rootScope.$on('webChat:receiveMessage', function (event, data) {
          this.messages.push(angular.fromJson(data));
          $rootScope.$digest();
        }.bind(this));

      }],
      controllerAs: 'chat',
      bindToController: true
    }
  });
