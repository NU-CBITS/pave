'use strict';

/**
 * @ngdoc service
 * @name paveApp.encounters
 * @description
 * # encounters
 * Service in the paveApp.
 */
angular.module('paveApp')
  .service('Encounters', function ($rootScope) {
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
    {order:1, label:'Pre Visit', name:'preVisit',completed:false, date:'', notes:''},
    {order:2, label:'Visit', name:'visitation',completed:false, date:'', notes:''},
    {order:3, label:'PDR', name:'pdr', questionnaire:'#/pdr',completed:false, date:'', notes:''},
    {order:4, label:'Session', name:'session',completed:false, date:'', notes:''},
    {order:5, label:'Fidelity', name:'fidelity',questionnaire:'#/fidelityQuestionnaire',completed:false, date:'', notes:''}
  ];

  service.contents = [];

  service.get = function(userId){
    if (service.contents.length == 0){
    var table = service.template();
    service.contents = table;

    }
    else {
      var table = service.contents;
    }


    //TODO add server side logic to update for user specific needs

    return table
  }

  service.set = function(userId,array){
    //TODO set array on server
    service.contents = array;

    return array

  }

  service.setVideoAsUploaded = function(userId,sessionIndex){

    service.contents[sessionIndex].videoRecorded = true;

  }

  service.setTaskCompleted = function(userId,sI,tI,dataContents){

    var sessionIndex = parseInt(sI);
    var taskIndex = parseInt(tI);
    debugger;
    service.contents[sessionIndex].tasks[taskIndex].completed = true;

    if(service.contents[sessionIndex].tasks[taskIndex].questionnaire != undefined){
      service.contents[sessionIndex].tasks[taskIndex].responses = dataContents;
      service.contents[sessionIndex].tasks[taskIndex].date = new Date();
    }
    else{
      service.contents[sessionIndex].tasks[taskIndex].notes = dataContents.notes;
      service.contents[sessionIndex].tasks[taskIndex].date = dataContents.date;
    } 

  }

  service.template = function(){
    var templateArray = []; 
    var i=1
      for (i=0;i<=service.numberOfEncounters;i++)
      {
          templateArray.push({session:i, videoRecorded: false, tasks:JSON.parse(JSON.stringify(service.tasks))})
      }

    return templateArray
  }

  return service

  });
