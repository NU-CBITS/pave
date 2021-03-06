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

  var getIndexOf = function (arr, val, prop) {
      var l = arr.length,
        k = 0;
      for (k = 0; k < l; k = k + 1) {
        if (arr[k][prop] === val) {
          return k;
        }
      }
      return 'false';
    }

  service.users = [
  	{id:'1',username:'Lisa',firstName:'Lisa',lastName:'Saldana',email:"lisa@oslc.org",isAdmin:true,isProvider:true,isClient:false,isPDRcaller:false,isSupervisor:false,createdAt:'',lastLogin:''},
		{id:'2',username:'Mark',firstName:'Mark',lastName:'Begale',email:"m.begale@gmail.com",isAdmin:true,isProvider:true,isClient:false,isPDRcaller:false,isSupervisor:false,createdAt:'',lastLogin:''},
		{id:'3',username:'Baroness',firstName:'Baroness',lastName:'Schrader',email:"baroness@schrader.com",isAdmin:true,isProvider:true,isClient:false,isPDRcaller:false,isSupervisor:false,createdAt:'',lastLogin:''},
    {id:'4',username:'Maria',firstName:'Maria',lastName:'Von Trapp',email:"maria@vontrapp.org",isAdmin:false,isProvider:true,isClient:false,isPDRcaller:false,isSupervisor:false,createdAt:'',lastLogin:''},
  	{id:'5',username:'Colonel',firstName:'Christopher',lastName:'Plummer',email:"plummer@vontrapp.org",isAdmin:true,isProvider:true,isClient:false,isPDRcaller:false,isSupervisor:false,createdAt:'',lastLogin:''},
    {id:'6',username:'Louisa',firstName:'Louisa',lastName:'Von Trapp',email:"louisa@vontrapp.org",isAdmin:true,isProvider:false,isClient:false,isPDRcaller:false,isSupervisor:false,createdAt:'',lastLogin:''},
    {id:'8',username:'Liesl',firstName:'Liesl',lastName:'Von Trapp',email:"Liesl@vontrapp.org",isAdmin:false,isProvider:false,isClient:true,isPDRcaller:false,isSupervisor:false,createdAt:'',lastLogin:''},
    {id:'9',username:'Kurt',firstName:'Kurt',lastName:'Von Trapp',email:"kurt@vontrapp.org",isAdmin:false,isProvider:false,isClient:true,isPDRcaller:false,isSupervisor:false,createdAt:'',lastLogin:''},
    {id:'10',username:'Marta',firstName:'Marta',lastName:'Von Trapp',email:"marta@vontrapp.org",isAdmin:false,isProvider:false,isClient:true,isPDRcaller:false,isSupervisor:false,createdAt:'',lastLogin:''},
    {id:'11',username:'Friedrich',firstName:'Freddy',lastName:'Plummer',email:"frierich@vontrapp.org",isAdmin:false,isProvider:false,isClient:true,isPDRcaller:false,isSupervisor:false,createdAt:'',lastLogin:''}
  ];

  service.upsert = function(object){

    var arrayIndex = getIndexOf(service.users,object.id,'id');

    if (arrayIndex != 'false'){
      //update
      for (var attrname in object) { 
        service.users[arrayIndex][attrname] = object[attrname]; 
      }
    }
    else {
      //insert
      service.users.push(object);
    }
    debugger;
  }

  service.get = function(id){
    return $filter('filter')(service.users,{id:id},true)[0]
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
