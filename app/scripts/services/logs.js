'use strict';

/**
 * @ngdoc service
 * @name paveApp.logs
 * @description
 * # logs
 * Service in the paveApp.
 */
angular.module('paveApp')
  .service('Logs', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function

    var contents = {};

    var currentLogs = function(userId){
    	var logArray = [];
    	//TODO server side pull
    	return logArray
    }; 

    contents.get = function(userId){

    	var logArray = currentLogs(userId);
    	return logArray

    }

    contents.add = function(userId,object){

    	var logArray = currentLogs(userId).push(contents);
    	//TODO serve side push
    	
    	return logArray

    }

    return contents


  });
