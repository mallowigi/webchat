/**
 * Created by eliorb on 03/06/2015.
 */
angular.module('webChat.chatWindow')
  .service('ChatWindow', ['chance', function ChatWindowService (chance) {
    "use strict";

    /**
     * Class ChatWindow
     * @constructor
     */
    function ChatWindow () {
      this.id = chance.guid();
      this.name = chance.channel();
    }

    return ChatWindow;
  }]
);
