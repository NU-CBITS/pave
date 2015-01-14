'use strict';

/**
 * @ngdoc service
 * @name paveApp.surveys
 * @description
 * # surveys
 * Service in the paveApp.
 */
angular.module('paveApp')
  .service('surveys', function () {
  var ref = new Firebase($rootScope.dataIO + '/surveys');
  var sync = $firebase(ref);
  // download the data into a local object
  var syncObject = sync.$asObject();
  // synchronize the object with a three-way data binding
  // click on `index.html` above to see it used in the DOM!
  syncObject.$bindTo($scope, "data");

  });
