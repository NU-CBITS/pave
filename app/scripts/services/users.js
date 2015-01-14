'use strict';

/**
 * @ngdoc service
 * @name paveApp.users
 * @description
 * # users
 * Service in the paveApp.
 */
angular.module('paveApp')
  .service('users', function ($firebase, $rootScope) {

 	var ref = new Firebase($rootScope.dataIO + '/users');


  });
