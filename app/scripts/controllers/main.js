'use strict';

/**
 * @ngdoc function
 * @name chatApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the chatApp
 */
APP.controller('MainCtrl', function ($scope, $stateParams, $timeout, $location, $window, UserService, AuthenticationService, DATA, DataProvider) {

	$scope.users = DATA.CHAT.users;

	$scope.login = function(username, password){

		if (username !== undefined && password !== undefined) {
 
            UserService.logIn(username, password).success(function(data) {
            	console.log(data);
                AuthenticationService.isLogged = data.auth;
                $window.sessionStorage.token = data.token;
                $window.sessionStorage.userIndex = (data.id - 1);
                $location.url("channel/"+ data.id +"/general");
            }).error(function(status, data) {
                console.log(status);
                console.log(data);
            });
        }

	}

});
