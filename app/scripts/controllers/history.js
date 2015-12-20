'use strict';
/**
 * @ngdoc function
 * @name paveApp.controller:HistoryCtrl
 * @description
 * # HistoryCtrl
 * Controller of the paveApp
 */
angular.module('paveApp')
    .controller('HistoryCtrl', function($scope, $routeParams, $filter, $location, $http, $rootScope, uuid4, Encounters, Users, Logs) {
        

        $scope.type = $routeParams.type;
        $scope.userId = $routeParams.userId;
        $scope.date = {
            date: null
        };
        $scope.client = Users.get($scope.userId);
        $scope.encounterTasks = Encounters.tasks;
        $scope.encounters = Encounters.get($scope.userId);
        $scope.logs = Logs.get($scope.userId);
        $scope.currentDateTime = new Date();
        $scope.selectedTaskName = "";
        $scope.selectedSessionIndex = -1;
        $scope.selectedTaskIndex = -1;

        $scope.sessionData = [];
        $scope.reportData = [];

        $http.get($rootScope.dataIO + '/sessions/' + $scope.userId + $rootScope.dataIOType).
        success(function(data, status, headers, config) {
            $scope.sessionData = data;

        }).
        error(function(data, status, headers, config) {
            $scope.error = $rootScope.errors.connectivity;
        });


        $scope.completionToStatus = function(status) {

            switch (status) {
                case false:
                    return 'warning';
                case true:
                    return 'success';
            }
        }
        
        $scope.showSessionModal = function(sessionIndex, name, label, taskIndex ) {
     
            $scope.selectedTaskName = name;
            $scope.selectedSessionIndex = sessionIndex;
            $scope.selectedTaskLabel = label;
            $scope.selectedTaskIndex = taskIndex;
            $scope.currentSessionDate = $scope.encounters[sessionIndex].tasks[taskIndex].date;
            $scope.currentSessionNotes = $scope.encounters[sessionIndex].tasks[taskIndex].notes
            $scope.currentSessionCompleted = $scope.encounters[sessionIndex].tasks[taskIndex].completed;
            $('#session-modal').modal('show');
            $('.modal-backdrop').remove();
        }
        
        $scope.saveSession = function(sessionIndex, taskIndex, notes,date) {
            $('#session-modal').modal('hide');
            
            $scope.encounters[sessionIndex].tasks[taskIndex].completed = true;
            $scope.encounters[sessionIndex].tasks[taskIndex].notes = notes;
            $scope.encounters[sessionIndex].tasks[taskIndex].date = date;
            
            Encounters.set($scope.userId, $scope.encounters);

        }
        
        $scope.showLogModal = function() {
            $scope.lognotes = null;
            $('#log-modal').modal('show');
            $('.modal-backdrop').remove();
        }
        
        $scope.saveLog = function() {
            $('#log-modal').modal('hide');
            $scope.logs.push({
                notes: $scope.lognotes,
                date: new Date()
            });
            Logs.set($scope.userId, $scope.logs)
        }

        $scope.showDataModal = function(sessionIndex, name, label, taskIndex ){
            $scope.selectedTaskName = name;
            $scope.selectedSessionIndex = sessionIndex;
            $scope.selectedTaskLabel = label;
            $scope.selectedTaskIndex = taskIndex;
            $scope.reportData = $scope.encounters[sessionIndex].tasks[taskIndex].responses;
            $scope.currentSessionDate = $scope.encounters[sessionIndex].tasks[taskIndex].date;
            $scope.currentSessionNotes = $scope.encounters[sessionIndex].tasks[taskIndex].notes
            $scope.currentSessionCompleted = $scope.encounters[sessionIndex].tasks[taskIndex].completed;
            $('#data-modal').modal('show');
            $('.modal-backdrop').remove();

        }

        $scope.cleanValue = function(value){

            var valueView = {class:'',value:''};
            if(value == ''){
                valueView.class = 'label label-default';
                valueView.value = 'none';

            } else{
                valueView.class = 'label label-primary';
                valueView.value = value;            }
            return valueView

        }
        
    });