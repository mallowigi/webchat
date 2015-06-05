/**
 * Created by eliorb on 03/06/2015.
 */
angular.module('webChat.chatWindow')
  .service('ChatWindow', [function () {

    /**
     * Class ChatWindow
     * @constructor
     */
    function ChatWindow () {
      this.id = chance.guid();
      this.name = chance.hashtag(); // Todo angularify chance
    }

    return ChatWindow;
  }]
);
