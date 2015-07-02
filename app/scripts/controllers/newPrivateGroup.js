'use strict';

/**
 * @ngdoc function
 * @name chatApp.controller:newPrivateGroupCtrl
 * @description
 * # newPrivateGroupCtrl create a new private group, allow you to add multiple users to it
 * Controller of the chatApp
 */
APP.controller('newPrivateGroupCtrl', function ($scope, $modalInstance, users, members) {

	console.log('newPrivateGroupCtrl controller');

	$scope.users = users;
	$scope.member = members;
	$scope.group = {name:"",desc:""}

	$scope.ok = function (groupName, groupDesc) {
		angular.forEach(angular.element(".search-choice"), function(value, key){
		     var a = angular.element(value)[0].innerText;
		     $scope.member.push(a);
		});
		$scope.group.name = groupName;
		$scope.group.desc = groupDesc;
	    $modalInstance.close($scope.group, $scope.member);
	};

	$scope.cancel = function () {
	   $modalInstance.dismiss('cancel');
	};

});
