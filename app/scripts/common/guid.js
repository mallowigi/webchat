/**
 * Created by eliorb on 03/06/2015.
 */
angular.module('webChat.common')
  .factory('guid', function guid () {
    'use strict';
    function seed () {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }

    return function () {
      return seed() + seed() + '-' + seed() + '-' + seed() + '-' +
             seed() + '-' + seed() + seed() + seed();
    };
  })
;
