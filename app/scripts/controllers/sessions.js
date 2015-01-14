'use strict';

/**
 * @ngdoc function
 * @name paveApp.controller:SessionsCtrl
 * @description
 * # SessionsCtrl
 * Controller of the paveApp
 */
angular.module('paveApp')
  .controller('SessionsCtrl', function ($scope,$routeParams) {
    $scope.subNavExists = true;

    $scope.subNavItems = [
	    {html:'Review',href:'#/sessions/review',class:''},
	    {html:'Record',href:'#/sessions/record',class:''},
	    {html:'Upcoming',href:'#/sessions/upcoming',class:''},
    ];

    $scope.type = $routeParams.type;

    $scope.timepoints = [
    {timestamp:"00:04",label:"listening", labelClass:"warning",notes:"the bear listened"},
    {timestamp:"00:11",label:"watching", labelClass:"warning",notes:"the bear watched"},
    {timestamp:"00:14",label:"waiting", labelClass:"warning",notes:"the bear waited"}

    ]
  });
