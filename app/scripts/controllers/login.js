'use strict';

/**
 * @ngdoc function
 * @name paveApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the paveApp
 */
angular.module('paveApp')
  .controller('LoginCtrl', function ($scope,$rootScope,$cookies) {
    
  	$scope.submit = function(){

  		$cookies.userLoggedIn = true;
  		$scope.userLoggedIn = $rootScope.userLoggedIn;

  	}

  });