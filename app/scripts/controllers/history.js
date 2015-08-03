'use strict';

/**
 * @ngdoc function
 * @name paveApp.controller:HistoryCtrl
 * @description
 * # HistoryCtrl
 * Controller of the paveApp
 */
angular.module('paveApp')
  .controller('HistoryCtrl', function ($scope,$routeParams,$filter,$location,uuid4,Encounters,Users,Logs) {

    $scope.type                 = $routeParams.type;
    $scope.userId               = $routeParams.userId;
    $scope.date                 = { date: null };
    $scope.client               = Users.get($scope.userId);

    $scope.encounterTasks       = Encounters.tasks;
    $scope.encounters           = Encounters.get($scope.userId);

    $scope.logs                 = Logs.get($scope.userId);

    $scope.currentDateTime      = new Date();

    $scope.selectedTaskName         =  "";
    $scope.selectedSessionNumber    =  "";


    $scope.showSessionModal = function(number,name,label){

        $('#session-modal').modal('show');
        $('.modal-backdrop').remove();
        
        $scope.selectedTaskName         =  name;
    
        $scope.selectedSessionNumber    =  number;

        $scope.selectedTaskLabel        =  label;

        $scope.currentSessionDate = $filter('filter')($scope.encounters,{session:number},true)[0].date;
        $scope.currentSessionDate = $filter('filter')($scope.encounters,{session:number},true)[0].notes;


        debugger;
        console.log($scope.encounters);

    }

    $scope.saveSession = function(sessionNumber){
        $('#session-modal').modal('hide');


    }

    $scope.showLogModal= function(){
        $scope.lognotes = null;
        $('#log-modal').modal('show');
        $('.modal-backdrop').remove();

    }

    $scope.saveLog = function(){
        $('#log-modal').modal('hide');
        $scope.logs.push({notes:$scope.lognotes, date:new Date()});
        Logs.set($scope.userId,$scope.logs)

    }

    $scope.movedToHistory = function(){};


  });
