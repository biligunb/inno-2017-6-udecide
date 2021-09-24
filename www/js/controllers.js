angular.module('app.controllers', [])

.controller('menuCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('homeCtrl', ['$scope', '$stateParams',
function ($scope, $stateParams) {


}])

.controller('mapCtrl', ['$scope', '$stateParams', 'mapService', 'whatService', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, mapService, whatService) {

    $scope.locations = [
        {lat: 47.918755, lng: 106.917492},
        {lat: 47.9055619, lng: 106.9075832}
    ]
    
    mapService.initMap($scope.locations);
    
    $scope.getMap = function() {
        whatService.getMap("thrones.truffles.exact",function(response) {
            console.log(response.data)
        }, function(data, status, headers, config) {
            console.log(data)
        });
    }

}])

.controller('searchCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('loginCtrl', ['$scope', '$stateParams', '$ionicHistory', '$http', 'loginService',
function ($scope, $stateParams, $ionicHistory, $http, loginService) {
    $scope.name = "Hello World";

    $scope.myGoBack = function() {
        console.log("Go back button");
       $ionicHistory.goBack();
    };

    // $scope.client;
    // $http.post( 'URLADDRESS' , $scope.client )
    //         .then(function (response) {
    //             $scope.response = response;
    //         })
    //         .catch(function (data, status, headers, config) {
    //             console.log('Error: HTTP request error');
    //         });
    // }

    $scope.Login = function(user) {
        loginService.check(user);
    }

}])

.controller('signupCtrl', ['$scope', '$stateParams', '$ionicHistory', '$http', 'signupService',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $ionicHistory, $http, signupService) {

    $scope.myGoBack = function() {
        console.log("Go back button");
       $ionicHistory.goBack();
    };

    $scope.Signup = function(user) {
        signupService.register(user);
    }

}])

.controller('addBusinessCtrl', ['$scope', '$stateParams', '$ionicHistory', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $ionicHistory) {

    $scope.myGoBack = function() {
        console.log("Go back button");
       $ionicHistory.goBack();
    };

}])

.controller('writeReviewCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('detailsCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('businessDashboardCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('authenticateCtrl', ['$scope', '$stateParams', '$ionicHistory', '$location', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $ionicHistory, $location) {


     $scope.myGoBack = function() {
         console.log("Go back button");
	       $backView = $ionicHistory.backView();
	       $backView.go();
        };
        $scope.go = function ( path ) {
	       $location.path( path );
        };

}])


.controller('userDashboardCtrl', ['$scope', '$stateParams', '$ionicHistory', '$location', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $ionicHistory, $location) {


     $scope.myGoBack = function() {
         console.log("Go back button");
	       $backView = $ionicHistory.backView();
	       $backView.go();
        };
        $scope.go = function ( path ) {
	       $location.path( path );
        };

}])
