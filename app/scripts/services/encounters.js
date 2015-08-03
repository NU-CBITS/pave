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

  service.numberOfEncounters = 15;

  service.tasks = [
    {order:1, label:'Pre Visit', name:'preVisit'},
    {order:2, label:'Visit', name:'visitation'},
    {order:3, label:'PDR', name:'pdr', questionnaire:'#/pdr'},
    {order:4, label:'Session', name:'session'},
    {order:5, label:'Fidelity', name:'fidelity',questionnaire:'#/fidelityQuestionnaire'},
  ];

  service.contents = [];

  service.get = function(userId){

    var table = service.template();

    //add server side logic to update for user specific needs

    return table
  }

  service.set = function(userId,array){
    //TODO set array on server

    return array

  }

  service.template = function(){
    var templateArray = []; 
    var i=1
      for (i=0;i<=service.numberOfEncounters;i++)
      {
          templateArray.push({session:i, tasks:service.tasks, completed:false, date:'', notes:''})
      }

    return templateArray
  }

  return service

  });
