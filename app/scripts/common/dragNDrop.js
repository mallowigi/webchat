/**
 * Created by eliorb on 05/06/2015.
 */
angular.module('webChat.common')
  .directive('dragNDrop', function () {
    return {
      restrict: 'A',
      compile: function (tElem, tAttr, transcludeFn) {
        tElem.on('dragover', function allowDrop (ev) {
          ev.preventDefault();
        });

        tElem.on('dragstart', function dragStart (ev) {
          var coords = {
            x: ev.offsetX,
            y: ev.offsetY
          };

          ev.dataTransfer.setData("iFrameID", ev.target.id);
          ev.dataTransfer.setData('mouseCoords', JSON.stringify(coords));
        });

        tElem.on('drop', function drop (ev) {
          var iframeId = ev.dataTransfer.getData('iFrameID');
          var mouseCoords = JSON.parse(ev.dataTransfer.getData('mouseCoords'));

          var x = (ev.x - mouseCoords.x), y = (ev.y - mouseCoords.y);

          var elt = document.getElementById(iframeId);
          elt.style.top = y + 'px';
          elt.style.left = x + 'px';
        });

        return function postLink (scope, elem, attr) {

        }
      }
    }
  });
