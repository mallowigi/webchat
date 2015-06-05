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
      this.name = chance.first();
      this.initPos = {
        'left': chance.natural({min:0, max: 800}) + 'px',
        'top': chance.natural({min:0, max: 400}) + 'px'
      }
    }

    return ChatWindow;
  }]
);
