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
    .controller('SessionsCtrl', function($scope, $sce, $routeParams, $filter, $http, $rootScope, $timeout, uuid4) {
        $scope.type = $routeParams.type;
        $scope.session = $routeParams.session;
        $scope.userId = $routeParams.userId;
        $scope.sessionExists = false;
        $scope.sessionMessage = 'Loading Session #' + $scope.session;
        $scope.currentVideo = '';
        $scope.error = '';
        $scope.sessionData = '';
        $scope.jumpTime = {
            id: '',
            timepoint: 0
        };
        var sessionDataURL = $rootScope.dataIO + '/sessions/' + $scope.userId + '/' + $scope.session;
        var videoStorageURL = $rootScope.videoUploadURL + "/storage/" + $scope.userId + "/" + $scope.session;
        $scope.labels = ['supportive response', 'encouragement', 'catch em being good', 'naming', 'shared focus of attention', 'interpreting cues', 'good direction', 'limit setting', 'boundary setting', 'reinforcement of effort','reinforcement of small steps','reinforcement of relationships and roles', 'redirection', 'use of incentive', 'when-then', 'avoid power struggle', 'pre-teaching', 'teaching', 'laugh/fun', 'play', 'acknowledge feelings', 'celebration', 'story telling', 'nurturing/warmth', 'manage stress', 'planning', 'asking', 'sympathize/empathize', 'ignoring'];
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
        $scope.subNavItems = [{
            html: 'Review',
            href: '#/sessions/review/' + $routeParams.userId + "/" + $routeParams.session,
            class: ''
        }, {
            html: 'Record',
            href: '#/sessions/record/' + $routeParams.userId + "/" + $routeParams.session,
            class: ''
        }, ];
        $scope.videogular = {
            API: null,
            theme: "bower_components/videogular-themes-default/videogular.css",
            sources: [{
                src: $sce.trustAsResourceUrl(videoStorageURL + ".mp4"),
                type: "video/mp4"
            }]
        }
        $scope.videogular.onPlayerReady = function(API) {
            $scope.videogular.API = API;
        };
        $scope.videogular.onCompleteVideo = function() {
            $scope.showFreezeButton = true;
            $scope.showPlayButton = true;
        };
        $scope.freezeForTagging = function() {
            $scope.videogular.API.pause();
            $scope.showFreezeButton = false;
            $scope.timepoint = {};
        }
        $scope.play = function() {
            $scope.videogular.API.play();
            $scope.showPlayButton = false;
            (function tick() {
                $http.get(sessionDataURL + "/lastSynchedAt.json").success(function(data, status, headers, config) {
                    if (data.id != $scope.jumpTime.id) {
                        $scope.jumpTime.id = data.id;
                        $scope.videogular.API.seekTime(data.timepoint / 1000);
                        $scope.videogular.API.play();
                    }
                });
                $timeout(tick, 1000);
            })();
        }
        $scope.stop = function() {
            $scope.videogular.API.stop();
            $scope.showPlayButton = false;
        }
        $scope.addTag = function() {
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
        $scope.jumpTo = function(time) {
            $scope.videogular.API.seekTime(parseInt(time / 1000));
            $scope.jumpTime = {
                id: uuid4.generate(),
                timepoint: time,
                lastSynchedAt: new Date()
            };
            $http.put(sessionDataURL + "/lastSynchedAt.json", $scope.jumpTime);
            $scope.videogular.API.play();
        }
    });