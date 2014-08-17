angular.module('wix.pushServer')
  .controller('PushMessageCtrl', ['maxChars', function (maxChars) {
    'use strict';
    this.notification = '';
    this.maxChars = maxChars;

    this.postMessage = function(){
      // do ajax here
      alert(this.notification);
      this.notification = '';
    }
  }])
;

