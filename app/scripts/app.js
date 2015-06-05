angular.module('webChat', [
  'webChat.core'
]).run([
  '$window', '$rootScope',
  function ($window, $rootScope) {

    // When a postMessage event is received, capture the domain and the window sender, and send it to the top if from an iframe
    $rootScope.$on('webChat:postMessage', function (event, message, domain) {
      if (!domain) {
        domain = "*";
      }

      var sender = $rootScope.sender || $window.parent;
      return sender.postMessage(message, domain);
    });

    // When receiving a message
    angular.element($window).bind('message', function (event) {
      var response;

      event = event.originalEvent || event;

      if (event && event.data) {
        // Set sender from the source
        $rootScope.sender = event.source;
        response = JSON.parse(event.data);

        // Broadcast event
        $rootScope.$broadcast('webChat:receiveMessage', response);
      }
    });
  }
]);
