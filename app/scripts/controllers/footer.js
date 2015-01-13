'use strict';

/**
 * @ngdoc function
 * @name paveApp.controller:FooterCtrl
 * @description
 * # FooterCtrl
 * Controller of the paveApp
 */
angular.module('paveApp')
  .controller('FooterCtrl', function ($scope,$rootScope) {
    $scope.footer = $rootScope.footer;
  });
