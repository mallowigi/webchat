angular.module('wix.pushServer', [
  'ngAnimate'
])
  .constant('maxChars', 224)
  .constant('serverUrl', 'http://wix.codeoasis.com:3002/notifications');
