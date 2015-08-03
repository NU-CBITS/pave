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

    $scope.type                 = $routeParams.type;
    $scope.userId               = $routeParams.userId;
    $scope.date                 = { date: null };
    $scope.client               = Users.get($scope.userId);

    $scope.encounterTasks       = Encounters.tasks;
    $scope.encounters           = Encounters.get($scope.userId);

    $scope.selectedTaskName         =  "";
    $scope.selectedSessionNumber    =  "";

    $scope.showModal = function(number,name,label){

        $('#session-modal').modal('show');
        $('.modal-backdrop').remove();

        console.log(number,name,label);
        
        $scope.selectedTaskName         =  name;
    
        $scope.selectedSessionNumber    =  number;

        $scope.selectedTaskLabel         =  label;


    }

    $scope.logSupplemental= function(){

    }

    $scope.movedToHistory = function(){};


  });
