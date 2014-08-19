angular.module('wix.pushServer')
  .controller('PushMessageCtrl', [
    'maxChars',
    'serverUrl',
    '$http',
    '$timeout',
    function (maxChars, serverUrl, $http, $timeout) {
    'use strict';
    this.notification = '';
    this.maxChars = maxChars;

    this.sendingState = {
      isSending: false,
      message: ''
    };

    this.postMessage = function () {
      var pushCtrl = this;

      pushCtrl.sendingState.isSending = true;
      pushCtrl.sendingState.message = 'Sending...';
      // do ajax here
      $http.post(serverUrl, {notification: pushCtrl.notification})
        .then(function (response) {
          pushCtrl.sendingState.message = 'Notification sent!';
        })
        .catch(function (response) {
          pushCtrl.sendingState.message = response;
        })
        .finally(function () {
          $timeout(function(){
            pushCtrl.sendingState.isSending = false;
            pushCtrl.sendingState.message = '';
          }, 1500);

        })
      ;

      pushCtrl.notification = '';
    };

  }])
;

