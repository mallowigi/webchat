angular.module('webChat.core')
  .controller('MainCtrl', [
    '$window',
    'ChatWindow',
    function MainCtrl (
      $window,
      ChatWindow
    ) {
      'use strict';

      // Manage the chat windows
      this.chatWindows = [];

      /**
       * Add a new Chat Window
       */
      this.addNewWindow = function addNewWindow () {
        this.chatWindows.push(new ChatWindow());
      };
    }
  ]
);

