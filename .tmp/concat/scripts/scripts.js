'use strict';

/**
 * @ngdoc overview
 * @name paveApp
 * @description
 * # paveApp
 *
 * Main module of the application.
 */
angular
  .module('paveApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'firebase',
    'uuid',
    'com.2fdevs.videogular',
    'com.2fdevs.videogular.plugins.controls',
    'com.2fdevs.videogular.plugins.overlayplay',
    'com.2fdevs.videogular.plugins.poster',

  ])
  .config(["$routeProvider", function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/record', {
        templateUrl: 'views/record.html',
        controller: 'RecordCtrl'
      })
      .when('/fidelityQuestionnaire', {
        templateUrl: 'views/fidelityquestionnaire.html',
        controller: 'FidelityquestionnaireCtrl'
      })
      .when('/pdr', {
        templateUrl: 'views/pdr.html',
        controller: 'PdrCtrl'
      })
      .when('/user', {
        templateUrl: 'views/user.html',
        controller: 'UserCtrl'
      })
      .when('/user/:userId', {
        templateUrl: 'views/user.html',
        controller: 'UserCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/users', {
        templateUrl: 'views/users.html',
        controller: 'UsersCtrl'
      })
      .when('/users/:userType', {
        templateUrl: 'views/users.html',
        controller: 'UsersCtrl'
      })
      .when('/sessions', {
        templateUrl: 'views/sessions.html',
        controller: 'SessionsCtrl'
      })
      .when('/sessions/:type/:userId/:session', {
        templateUrl: 'views/sessions.html',
        controller: 'SessionsCtrl'
      })
      .when('/sessions/:type/:userId/:session/:event', {
        templateUrl: 'views/sessions.html',
        controller: 'SessionsCtrl'
      })
      .when('/settings', {
        templateUrl: 'views/settings.html',
        controller: 'SettingsCtrl'
      })
      .when('/history', {
        templateUrl: 'views/history.html',
        controller: 'HistoryCtrl'
      })
      .when('/history/:userId', {
        templateUrl: 'views/history.html',
        controller: 'HistoryCtrl'
      })      
      .otherwise({
        redirectTo: '/'
      })
      
  }]).run(["$rootScope", "$cookies", function($rootScope,$cookies) {

    $rootScope.footer         = 'Powered by CBITs';
    $rootScope.siteName       = 'PAVE';
    $rootScope.appVersion     = '0.3.2';
    $rootScope.dataIO         = 'https://pave.firebaseio.com';
    $rootScope.dataIOType     = '.json';
    $rootScope.videoUploadURL = 'https://mohrlab.northwestern.edu/pave/videos';
    $rootScope.currentMainURL = 'https:///pave.firebaseapp.com';

    $rootScope.errors = {};
    $rootScope.errors.connectivity = 'We\'re sorry, there seems to be an issue with connectivity, please check your connection and try again!';

    $rootScope.navItems = [
      {html:'Users',href:'#/users',class:'btn-primary', icon:'user'},
      {html:'Videos',href:'#/sessions',class:'btn-primary', icon:'facetime-video'},
      {html:'Encounters',href:'#/history',class:'btn-primary', icon:'eye-open'}
    ];
    
    $rootScope.settingsItems = [
      {html:'Settings', href:'#/users',class:'btn-default'}
    ];  

    $rootScope.currentUser = '1';

    $rootScope.userLoggedIn = function(){ 

      if ($cookies.userLoggedIn == 'true')
        { return true }
      else 
        { return false }

    };

}]);

'use strict';

/**
 * @ngdoc function
 * @name paveApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the paveApp
 */
angular.module('paveApp')
  .controller('MainCtrl', ["$scope", "$rootScope", "Users", function ($scope, $rootScope, Users) {

  	$scope.appVersion 	= $rootScope.appVersion;
  	$scope.mainNavItems = $rootScope.mainNavItems;
  	$scope.currentUser 	= Users.get($rootScope.currentUser);
  	$scope.userLoggedIn = $rootScope.userLoggedIn;
  	
  }]);

'use strict';

/**
 * @ngdoc function
 * @name paveApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the paveApp
 */
angular.module('paveApp')
  .controller('AboutCtrl', ["$scope", function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);

'use strict';

/**
 * @ngdoc function
 * @name paveApp.controller:NavbarCtrl
 * @description
 * # NavbarCtrl
 * Controller of the paveApp
 */
angular.module('paveApp')
  .controller('NavbarCtrl', ["$scope", "$rootScope", "$location", "$cookieStore", function ($scope, $rootScope, $location, $cookieStore) {

    $scope.siteName = $rootScope.siteName;

    $scope.mainNavItems = $rootScope.mainNavItems;

    $scope.settingsItems = $rootScope.settingsItems;

    $scope.userExists = $rootScope.userExists;

    $scope.logout = function(){
    	$cookieStore.remove('userLoggedIn');
    	$location.href("/");
    }

    // $scope.active = function(linkName){

    // 	if (linkName == ){
    // 	return 'active'
    // 	}

    // }

  }]);

'use strict';

/**
 * @ngdoc function
 * @name paveApp.controller:FooterCtrl
 * @description
 * # FooterCtrl
 * Controller of the paveApp
 */
angular.module('paveApp')
  .controller('FooterCtrl', ["$scope", "$rootScope", function ($scope,$rootScope) {
    $scope.footer = $rootScope.footer;
    $scope.appVersion = $rootScope.appVersion;
  }]);

'use strict';

/**
 * @ngdoc function
 * @name paveApp.controller:UsersCtrl
 * @description
 * # UsersCtrl
 * Controller of the paveApp
 * provides an overvew of users in the application
 */
angular.module('paveApp')
  .controller('UsersCtrl', ["$scope", "$routeParams", "$filter", "$sce", "Users", function ($scope, $routeParams, $filter, $sce, Users) {

    $scope.subNavExists = true;

    $scope.subNavItems = [
	    {html:'Staff',userType:'staff',href:'#/users/staff',class:''},
	    {html:'Clients',userType:'clients',href:'#/users/clients',class:''},
    ];

    $scope.userType     = $routeParams.userType || 'clients';
    $scope.pageTitle    = $filter('filter')($scope.subNavItems,{userType:$scope.userType},true)[0].html;
    
    $scope.users = function (){ 
        var contents = {};

        contents.clients        = $filter('filter')(Users.users, {isClient:true},true);

        //four major study staff groups
        contents.administrators = $filter('filter')(Users.users, {isAdmin:true},true);
        contents.providers      = $filter('filter')(Users.users, {isProvider:true},true);
        contents.PDRcallers     = $filter('filter')(Users.users, {isPDRcaller:true},true);
        contents.supervisors    = $filter('filter')(Users.users, {isSupervisor:true},true);

        //aggregation of all staff
        contents.staff = $filter('filter')(Users.users, {isClient:false},true);

        return contents[$scope.userType];
    }

    $scope.booleanFormatter = function(boolean){
     var trueView   = '<i class="glyphicon glyphicon-ok"></i>';
     var falseView  = '';
     var view       = '';

     if (boolean == true){
        view = trueView;
     }
     else {
        view = falseView;
     }

     return $sce.trustAsHtml(view)
    }
  
  }]);

'use strict';

/**
 * @ngdoc function
 * @name paveApp.controller:SessionsCtrl
 * @description
 * # SessionsCtrl
 * Controller of the paveApp
 * provides the video review functionality of the application
 */
angular.module('paveApp')
  .controller('SessionsCtrl', ["$scope", "$sce", "$routeParams", "$filter", "$http", "$rootScope", "$timeout", "uuid4", function ($scope,$sce,$routeParams,$filter,$http,$rootScope,$timeout,uuid4) {


    $scope.type = $routeParams.type;
    $scope.session = $routeParams.session;
    $scope.userId = $routeParams.userId;
    $scope.sessionExists = false;
    $scope.sessionMessage = 'Loading Session #' + $scope.session;
    $scope.currentVideo = '';
    $scope.error = '';
    $scope.sessionData = '';
    $scope.jumpTime = {id:'',timepoint:0};

    var sessionDataURL = $rootScope.dataIO + '/sessions/' + $scope.userId + '/' + $scope.session;
    var videoStorageURL = $rootScope.videoUploadURL + "/storage/" + $scope.userId + "/" + $scope.session;

    
    $scope.labels = ['supportive response','encouragement','catch em being good','naming','shared focus of attention','interpreting cues','good direction','limit setting','boundary setting','reinforcement','redirection','use of incentive','when-then','avoid power struggle','pre-teaching','teaching','laugh/fun','play','acknowledge feelings','celebration','story telling','nurturing/warmth','manage stress','planning','asking','sympathize/empathize','ignoring'];

    $scope.timepoints = [];
    $scope.timepoint = {};

    $scope.showFreezeButton = true;
    $scope.showPlayButton = true;


    $scope.videoUploadIFrameURL = $sce.trustAsResourceUrl($rootScope.videoUploadURL + "/?session=" + $scope.session + "&userId=" + $scope.userId + "&bounceback=" + $rootScope.currentMainURL + "/#/sessions/review");

    $http.get(sessionDataURL + $rootScope.dataIOType).
      success(function(data, status, headers, config) {
        if (data == null) { 
            $scope.type = 'record'
            } else {
            $scope.type = 'review';
            $scope.timepoints = data.tags;
        }
        $scope.sessionExists = true;
        console.log(data);
        $scope.sessionData = data;

      }).
      error(function(data, status, headers, config) {
        $scope.error = $rootScope.errors.connectivity;
      });

    $scope.subNavExists = true;

    $scope.subNavItems = [
	    {html:'Review',href:'#/sessions/review/' + $routeParams.userId + "/" + $routeParams.session,class:''},
	    {html:'Record',href:'#/sessions/record/' + $routeParams.userId + "/" + $routeParams.session,class:''},
    ];

    $scope.videogular = {
        API : null,
        theme : "bower_components/videogular-themes-default/videogular.css",
        sources : [
        {src: $sce.trustAsResourceUrl(videoStorageURL + ".mp4"), type: "video/mp4"}
        ]
    }


    $scope.videogular.onPlayerReady = function(API) {
        $scope.videogular.API = API;
    };

    $scope.videogular.onCompleteVideo = function(){
        $scope.showFreezeButton = true;
        $scope.showPlayButton = true;
    };

    $scope.freezeForTagging = function(){
        $scope.videogular.API.pause();
        $scope.showFreezeButton = false;
        $scope.timepoint = {};
    }

    $scope.play = function(){
        $scope.videogular.API.play(); 
        $scope.showPlayButton = false;
        (function tick() {
            $http.get(sessionDataURL + "/lastSynchedAt.json").success(function(data, status, headers, config) {

                if (data.id != $scope.jumpTime.id){
                    $scope.jumpTime.id = data.id;
                    $scope.videogular.API.seekTime(data.timepoint/1000);
                    $scope.videogular.API.play();
                }

            }
            );
            $timeout(tick, 1000);
        })();
    }

    $scope.stop = function(){
        $scope.videogular.API.stop(); 
        $scope.showPlayButton = false;
    }

    $scope.addTag = function(){
        var timepoint = {};
        timepoint.time = $scope.videogular.API.currentTime;
        timepoint.tag = $scope.timepoint.tag;
        timepoint.notes = $scope.timepoint.notes;
        timepoint.id = uuid4.generate();
        $http.put(sessionDataURL + "/tags/" + $scope.timepoints.length + ".json", timepoint);
        $scope.timepoints.push(timepoint);
        $scope.videogular.API.play();
        $scope.showFreezeButton = true;
    }

    $scope.jumpTo = function(time){
        debugger;
        $scope.videogular.API.seekTime(parseInt(time/1000));
        $scope.jumpTime = {id:uuid4.generate(),timepoint:time,lastSynchedAt:new Date()};
        $http.put(sessionDataURL + "/lastSynchedAt.json", $scope.jumpTime);
        $scope.videogular.API.play();
    }



  }]);

'use strict';

/**
 * @ngdoc function
 * @name paveApp.controller:SettingsCtrl
 * @description
 * # SettingsCtrl
 * Controller of the paveApp
 */
angular.module('paveApp')
  .controller('SettingsCtrl', ["$scope", function ($scope) {

  	$scope.alertMessage = '';

    $scope.passwordReset = function(){

    	$scope.alertMessage = 'Password reset email sent!';

    }
  }]);

'use strict';

/**
 * @ngdoc function
 * @name paveApp.controller:HistoryCtrl
 * @description
 * # HistoryCtrl
 * Controller of the paveApp
 */
angular.module('paveApp')
  .controller('HistoryCtrl', ["$scope", "$routeParams", "$filter", "$location", "uuid4", "Encounters", "Users", function ($scope,$routeParams,$filter,$location,uuid4,Encounters,Users) {

    $scope.type                 = $routeParams.type;
    $scope.userId               = $routeParams.userId;
    $scope.date                 = { date: null };
    $scope.client               = Users.get($scope.userId);

    $scope.encounterTasks       = Encounters.tasks;
    $scope.encounters           = Encounters.get($scope.userId);

    $scope.selectedTaskName         =  "";
    $scope.selectedSessionNumber    =  "";

    $scope.showModal = function(number,name,label){

        $('.modal').appendTo("body").modal('show');

        console.log(number,name,label);
        
        $scope.selectedTaskName         =  name;
    
        $scope.selectedSessionNumber    =  number;

        $scope.selectedTaskLabel         =  label;


    }

    $scope.movedToHistory = function(){};


  }]);

'use strict';

/**
 * @ngdoc function
 * @name paveApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the paveApp
 */
angular.module('paveApp')
  .controller('LoginCtrl', ["$scope", "$rootScope", "$cookies", "login", function ($scope,$rootScope,$cookies,login) {
    
  	$scope.submit = function(){

  		$cookies.userLoggedIn = true;
  		$scope.userLoggedIn = $rootScope.userLoggedIn;

  	}

  }]);
'use strict';

/**
 * @ngdoc function
 * @name paveApp.controller:RecordCtrl
 * @description
 * # RecordCtrl
 * Controller of the paveApp
 */
angular.module('paveApp')
  .controller('RecordCtrl', ["$scope", function ($scope) {
    
  	
    
  }]);

'use strict';

/**
 * @ngdoc service
 * @name paveApp.users
 * @description
 * # users
 * Service in the paveApp.
 */
angular.module('paveApp')
  .service('Users', ["$firebase", "$rootScope", "$filter", function ($firebase, $rootScope, $filter) {

  var service = {};

  var getIndexOf = function (arr, val, prop) {
      var l = arr.length,
        k = 0;
      for (k = 0; k < l; k = k + 1) {
        if (arr[k][prop] === val) {
          return k;
        }
      }
      return 'false';
    }

  service.users = [
  	{id:'1',username:'Lisa',firstName:'Lisa',lastName:'Saldana',email:"lisa@oslc.org",isAdmin:true,isProvider:true,isClient:false,isPDRcaller:false,isSupervisor:false,createdAt:'',lastLogin:''},
		{id:'2',username:'Mark',firstName:'Mark',lastName:'Begale',email:"m.begale@gmail.com",isAdmin:true,isProvider:true,isClient:false,isPDRcaller:false,isSupervisor:false,createdAt:'',lastLogin:''},
		{id:'3',username:'Baroness',firstName:'Baroness',lastName:'Schrader',email:"baroness@schrader.com",isAdmin:true,isProvider:true,isClient:false,isPDRcaller:false,isSupervisor:false,createdAt:'',lastLogin:''},
    {id:'4',username:'Maria',firstName:'Maria',lastName:'Von Trapp',email:"maria@vontrapp.org",isAdmin:false,isProvider:true,isClient:false,isPDRcaller:false,isSupervisor:false,createdAt:'',lastLogin:''},
  	{id:'5',username:'Colonel',firstName:'Christopher',lastName:'Plummer',email:"plummer@vontrapp.org",isAdmin:true,isProvider:true,isClient:false,isPDRcaller:false,isSupervisor:false,createdAt:'',lastLogin:''},
    {id:'6',username:'Louisa',firstName:'Louisa',lastName:'Von Trapp',email:"louisa@vontrapp.org",isAdmin:true,isProvider:false,isClient:false,isPDRcaller:false,isSupervisor:false,createdAt:'',lastLogin:''},
    {id:'8',username:'Liesl',firstName:'Liesl',lastName:'Von Trapp',email:"Liesl@vontrapp.org",isAdmin:false,isProvider:false,isClient:true,isPDRcaller:false,isSupervisor:false,createdAt:'',lastLogin:''},
    {id:'9',username:'Kurt',firstName:'Kurt',lastName:'Von Trapp',email:"kurt@vontrapp.org",isAdmin:false,isProvider:false,isClient:true,isPDRcaller:false,isSupervisor:false,createdAt:'',lastLogin:''},
    {id:'10',username:'Marta',firstName:'Marta',lastName:'Von Trapp',email:"marta@vontrapp.org",isAdmin:false,isProvider:false,isClient:true,isPDRcaller:false,isSupervisor:false,createdAt:'',lastLogin:''},
    {id:'11',username:'Friedrich',firstName:'Freddy',lastName:'Plummer',email:"frierich@vontrapp.org",isAdmin:false,isProvider:false,isClient:true,isPDRcaller:false,isSupervisor:false,createdAt:'',lastLogin:''}
  ];

  service.upsert = function(object){

    var arrayIndex = getIndexOf(service.users,object.id,'id');

    if (arrayIndex != 'false'){
      //update
      for (var attrname in object) { 
        service.users[arrayIndex][attrname] = object[attrname]; 
      }
    }
    else {
      //insert
      service.users.push(object);
    }
    debugger;
  }

  service.get = function(id){
    return $filter('filter')(service.users,{id:id},true)[0]
  }

  return service

 	// var ref = new Firebase($rootScope.dataIO + '/users');
  // var sync = $firebase(ref);
  // // download the data into a local object
  // var syncObject = sync.$asObject();
  // // synchronize the object with a three-way data binding
  // // click on `index.html` above to see it used in the DOM!
  // syncObject.$bindTo(scope, "data");

  }]);

'use strict';

/**
 * @ngdoc service
 * @name paveApp.encounters
 * @description
 * # encounters
 * Service in the paveApp.
 */
angular.module('paveApp')
  .service('Encounters', function () {
 
 	// var ref = new Firebase($rootScope.dataIO + '/encounters');
  // var sync = $firebase(ref);
  // // download the data into a local object
  // var syncObject = sync.$asObject();
  // // synchronize the object with a three-way data binding
  // // click on `index.html` above to see it used in the DOM!
  // syncObject.$bindTo($scope, "data");

  var service = {};

  service.numberOfEncounters = 15;

  service.tasks = [
    {order:1, label:'Pre Visit', name:'preVisit'},
    {order:2, label:'Visit', name:'visitation'},
    {order:3, label:'PDR', name:'pdr', questionnaire:'#/pdr'},
    {order:4, label:'Session', name:'session'},
    {order:5, label:'Fidelity', name:'fidelity',questionnaire:'#/fidelityQuestionnaire'},
  ];

  service.contents = [];

  service.get = function(userId){

    var table = service.template();

    //add server side logic to update for user specific needs

    return table
  }

  service.template = function(){
    var templateArray = []; 
    var i=1
      for (i=0;i<=service.numberOfEncounters;i++)
      {
          templateArray.push({session:i, tasks:service.tasks})
      }

    return templateArray
  }

  return service

  });

'use strict';

/**
 * @ngdoc service
 * @name paveApp.videos
 * @description
 * # videos
 * Service in the paveApp.
 */
angular.module('paveApp')
  .service('videos', function () {
 	var ref = new Firebase($rootScope.dataIO + '/videos');
  var sync = $firebase(ref);
  // download the data into a local object
  var syncObject = sync.$asObject();
  // synchronize the object with a three-way data binding
  // click on `index.html` above to see it used in the DOM!
  syncObject.$bindTo($scope, "data");

  });

'use strict';

/**
 * @ngdoc service
 * @name paveApp.surveys
 * @description
 * # surveys
 * Service in the paveApp.
 */
angular.module('paveApp')
  .service('surveys', function () {
  var ref = new Firebase($rootScope.dataIO + '/surveys');
  var sync = $firebase(ref);
  // download the data into a local object
  var syncObject = sync.$asObject();
  // synchronize the object with a three-way data binding
  // click on `index.html` above to see it used in the DOM!
  syncObject.$bindTo($scope, "data");

  });

'use strict';

/**
 * @ngdoc service
 * @name paveApp.login
 * @description
 * # login
 * Service in the paveApp.
 */
angular.module('paveApp')
  .service('login', ["$firebase", "$rootScope", function ($firebase,$rootScope) {
  var ref = new Firebase($rootScope.dataIO);

	ref.authWithPassword({
	  email    : "m.begale@gmail.com",
	  password : "sLqPLhSLf8HKK6yc"
	}, function(error, authData) {
	  if (error) {
	    console.log("Login Failed!", error);
	  } else {
	    console.log("Authenticated successfully with payload:", authData);
	  }
	});


  }]);
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
  .controller('FidelityquestionnaireCtrl', ["$scope", "$location", function ($scope, $location) {


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

  		$location.href = "#/history/review";

  	}

  }]);

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
  .controller('PdrCtrl', ["$scope", "$location", function ($scope,$location) {
    
  	$scope.nextPage = '#/history/review';

  	$scope.issues = ['Animal Cruelty','Arguing','Backtalking','Bedwetting','Complaining','Daydreaming','Defiance','Depression/Sadness','Destructiveness','Encopresis','Fearfulness','Fighting','Interrupting','Irritability','Jealousy','Lying','Nervous/Jittery','Notminding','Pant Wetting','Pouting','School Problems','Sexual Behaviors','Short Attention Span','Sleep Problems/Nightmares','Sluggishness','Stealing','Swearing','Teasing','Worried/Anxious','Biting','Hitting','Loudness','Waking at night','Crying','Hyperactivity','Repetitive Questions','Tantrums','Whining','Yelling'];

  	$scope.feelings = ['Stressed','Depressed','Positive','Hopeful','Overwhelmed'];

  	$scope.submit = function(){

  		window.location.href = "#/history/review";

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


  }]);

'use strict';

/**
 * @ngdoc service
 * @name paveApp.tooltips
 * @description
 * # tooltips
 * Service in the paveApp.
 */
angular.module('paveApp')
  .service('tooltips', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function


    var contents = {};


    contents.items = [];

    contents.items.push({name:'Encounter',label:'encounter',definition:''});
    contents.items.push({name:'User',label:'encounter',definition:''});
    contents.items.push({name:'Video',label:'encounter',definition:''});



    return contents




  });

'use strict';

/**
 * @ngdoc function
 * @name paveApp.controller:UserCtrl
 * @description
 * # UserCtrl
 * Controller of the paveApp
 * show / edit page for an individual user
 */
angular.module('paveApp')
  .controller('UserCtrl', ["$scope", "$routeParams", "$filter", "$location", "Users", "uuid4", function ($scope, $routeParams, $filter, $location, Users, uuid4) {


  	$scope.userId       = $routeParams.userId || null;
  	$scope.user         = Users.get($scope.userId) || { id:uuid4.generate(), isAdmin:false, isProvider:false, isClient:false, isPDRcaller:false, isSupervisor:false, supervisees:[], assignedClients:[], createdAt:new Date() };
    $scope.alertMessage = '';

    $scope.clients = $filter('filter')(Users.users, {isClient:true},true);
    $scope.providers = $filter('filter')(Users.users, {isProvider:true},true);

  	$scope.saveUser = function(nextLocation){

      var nextPage = nextLocation || '/users';
      
      if ($scope.user.isAdmin == false && $scope.user.isProvider == false && $scope.user.isClient == false && $scope.user.isSupervisor == false && $scope.user.isPDRcaller == false) {
        $scope.alertMessage = 'You must select a role!'
      }else {
        Users.upsert($scope.user);
        $location.url(nextPage);
      }      

  	}

  }]);