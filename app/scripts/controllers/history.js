'use strict';

/**
 * @ngdoc function
 * @name paveApp.controller:HistoryCtrl
 * @description
 * # HistoryCtrl
 * Controller of the paveApp
 */
angular.module('paveApp')
  .controller('HistoryCtrl', function ($scope,$routeParams,$filter,$location,uuid4,Encounters,Users) {
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
        $scope.clients  = $filter('filter')(Users.users,{isClient:true},true);
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
                id: uuid4.generate(),
                name:el.name,
                preVisit:{date:$scope.date.date,isCompleted:false},
                questionnaire: el.questionnaire
            });
        });

    	Encounters.add(recordToAdd);
    	$location.path("/history/review");	

    };

    $scope.movedToHistory = function(){};


  });
