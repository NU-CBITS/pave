'use strict';

/**
 * @ngdoc function
 * @name paveApp.controller:UserCtrl
 * @description
 * # UserCtrl
 * Controller of the paveApp
 * show / edit page for an individual user
 */
angular.module('paveApp')
  .controller('UserCtrl', function ($scope, $routeParams, $filter, $location, Users, uuid4) {


  	$scope.userId       = $routeParams.userId || null;
  	$scope.user         = Users.get($scope.userId) || { id:uuid4.generate(), isAdmin:false, isProvider:false, isClient:false, isPDRcaller:false, isSupervisor:false, createdAt:new Date() };
    $scope.alertMessage = '';

  	$scope.saveUser = function(nextLocation){

      var nextPage = nextLocation || '/users';
      
      if ($scope.user.isAdmin == false && $scope.user.isProvider == false && $scope.user.isClient == false && $scope.user.isSupervisor == false && $scope.user.isPDRcaller == false) {
        $scope.alertMessage = 'You must select a role!'

      } else if ( ( $scope.user.isAdmin == true || $scope.user.isProvider == true || $scope.user.isPDRcaller == true || $scope.user.isSupervisor == true) && $scope.user.isClient == true ) {
        $scope.alertMessage = 'Admins, providers, supervisors and PDR callers cannot be clients!'

      } else {
        Users.upsert($scope.user);
        $location.url(nextPage);
      }      

  	}

  });