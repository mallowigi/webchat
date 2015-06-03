angular.module('webChat.core')
  .controller('MainCtrl', ['$scope', '$window', '$timeout', 'ChatWindow',
    function MainCtrl ($scope, $window, $timeout, ChatWindow) {
      'use strict';

      // Manage the chat windows
      this.chatWindows = [];

      /**
       * Add a new Chat Window
       */
      this.addNewWindow = function addNewWindow () {
        this.chatWindows.push(new ChatWindow());
      };

      // TODO Remove this use the + button instead
      $timeout(function init(){
        this.addNewWindow();
      }.bind(this));

    }
  ]
);

