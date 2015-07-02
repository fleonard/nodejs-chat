'use strict';

/**
 * @ngdoc function
 * @name chatApp.controller:newChannelCtrl
 * @description
 * # newChannelCtrl allow you to create new channel for the loggedin user
 * Controller of the chatApp
 */
APP.controller('newChannelCtrl', function ($scope, $filter, $modalInstance, user, channels) {

	$scope.user = user;
	$scope.channels = channels;
	$scope.channel = {};
	$scope.date = new Date(); 
	$scope.date = $filter("date")($scope.date, "dd MMMM yyyy");


	$scope.ok = function (channelName, channelDesc) {
		$scope.channel = { id:($scope.channels.length + 1) , name:channelName, description:channelDesc, createdBy: user, createdOn: $scope.date,members: [{name:user},]};
	    $modalInstance.close($scope.channel);
	};

	$scope.cancel = function () {
	   $modalInstance.dismiss('cancel');
	};

});
