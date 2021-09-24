angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

  .state('tabsController.home', {
    url: '/home',
    views: {
      'tab1': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('tabsController.map', {
    url: '/map',
    views: {
      'tab2': {
        templateUrl: 'templates/map.html',
        controller: 'mapCtrl'
      }
    }
  })

  .state('tabsController.search', {
    url: '/search',
    views: {
      'tab3': {
        templateUrl: 'templates/search.html',
        controller: 'searchCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('signup', {
    url: '/signup',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

  .state('writeReview', {
    url: '/writereview',
    templateUrl: 'templates/writeReview.html',
    controller: 'writeReviewCtrl'
  })

  .state('details', {
    url: '/detail',
    templateUrl: 'templates/details.html',
    controller: 'detailsCtrl'
  })
  
  .state('authenticate', {
    url: '/authenticate',
    templateUrl: 'templates/authenticate.html',
    controller: 'authenticateCtrl'
  })

  .state('businessdashboard', {
    url: '/businessdashboard',
    templateUrl: 'templates/BusinessDashboard.html',
    controller: 'businessDashboardCtrl'
  })

  .state('userdashboard', {
    url: '/userdashboard',
    templateUrl: 'templates/userDashboard.html',
    controller: 'userDashboardCtrl'
  })
  
  .state('addbusiness', {
    url: '/addbusiness',
    templateUrl: 'templates/addBusiness.html',
    controller: 'addBusinessCtrl'
  })

$urlRouterProvider.otherwise('/page1/home')


});