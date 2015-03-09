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

  	$scope.alertMessage = '';

    $scope.passwordReset = function(){

    	$scope.alertMessage = 'Password reset email sent!';

    }
  });
