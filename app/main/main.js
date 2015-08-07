'use strict';
angular.module('main', [
  'ionic',
  'ngCordova',
  'ui.router',
  // TODO: load other modules selected during generation
])
  .config(function ($stateProvider, $urlRouterProvider) {

    console.log('Allo! Allo from your module: ' + 'main');

    // ROUTING with ui.router
    $urlRouterProvider.otherwise('/main/positive');
    $stateProvider
    // this state is placed in the <ion-nav-view> in the index.html
      .state('main', {
        url: '/main',
        abstract: true,
        templateUrl: 'main/templates/menu.html',
        controller: 'MenuCtrl as menu'
      })
      .state('main.positive', {
        url: '/positive',
        views: {
          'pageContent': {
            templateUrl: 'main/templates/positive.html',
            controller: 'PositiveCtrl as positive'
          }
        }
      })
      .state('main.light', {
        url: '/light',
        views: {
          'pageContent': {
            templateUrl: 'main/templates/light.html',
            controller: 'LightCtrl as light'
          }
        }
      })
      .state('main.stable', {
        url: '/stable',
        views: {
          'pageContent': {
            templateUrl: 'main/templates/stable.html',
            controller: 'StableCtrl as stable'
          }
        }
      })
      .state('main.calm', {
        url: '/calm',
        views: {
          'pageContent': {
            templateUrl: 'main/templates/calm.html',
            controller: 'CalmCtrl as calm'
          }
        }
      })
      .state('main.assertive', {
        url: '/assertive',
        views: {
          'pageContent': {
            templateUrl: 'main/templates/assertive.html',
            controller: 'AssertiveCtrl as assertive'
          }
        }
      })
      .state('main.balanced', {
        url: '/balanced',
        views: {
          'pageContent': {
            templateUrl: 'main/templates/balanced.html',
            controller: 'BalancedCtrl as balanced'
          }
        }
      })
      .state('main.energized', {
        url: '/energized',
        views: {
          'pageContent': {
            templateUrl: 'main/templates/energized.html',
            controller: 'EnergizedCtrl as energized'
          }
        }
      })
      .state('main.royal', {
        url: '/royal',
        views: {
          'pageContent': {
            templateUrl: 'main/templates/royal.html',
            controller: 'RoyalCtrl as royal'
          }
        }
      })
      .state('main.dark', {
        url: '/dark',
        views: {
          'pageContent': {
            templateUrl: 'main/templates/dark.html',
            controller: 'DarkCtrl as dark'
          }
        }
      })
      .state('main.listDetail', {
        url: '/list/detail',
        views: {
          'pageContent': {
            templateUrl: 'main/templates/list-detail.html',
            // controller: '<someCtrl> as ctrl'
          }
        }
      })
      .state('main.debug', {
        url: '/debug',
        views: {
          'pageContent': {
            templateUrl: 'main/templates/debug.html',
            controller: 'DebugCtrl as ctrl'
          }
        }
      });
  });
