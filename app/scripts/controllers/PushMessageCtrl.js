angular.module('wix.pushServer')
  .controller('PushMessageCtrl', [
    'maxChars',
    'serverUrl',
    '$http',
    '$timeout',
    function (maxChars, serverUrl, $http, $timeout) {
      'use strict';
      var pushCtrl = this;

      pushCtrl.notification = '';
      pushCtrl.maxChars = maxChars;

      pushCtrl.sendingState = {
        isSending: false,
        message: ''
      };

      pushCtrl.submitOnEnter = function (e) {
        if (e.which === 13) {
          e.preventDefault();
          pushCtrl.postMessage();
        }
      }

      pushCtrl.postMessage = function () {

        pushCtrl.sendingState.isSending = true;
        pushCtrl.sendingState.message = 'Sending...';
        // do ajax here
        $http.post(serverUrl, {notification: {message: pushCtrl.notification}})
          .then(function (response) {
            pushCtrl.sendingState.message = 'Notification sent!';
          })
          .catch(function (response) {
            pushCtrl.sendingState.message = 'Error sending notification!';
          })
          .finally(function () {
            $timeout(function () {
              pushCtrl.sendingState.isSending = false;
              pushCtrl.sendingState.message = '';
            }, 1500);

          })
        ;

        pushCtrl.notification = '';
      };

    }])
;

