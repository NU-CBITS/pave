'use strict';

/**
 * @ngdoc function
 * @name paveApp.controller:UsersCtrl
 * @description
 * # UsersCtrl
 * Controller of the paveApp
 */
angular.module('paveApp')
  .controller('UsersCtrl', function ($scope, $routeParams, $filter) {
    $scope.subNavExists = true;

    $scope.subNavItems = [
	    {html:'Administrators',href:'#/users/administrators',class:''},
	    {html:'Providers',href:'#/users/providers',class:''},
	    {html:'Subjects',href:'#/users/subjects',class:''},
    ];

    $scope.userType = $routeParams.userType || 'administrators';



    $scope.providers = [

   		{id:1,name:'Lisa Saldana',email:"lisa@oslc.org",isAdmin:true,managesPatients:[5,6]},
			{id:2,name:'Mark Begale',email:"m.begale@gmail.com",isAdmin:true,managesPatients:[3,4]},
			{id:4,name:'Baroness Schrader',email:"baroness@schrader.com",isAdmin:true,managesPatients:[]},
      {id:5,name:'Maria Von Trapp',email:"maria@vontrapp.org",isAdmin:false,managesPatients:[1,2]},
    	{id:6,name:'Colonel Von Trapp',email:"plummer@vontrapp.org",isAdmin:true,managesPatients:[]}
      
    ];

    $scope.subjects = [
   		{id:1,name:'Louisa',email:"louisa@vontrapp.org"},
			{id:2,name:'Brigitta',email:"brigitta@vontrapp.org"},
			{id:3,name:'Liesl',email:"Liesl@vontrapp.org"},
			{id:4,name:'Kurt',email:"kurt@vontrapp.org"},
			{id:5,name:'Marta',email:"marta@vontrapp.org"},
			{id:6,name:'Friedrich',email:"frierich@vontrapp.org"}
    ]



  });
