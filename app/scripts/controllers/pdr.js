'use strict';

/**
 * @ngdoc function
 * @name paveApp.controller:PdrCtrl
 * @description
 * # PdrCtrl
 * Controller of the paveApp
 * content for the parent daily call included
 */
angular.module('paveApp')
  .controller('PdrCtrl', function ($scope,$location,$routeParams,Encounters) {
    
    $scope.userId = $routeParams.userId;
    $scope.sessionIndex = $routeParams.sessionIndex;
    $scope.taskIndex = $routeParams.taskIndex;

  	$scope.issues = ['Animal Cruelty','Arguing','Backtalking','Bedwetting','Complaining','Daydreaming','Defiance','Depression/Sadness','Destructiveness','Encopresis','Fearfulness','Fighting','Interrupting','Irritability','Jealousy','Lying','Nervous/Jittery','Notminding','Pant Wetting','Pouting','School Problems','Sexual Behaviors','Short Attention Span','Sleep Problems/Nightmares','Sluggishness','Stealing','Swearing','Teasing','Worried/Anxious','Biting','Hitting','Loudness','Waking at night','Crying','Hyperactivity','Repetitive Questions','Tantrums','Whining','Yelling'];

  	$scope.feelings = ['Stressed','Depressed','Positive','Hopeful','Overwhelmed'];

  	$scope.submit = function(){

  		window.location.href = $scope.nextPage;

  	}

    $scope.issueHappened      = [];
    $scope.issueDistressLevel = {};
    $scope.issueResponse      = {};

    $scope.issueHappenedToggle = function(issue){
    
      var idx = $scope.issueHappened.indexOf(issue);

      // is currently selected
      if (idx > -1) {
        $scope.issueHappened.splice(idx, 1);
      }

      // is newly selected
      else {
        $scope.issueHappened.push(issue);
      }

    }

  	$scope.cravingsTrue = false;


    $scope.distressScore = 0;


  	$scope.cravings = function(yes_no){

  		$scope.cravingsTrue = yes_no;

  	}

    $scope.submit = function(){
      Encounters.setTaskCompleted($scope.userId,$scope.sessionIndex,$scope.taskIndex,$('form').serialize());
      $location.path("history/" + $scope.userId);

    }


  });
