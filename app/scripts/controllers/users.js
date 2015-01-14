'use strict';

/**
 * @ngdoc function
 * @name paveApp.controller:UsersCtrl
 * @description
 * # UsersCtrl
 * Controller of the paveApp
 */
angular.module('paveApp')
  .controller('UsersCtrl', function ($scope, $routeParams, $filter, users ) {

    $scope.subNavExists = true;

    $scope.subNavItems = [
	    {html:'Administrators',href:'#/users/administrators',class:''},
	    {html:'Providers',href:'#/users/providers',class:''},
	    {html:'Clients',href:'#/users/clients',class:''},
    ];

    $scope.userType = $routeParams.userType || 'administrators';

    $scope.users = [
   		{id:1,name:'Lisa Saldana',email:"lisa@oslc.org",isAdmin:true,isProvider:true,isClient:false,createdAt:'',lastLogin:''},
			{id:2,name:'Mark Begale',email:"m.begale@gmail.com",isAdmin:true,isProvider:true,isClient:false,createdAt:'',lastLogin:''},
			{id:4,name:'Baroness Schrader',email:"baroness@schrader.com",isAdmin:true,isProvider:true,isClient:false,createdAt:'',lastLogin:''},
      {id:5,name:'Maria Von Trapp',email:"maria@vontrapp.org",isAdmin:false,isProvider:true,isClient:false,createdAt:'',lastLogin:''},
    	{id:6,name:'Colonel Von Trapp',email:"plummer@vontrapp.org",isAdmin:true,isProvider:true,isClient:false,createdAt:'',lastLogin:''},
      {id:7,name:'Louisa',email:"louisa@vontrapp.org",isAdmin:true,isProvider:false,isClient:false,createdAt:'',lastLogin:''},
      {id:8,name:'Brigitta',email:"brigitta@vontrapp.org",isAdmin:true,isProvider:false,isClient:true,createdAt:'',lastLogin:''},
      {id:9,name:'Liesl',email:"Liesl@vontrapp.org",isAdmin:false,isProvider:false,isClient:true,createdAt:'',lastLogin:''},
      {id:10,name:'Kurt',email:"kurt@vontrapp.org",isAdmin:false,isProvider:false,isClient:true,createdAt:'',lastLogin:''},
      {id:11,name:'Marta',email:"marta@vontrapp.org",isAdmin:false,isProvider:false,isClient:true,createdAt:'',lastLogin:''},
      {id:12,name:'Friedrich',email:"frierich@vontrapp.org",isAdmin:false,isProvider:false,isClient:true,createdAt:'',lastLogin:''}
    ]
  



  });
