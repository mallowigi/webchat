/**
 * Created by eliorb on 03/06/2015.
 */
angular.module('webChat.chatWindow')
  .service('ChatWindow', ['guid', function (guid) {

    /**
     * Class ChatWindow
     * @constructor
     */
    function ChatWindow () {
      this.id = guid();
    }

    return ChatWindow;
  }]
);
