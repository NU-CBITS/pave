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

    $scope.pdrScoreArray = new Array($scope.issues.length);

  	$scope.feelings = ['Stressed','Depressed','Positive','Hopeful','Overwhelmed'];

    $scope.pdrScore = function(array){
      
      var contents = {};

      contents.intensity = 0;
      contents.core = 0

      for( var i = 0; i<array.length; i++){
        if (array[i] > 0 && array != undefined){
          contents.core++
          contents.intensity = contents.intensity + array[i]
        }

      }

      return contents
    }

  	$scope.cravingsTrue = false;

    $scope.distressScore = 0;

  	$scope.cravings = function(yes_no){

  		$scope.cravingsTrue = yes_no;

  	}

    $scope.pdrSet = function(index,value){

      $scope.pdrScoreArray[index] = value;

    }

    $scope.submit = function(){
      Encounters.setTaskCompleted($scope.userId,$scope.sessionIndex,$scope.taskIndex,$('form').serializeArray());
      $location.path("history/" + $scope.userId);

    }


  });
