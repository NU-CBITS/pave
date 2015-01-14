'use strict';

/**
 * @ngdoc service
 * @name paveApp.login
 * @description
 * # login
 * Service in the paveApp.
 */
angular.module('paveApp')
  .service('login', function ($firebase,$rootScope) {
  var ref = new Firebase($rootScope.dataIO);

	ref.authWithPassword({
	  email    : "m.begale@gmail.com",
	  password : "sLqPLhSLf8HKK6yc"
	}, function(error, authData) {
	  if (error) {
	    console.log("Login Failed!", error);
	  } else {
	    console.log("Authenticated successfully with payload:", authData);
	  }
	});


  });