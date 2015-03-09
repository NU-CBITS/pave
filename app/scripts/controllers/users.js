'use strict';

/**
 * @ngdoc function
 * @name paveApp.controller:UsersCtrl
 * @description
 * # UsersCtrl
 * Controller of the paveApp
 */
angular.module('paveApp')
  .controller('UsersCtrl', function ($scope, $routeParams, $filter, $sce, Users) {

    $scope.subNavExists = true;

    $scope.subNavItems = [
	    {html:'Administrators',userType:'administrators',href:'#/users/administrators',class:''},
	    {html:'Providers',userType:'providers',href:'#/users/providers',class:''},
	    {html:'Clients',userType:'clients',href:'#/users/clients',class:''},
    ];

    $scope.userType     = $routeParams.userType || 'administrators';
    $scope.pageTitle    = $filter('filter')($scope.subNavItems,{userType:$scope.userType},true)[0].html;
    
    $scope.users = function (){ 
        var contents = {}
        contents.administrators = $filter('filter')(Users.users, {isAdmin:true},true);
        contents.providers = $filter('filter')(Users.users, {isProvider:true},true);
        contents.clients = $filter('filter')(Users.users, {isClient:true},true);
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
