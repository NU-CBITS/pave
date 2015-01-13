'use strict';

/**
 * @ngdoc function
 * @name paveApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the paveApp
 */
angular.module('paveApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
