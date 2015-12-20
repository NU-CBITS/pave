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
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        // templateUrl: 'views/main.html',
        // controller: 'MainCtrl'
        templateUrl: 'views/users.html',
        controller: 'UsersCtrl'
      })
      .when('/record', {
        templateUrl: 'views/record.html',
        controller: 'RecordCtrl'
      })
      .when('/fidelityQuestionnaire/:userId/:sessionIndex/:taskIndex', {
        templateUrl: 'views/fidelityquestionnaire.html',
        controller: 'FidelityquestionnaireCtrl'
      })
      .when('/pdr/:userId/:sessionIndex/:taskIndex', {
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
      .when('/history/:userId', {
        templateUrl: 'views/history.html',
        controller: 'HistoryCtrl'
      })      
      .otherwise({
        redirectTo: '/'
      })
      
  }).run(function($rootScope,$cookies) {

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

});
