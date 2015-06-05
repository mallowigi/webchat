/**
 * Created by eliorb on 05/06/2015.
 */
angular.module('webChat')
  .run([
    '$rootScope',
    '$window',
    'events',
    function addPostMessageListeners (
      $rootScope,
      $window,
      events
    ) {
      "use strict";

      /**
       * When a post message event is receive, post message to all iframes
       */
      $rootScope.$on(events.POST_MESSAGE, function broadcastEvent (event, message) {
        var frames = Array.prototype.slice.call($window.parent.frames);

        frames.forEach(function (iframe) {
          iframe.postMessage(message, '*');
        });
      });

      /**
       * Bind an event listener to postMessage events
       */
      angular.element($window).on('message', function onPostMessage (event) {
        event = event.originalEvent || event;

        if (event && event.data) {
          // Set sender from the source
          $rootScope.sender = event.source;
          var response = event.data;

          // Broadcast event
          $rootScope.$broadcast(events.RECEIVE_MESSAGE, response);
        }
      });
    }]
);
