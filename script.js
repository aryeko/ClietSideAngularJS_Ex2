// create the module and name it scotchApp
    var App = angular.module('Application', ['ngRoute']);

    // configure our routes
    App.config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'home.html',
                controller  : 'mainController'
            })

            // route for the java page
            .when('/java', {
                templateUrl : 'java.html',
                controller  : 'javaController'
            })

            // route for the cs page
            .when('/cs', {
                templateUrl : 'cs.html',
                controller  : 'csController'
            });
    });

    // create the controller and inject Angular's $scope
    App.controller('mainController', function($scope) {
            // create a message to display in our view
            $scope.message = 'Welcome to the Object-Oriented programming languages website!';
                $scope.image ='mainPic.jpg';

        });

    App.controller('javaController', function($scope) {
            $scope.message = 'Java is our mother tongue.'
            $scope.image ='java.jpg';
    ;
        });

    App.controller('csController', function($scope) {
            $scope.message = 'CS is very nice - working over .NET framework'
             $scope.image ='cs.jpg';
    ;
    });

                