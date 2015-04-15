// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('LolNiacs', [
  'ionic',
  'ngCordova',
  'listenerController',
  'screen2Controller',
  'screen3Controller',
])

.run(function($ionicPlatform, $rootScope, $state) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('home', {
    url: '/',
    templateUrl: 'templates/home.html',
    controller: 'ListenerCtrl',
  })

  .state('screen2', {
    url: '/screen2',
    templateUrl: 'templates/screen2.html',
    controller: 'Screen2Ctrl',
  })

  .state('screen3', {
    url: '/screen3',
    templateUrl: 'templates/screen3.html',
    controller: 'Screen3Ctrl'
  })
  

  $urlRouterProvider.otherwise('/');
})
