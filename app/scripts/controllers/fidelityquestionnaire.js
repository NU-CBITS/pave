'use strict';

/**
 * @ngdoc function
 * @name paveApp.controller:FidelityquestionnaireCtrl
 * @description
 * # FidelityquestionnaireCtrl
 * Controller of the paveApp
 * This controller details the questions in the fidelity questionnaire 
 * to be delivered in the final step of the encounter process
 * as of 3/9/15 Lisa Saldana reported that these questions are not finalized
 */
angular.module('paveApp')
  .controller('FidelityquestionnaireCtrl', function ($scope, $location, $routeParams, Encounters) {

    $scope.userId = $routeParams.userId;
    $scope.sessionIndex = $routeParams.sessionIndex;
    $scope.taskIndex = $routeParams.taskIndex;

  	$scope.content=['Discussion included specific information on reinforcing parents\’ efforts ','Discussion included reinforcing parent-child relationships','Discussion identified small steps case planners took or will take with families','Discussion included focus on small steps parents took or could take during the next week','Discussion included examples of supporting and encouraging parents','Discussion noted documenting parent accomplishments ','Solutions and strategies were	discussed in behavioral terms','Barriers to parental progress included discussion of how to help families overcome them'];

    $scope.process=['Parent and family strengths were used in case planning','The atmosphere of the meeting was friendly and supportive (e.g., supervisor smiles, uses humor)','Supervisor redirected conversation when necessary','Supervisor reinforced caseplanners for positive efforts with families','Supervisor managed the meeting time well, covered > 2 cases','Caseplanners were reinforced for small steps accomplished on their cases ','Supervisor ended group well (on time, encouraging statements)'];

    $scope.standardOptions = [
	    {label:'Not at All',value:1},
	    {label:'Hardly Ever',value:2},	
	    {label:'Somewhat',value:3},	
	    {label:'Mostly',value:4},
	    {label:'Very Much',value:5}
    ];

  	$scope.submit = function(){

      Encounters.setTaskCompleted($scope.userId,$scope.sessionIndex,$scope.taskIndex,$('form').serializeArray());

  		$location.path("history/" + $scope.userId);

  	}

  });
