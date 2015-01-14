'use strict';

/**
 * @ngdoc service
 * @name paveApp.encounters
 * @description
 * # encounters
 * Service in the paveApp.
 */
angular.module('paveApp')
  .service('encounters', function () {
 	var ref = new Firebase($rootScope.dataIO + '/encounters');
  var sync = $firebase(ref);
  // download the data into a local object
  var syncObject = sync.$asObject();
  // synchronize the object with a three-way data binding
  // click on `index.html` above to see it used in the DOM!
  syncObject.$bindTo($scope, "data");

  });
