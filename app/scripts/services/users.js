'use strict';

/**
 * @ngdoc service
 * @name paveApp.users
 * @description
 * # users
 * Service in the paveApp.
 */
angular.module('paveApp')
  .service('Users', function ($firebase, $rootScope, $filter) {

  var service = {};

  service.users = [
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
  ];

  service.administrators = $filter('filter')(service.users, {isAdmin:true},true);
  service.providers = $filter('filter')(service.users, {isProvider:true},true);
  service.clients = $filter('filter')(service.users, {isClient:true},true);

  service.add = function(object){
  	service.users.push(object);
  }

  return service

 	// var ref = new Firebase($rootScope.dataIO + '/users');
  // var sync = $firebase(ref);
  // // download the data into a local object
  // var syncObject = sync.$asObject();
  // // synchronize the object with a three-way data binding
  // // click on `index.html` above to see it used in the DOM!
  // syncObject.$bindTo(scope, "data");

  });
