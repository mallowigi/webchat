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
          var droppable;
          var x = (ev.x - mouseCoords.x);
          var y = (ev.y - mouseCoords.y);

          // if inside the iframe
          if (window.parent !== window) {
            droppable = window.parent.document.getElementById(iframeId);

            // we need to find out where is the iframe relative to the body
            var iframe = droppable.getElementsByTagName('iframe')[0];
            var rect = iframe.getBoundingClientRect();
            x += rect.left;
            y += rect.top;

          } else {
            droppable = document.getElementById(iframeId);
          }

          // Set its top and left
          droppable.style.top = y + 'px';
          droppable.style.left = x + 'px';
        });

        return function postLink (scope, elem, attr) {

        }
      }
    }
  });
