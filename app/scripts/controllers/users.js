'use strict';

/**
 * @ngdoc function
 * @name paveApp.controller:UsersCtrl
 * @description
 * # UsersCtrl
 * Controller of the paveApp
 */
angular.module('paveApp')
  .controller('UsersCtrl', function ($scope, $routeParams, $filter, Users) {

    $scope.subNavExists = true;

    $scope.subNavItems = [
	    {html:'Administrators',href:'#/users/administrators',class:''},
	    {html:'Providers',href:'#/users/providers',class:''},
	    {html:'Clients',href:'#/users/clients',class:''},
    ];

    $scope.userType = $routeParams.userType || 'administrators';

    $scope.users = Users.users;
  



  });
