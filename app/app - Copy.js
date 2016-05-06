// Ionic
// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
var multiply_app = angular.module('multiply_app', ['ionic', 'Challenge', 'gameOn', 'stepUp', 'trueFalse']);

multiply_app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

multiply_app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('multiply', {
    url: "/multiply",
	abstract:true,
    templateUrl: "app/home/menu.html"
  }) 
  .state('multiply.home', {
    url: "/home",
	views: {
      'menuContent': {
        templateUrl: "app/home/home.html"
      }
    }
  }) 
 .state('multiply.multiplication', {
    url: "/multiplication",
	views: {
      'menuContent': {
        templateUrl: "app/home/multiplication.html"
      }
    }
 })  
 .state('multiply.GameOn', {
    url: "/GameOn",
    cache:false,
	views: {
      'menuContent': {
         templateUrl: "app/home/GameOn.html"
      }
    }
 })  
  .state('multiply.StepUp', {
    url: "/StepUp",
    cache:false,  
	views: {
      'menuContent': {
         templateUrl: "app/home/StepUp.html"
      }
    }
  }) 
  .state('multiply.Challenge', {
    url: "/Challenge",
    cache:false,  
	views: {
      'menuContent': {
         templateUrl: "app/home/Challenge.html"
      }
    }
  })  
  .state('multiply.TrueorFalse', {
    url: "/TrueorFalse",
    cache:false,  
	views: {
      'menuContent': {
         templateUrl: "app/home/TrueorFalse.html"
      }
	}
  })  
  
  /*.state('multiply.Learn', {
    url: "/Learn",
    cache:false,  
	views: {
      'menuContent': {
         templateUrl: "app/home/Learn.html"
      }
	}
  }) */ 
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/multiply/home');
});
