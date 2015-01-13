'use strict';

/**
 * @ngdoc function
 * @name paveApp.controller:SettingsCtrl
 * @description
 * # SettingsCtrl
 * Controller of the paveApp
 */
angular.module('paveApp')
  .controller('SettingsCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
