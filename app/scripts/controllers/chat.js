'use strict';

/**
 * @ngdoc function
 * @name chatApp.controller:ChatCtrl
 * @description
 * # ChatCtrl
 * Controller of the chatApp
 */
APP.controller('ChatCtrl', function ($scope, $stateParams, $timeout, $window, DATA, AuthenticationService, DataProvider) {
    
	$scope.chat = null;
	$scope.users = DATA.CHAT.users;
	$scope.time = new Date();

	if($window.sessionStorage.token){
      $scope.userLoggedInIndex  = $window.sessionStorage.userIndex;
    }

	DataProvider.getChatByID($stateParams.chatId, $stateParams.chat, function(data){
    	$scope.chat = data;
    });
});
