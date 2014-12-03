// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.directives', 'ngDragDrop'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
      url: "/app",
      abstract: true,
      templateUrl: "templates/menu.html",
      controller: 'AppCtrl'
    })

    .state('app.search', {
      url: "/search",
      views: {
        'menuContent' :{
          templateUrl: "templates/search.html"
        }
      }
    })

    .state('app.home', {
      url: "/home",
      views: {
        'menuContent' :{
          templateUrl: "templates/home.html"
        }
      }
    })
    .state('app.artistInfo', {
      url: "/artistInfo/:gridId",
      views: {
        'menuContent' :{
            templateUrl: "templates/artistInfo.html",
          }
      }
    })

    .state('app.djs', {
      url: "/djs",
      views: {
        'menuContent' :{
          templateUrl: "templates/djs.html",
          controller: 'DJsCtrl'
        }
      }
    })

    .state('app.single', {
      url: "/dj/:djId",
      views: {
        'menuContent' :{
          templateUrl: "templates/dj.html",
          controller: 'DJsCtrl'
        }
      }
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
});
