angular.module('wix.pushServer', [
  'ngAnimate'
])
  .constant('maxChars', 224)
  .constant('serverUrl', 'http://localhost:3000/notifications');
