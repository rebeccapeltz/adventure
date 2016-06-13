const angular = require('angular');

var adventureApp = angular.module('adventureApp', []);
require('/controllers/game_controller')(adventureApp);
