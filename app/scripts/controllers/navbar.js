'use strict';

/**
 * @ngdoc function
 * @name paveApp.controller:NavbarCtrl
 * @description
 * # NavbarCtrl
 * Controller of the paveApp
 */
angular.module('paveApp')
  .controller('NavbarCtrl', function ($scope, $rootScope, $location, $cookieStore) {

    $scope.siteName = $rootScope.siteName;

    $scope.mainNavItems = $rootScope.mainNavItems;

    $scope.settingsItems = $rootScope.settingsItems;

    $scope.userExists = $rootScope.userExists;

    $scope.logout = function(){
    	$cookieStore.remove('userLoggedIn');
    	$location.href = "#/";
    }

    // $scope.active = function(linkName){

    // 	if (linkName == ){
    // 	return 'active'
    // 	}

    // }

  });
