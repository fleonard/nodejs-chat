'use strict';

/**
 * @ngdoc overview
 * @name chatApp
 * @description
 * # chatApp
 *
 * Main module of the application.
 */
var APP = angular.module('chatApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'ui.bootstrap',
    'localytics.directives'

  ]).config(function ($stateProvider, $urlRouterProvider) {

     $urlRouterProvider.otherwise('/');

    $stateProvider
          .state('index', {
            url: '/',
            views: {
                "menu": {
                templateUrl: "views/menu.html"
              },
                "chat": {
                  templateUrl: "views/main.html",
                  controller: "MainCtrl",
                }
            }
          }).state('index.chat', {
            url: ':chat/:chatId/:chatName',
            views : {
                'chat@' : {
                  templateUrl: "views/chat.html",
                  controller: "ChatCtrl",
                },
                "submenu@index": {
                templateUrl: "views/submenu.html",
                controller: "MenuCtrl",
              }
            }


          })
  });