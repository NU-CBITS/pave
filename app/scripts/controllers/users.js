'use strict';

/**
 * @ngdoc function
 * @name paveApp.controller:UsersCtrl
 * @description
 * # UsersCtrl
 * Controller of the paveApp
 */
angular.module('paveApp')
  .controller('UsersCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
