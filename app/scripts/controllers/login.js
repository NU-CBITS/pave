'use strict';

/**
 * @ngdoc function
 * @name paveApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the paveApp
 */
angular.module('paveApp')
  .controller('LoginCtrl', function ($scope,$rootScope,$location,$cookies) {
    
  	$scope.submit = function(){

  		$cookies.userExists = true;
  		$rootScope.userExists = $cookies.userExists;

  		window.location.href = "/";

  	}

  });
