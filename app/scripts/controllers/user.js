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
  	$scope.user         = Users.get($scope.userId) || { id:uuid4.generate(), isAdmin:false, isProvider:false, isClient:false, isPDRcaller:false, isSupervisor:false, supervisees:[], assignedClients:[], createdAt:new Date() };
    $scope.alertMessage = '';

    $scope.clients = $filter('filter')(Users.users, {isClient:true},true);
    $scope.providers = $filter('filter')(Users.users, {isProvider:true},true);

  	$scope.saveUser = function(nextLocation){

      var nextPage = nextLocation || '/users';
      
      if ($scope.user.isAdmin == false && $scope.user.isProvider == false && $scope.user.isClient == false && $scope.user.isSupervisor == false && $scope.user.isPDRcaller == false) {
        $scope.alertMessage = 'You must select a role!'
      }else {
        Users.upsert($scope.user);
        $location.url(nextPage);
      }      

  	}

  });