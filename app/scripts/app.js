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
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
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
      });
  }).run(function($rootScope,$cookies) {

    $rootScope.footer = 'Powered by CBITs';
    $rootScope.siteName = 'PAVE';
    $rootScope.appVersion = '0.0.2';

    $rootScope.navItems = [
      {html:'Users',href:'/users',class:''},
      {html:'Sessions',href:'/sessions',class:''},
      {html:'History',href:'/history',class:''}
    ];
    
    $rootScope.settingsItems = [
      {html:'Settings', href:'/users',class:''}
    ];

    $rootScope.userExists = function(){ 

      if ($cookies.userExists == 'true')
        { return true }
      else 
        { return false }

    };

});
