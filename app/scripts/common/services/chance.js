/**
 * Created by eliorb on 05/06/2015.
 */
angular.module('webChat.common')
  .factory('chance', ['$window', function chanceService ($window) {
    "use strict";

    // Get the global defined chance
    var chance = $window.chance;

    if (!chance) {
      throw Error('chance is not defined');
    }

    // Extend chance
    chance.channel = function () {
      return chance.pick([
        '#random',
        '#general',
        '#ux',
        '#ui',
        '#frontend',
        '#backend'
      ]);
    };

    return chance;

  }]
);
