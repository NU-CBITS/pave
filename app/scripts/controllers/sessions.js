'use strict';

/**
 * @ngdoc function
 * @name paveApp.controller:SessionsCtrl
 * @description
 * # SessionsCtrl
 * Controller of the paveApp
 */
angular.module('paveApp')
  .controller('SessionsCtrl', function ($scope,$sce,$routeParams,$filter) {
    $scope.subNavExists = true;

    $scope.subNavItems = [
	    {html:'Review',href:'#/sessions/review',class:''},
	    {html:'Record',href:'#/sessions/record',class:''},
    ];

    $scope.type = $routeParams.type;

    $scope.videogular = {};

    $scope.videogular.API = null;
 
    $scope.videogular.onPlayerReady = function(API) {
        $scope.videogular.API = API;
    };

    $scope.videogular.sources = [
        {src: $sce.trustAsResourceUrl("http://mohrlab.northwestern.edu/video/video.mp4"), type: "video/mp4"},
    ];

    $scope.videogular.theme = "bower_components/videogular-themes-default/videogular.css";

    $scope.videogular.onCompleteVideo = function(){
        $scope.showFreezeButton = true;
        $scope.showPlayButton = true;
    };

    $scope.labels = ['listening','watching','waiting'];

    $scope.timepoints = [];
    $scope.timepoint = {};

    $scope.showFreezeButton = true;
    $scope.showPlayButton = true;




    $scope.freezeForTagging = function(){
        $scope.videogular.API.pause();
        $scope.showFreezeButton = false;
        $scope.timepoint = {};
    }

    $scope.play = function(){
        $scope.videogular.API.play(); 
        $scope.showPlayButton = false;
    }

    $scope.stop = function(){
        $scope.videogular.API.stop(); 
        $scope.showPlayButton = false;
    }

    $scope.addTag = function(){

        var timepoint = {};
        timepoint.time = $scope.videogular.API.currentTime / 1000;
        timepoint.timestamp = $filter('date')( timepoint.time, 'mm:ss');
        timepoint.tag = $scope.timepoint.tag;
        timepoint.notes = $scope.timepoint.notes;
        $scope.timepoints.push(timepoint);
        $scope.videogular.API.play();
        $scope.showFreezeButton = true;

    }

    $scope.jumpTo = function(time){

        $scope.videogular.API.seekTime(time);
        $scope.videogular.API.play();

    }



  });
