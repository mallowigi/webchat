/**
 * Created by eliorb on 05/06/2015.
 */
angular.module('webChat.common')
  .constant('events', {
    POST_MESSAGE: 'webChat:postMessage',
    RECEIVE_MESSAGE: 'webChat.receiveMessage'
  });
