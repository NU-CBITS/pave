'use strict';

/**
 * @ngdoc function
 * @name paveApp.controller:HistoryCtrl
 * @description
 * # HistoryCtrl
 * Controller of the paveApp
 */
angular.module('paveApp')
  .controller('HistoryCtrl', function ($scope,$routeParams,$filter,$location) {
    $scope.subNavExists = true;

    $scope.subNavItems = [
	    {html:'Review',href:'#/history/review',class:''},
	    {html:'Add',href:'#/history/add',class:''},
	    {html:'History',href:'#/history/history',class:''},
    ];

    $scope.type = $routeParams.type;

    $scope.subjects = [
   		{id:1,name:'Louisa',email:"louisa@vontrapp.org"},
			{id:2,name:'Brigitta',email:"brigitta@vontrapp.org"},
			{id:3,name:'Liesl',email:"Liesl@vontrapp.org"},
			{id:4,name:'Kurt',email:"kurt@vontrapp.org"},
			{id:5,name:'Marta',email:"marta@vontrapp.org"},
			{id:6,name:'Friedrich',email:"frierich@vontrapp.org"}
    ];

    $scope.encounters = [{
    	subject:'Louisa',
    	preVisitDate:"1/15/15",
    	preVisitIsCompleted:false,
    	visitDate:"",
    	visitIsCompleted:false,
    	sessionDate:"",
    	sessionIsCompleted:false,
    	pdrDate:"",
    	pdrIsCompleted:false,
    	fidelityDate:"",
    	intermediaryDate:"",
    	intermediaryIsCompleted:false,
    	fidelityIsCompleted:false,
    	movedToHistory:false}
    ]

    $scope.encounterTasks = [
    {order:1, label:'Pre Visit Coaching', name:'preVisit'},
    {order:2, label:'Visitation', name:'visitation'},
    {order:3, label:'PDR Call', name:'pdr'},
    {order:4, label:'Session Calls', name:'session'},
    {order:5, label:'Intermediary Contacts', name:'intermediary'},
    {order:6, label:'Fidelity Ratings', name:'fidelity'},
    ];


    $scope.addEncounter = function(){

    	var recordToAdd = {
    	subject:$scope.subject,
    	preVisitDate:$scope.preVisitDate,
    	preVisitIsCompleted:false,
    	visitDate:"",
    	visitIsCompleted:false,
    	sessionDate:"",
    	sessionIsCompleted:false,
    	pdrDate:"",
    	pdrIsCompleted:false,
    	fidelityDate:"",
    	intermediaryDate:"",
    	intermediaryIsCompleted:false,
    	fidelityIsCompleted:false,
    	movedToHistory:false
    	}

    	$scope.encounters.push(recordToAdd);

    	$location.path("/history/review");	

    };

    $scope.movedToHistory = function(){};


  });
