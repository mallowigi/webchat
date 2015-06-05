/**
 * Created by eliorb on 05/06/2015.
 */
angular.module('webChat.chatWindow')
  .directive('chatWindowBox', function () {
    return {
      restrict: 'E',
      // Look for the ngTemplate in chat.html, so I don't need to do an ajax request to fetch the partial
      templateUrl: 'chatWindowBox',

      controller: ['$scope', function ($scope) {
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

          $scope.$emit('webChat:postMessage', JSON.stringify(newMessage));
        };

        // When receiving a message

        $scope.$on('webChat:receiveMessage', function (event, data) {
          console.log('e');
          this.messages.push(angular.fromJson(data));
          $scope.$digest();
        }.bind(this));

      }],
      controllerAs: 'chat',
      bindToController: true
    }
  });
