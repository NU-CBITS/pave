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
    'firebase'
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

    $rootScope.footer = 'Powered by CBITs';
    $rootScope.siteName = 'PAVE';
    $rootScope.appVersion = '0.1.2';
    $rootScope.dataIO = 'https://pave.firebaseapp.com';

    $rootScope.navItems = [
      {html:'Users',href:'#/users',class:'btn-info'},
      {html:'Videos',href:'#/sessions',class:'btn-success'},
      {html:'Encounters',href:'#/history',class:'btn-warning'},
    ];
    
    $rootScope.settingsItems = [
      {html:'Settings', href:'/users',class:'btn-default'}
    ];

    $rootScope.userLoggedIn = function(){ 

      if ($cookies.userLoggedIn == 'true')
        { return true }
      else 
        { return false }

    };

});
