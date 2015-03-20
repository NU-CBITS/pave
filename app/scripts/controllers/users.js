'use strict';

/**
 * @ngdoc function
 * @name paveApp.controller:UsersCtrl
 * @description
 * # UsersCtrl
 * Controller of the paveApp
 * provides an overvew of users in the application
 */
angular.module('paveApp')
  .controller('UsersCtrl', function ($scope, $routeParams, $filter, $sce, Users) {

    $scope.subNavExists = true;

    $scope.subNavItems = [
	    {html:'Staff',userType:'staff',href:'#/users/staff',class:''},
	    {html:'Clients',userType:'clients',href:'#/users/clients',class:''},
    ];

    $scope.userType     = $routeParams.userType || 'staff';
    $scope.pageTitle    = $filter('filter')($scope.subNavItems,{userType:$scope.userType},true)[0].html;
    
    $scope.users = function (){ 
        var contents = {};

        contents.clients = $filter('filter')(Users.users, {isClient:true},true);

        //four major study staff groups
        contents.administrators = $filter('filter')(Users.users, {isAdmin:true},true);
        contents.providers = $filter('filter')(Users.users, {isProvider:true},true);
        contents.PDRcallers = $filter('filter')(Users.users, {isPDRcaller:true},true);
        contents.supervisors = $filter('filter')(Users.users, {isSupervisor:true},true);

        //aggregation of all staff
        contents.staff = $filter('filter')(Users.users, {isClient:false},true);

        return contents[$scope.userType];
    }

    $scope.booleanFormatter = function(boolean){
     var trueView   = '<i class="glyphicon glyphicon-ok"></i>';
     var falseView  = '';
     var view       = '';

     if (boolean == true){
        view = trueView;
     }
     else {
        view = falseView;
     }

     return $sce.trustAsHtml(view)
    }
  
  });
