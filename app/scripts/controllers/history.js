'use strict';

/**
 * @ngdoc function
 * @name paveApp.controller:HistoryCtrl
 * @description
 * # HistoryCtrl
 * Controller of the paveApp
 */
angular.module('paveApp')
  .controller('HistoryCtrl', function ($scope,$routeParams,$filter,$location,Encounters,Users) {
    $scope.subNavExists = true;

    $scope.subNavItems = [
	    {html:'Review',href:'#/history/review',class:''},
	    {html:'Add',href:'#/history/add',class:''},
	    {html:'History',href:'#/history/history',class:''},
    ];

    $scope.type             = $routeParams.type;
    $scope.userId           = $routeParams.userId;
    $scope.date             = { date: null };
    $scope.encounters       = Encounters.contents;
    $scope.encounterTasks   = Encounters.tasks;

    if($scope.userId == undefined){
        $scope.clients  = Users.clients;
        $scope.client   = { client: {} };
    } else {
        $scope.clients  = [Users.get($scope.userId)];
        $scope.client   = {client:Users.get($scope.userId)};
    }



    $scope.addEncounter = function(){

    	var recordToAdd = {};

        recordToAdd.subject = $scope.client.client;
        recordToAdd.tasks = [];
   
        $.each($scope.encounterTasks,function(idx,el){
            recordToAdd.tasks.push({
                name:el.name,
                preVisit:{date:$scope.date.date,isCompleted:false}
            });
        });

    	Encounters.add(recordToAdd);
    	$location.path("/history/review");	

    };

    $scope.movedToHistory = function(){};


  });
