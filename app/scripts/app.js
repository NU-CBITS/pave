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
    'com.2fdevs.videogular.plugins.poster'
  ])
  .config(function ($routeProvider) {
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
      .otherwise({
        redirectTo: '/'
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
      .when('/sessions/:type', {
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
      .when('/history/:type', {
        templateUrl: 'views/history.html',
        controller: 'HistoryCtrl'
      })
      .when('/history/:type/:userId', {
        templateUrl: 'views/history.html',
        controller: 'HistoryCtrl'
      })
      
  }).run(function($rootScope,$cookies) {

    $rootScope.footer     = 'Powered by CBITs';
    $rootScope.siteName   = 'PAVE';
    $rootScope.appVersion = '0.2.4';
    $rootScope.dataIO     = 'https://pave.firebaseio.com';

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
