'use strict';

/**
 * @ngdoc function
 * @name paveApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the paveApp
 */
angular.module('paveApp')
  .controller('MainCtrl', function ($scope, $rootScope) {

  	$scope.appVersion = $rootScope.appVersion;
  	$scope.mainNavItems = $rootScope.mainNavItems;


  });
