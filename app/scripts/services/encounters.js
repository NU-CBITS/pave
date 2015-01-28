'use strict';

/**
 * @ngdoc service
 * @name paveApp.encounters
 * @description
 * # encounters
 * Service in the paveApp.
 */
angular.module('paveApp')
  .service('Encounters', function () {
 
 	// var ref = new Firebase($rootScope.dataIO + '/encounters');
  // var sync = $firebase(ref);
  // // download the data into a local object
  // var syncObject = sync.$asObject();
  // // synchronize the object with a three-way data binding
  // // click on `index.html` above to see it used in the DOM!
  // syncObject.$bindTo($scope, "data");

  var service = {};

  service.tasks = [
    {order:1, label:'Pre Visit Coaching', name:'preVisit'},
    {order:2, label:'Visitation', name:'visitation'},
    {order:3, label:'PDR Call', name:'pdr', questionnaire:'#/pdr'},
    {order:4, label:'Session Calls', name:'session'},
    {order:5, label:'Intermediary Contacts', name:'intermediary'},
    {order:6, label:'Fidelity Ratings', name:'fidelity',questionnaire:'#/fidelityquestionnaire'},
  ];

  service.contents = [];

  service.add = function(object){
  	service.contents.push(object);
  }

  return service

  });
