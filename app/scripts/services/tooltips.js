'use strict';

/**
 * @ngdoc service
 * @name paveApp.tooltips
 * @description
 * # tooltips
 * Service in the paveApp.
 */
angular.module('paveApp')
  .service('tooltips', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function


    var contents = {};


    contents.items = [];

    contents.items.push({name:'Encounter',label:'encounter',definition:''});
    contents.items.push({name:'User',label:'encounter',definition:''});
    contents.items.push({name:'Video',label:'encounter',definition:''});



    return contents




  });
