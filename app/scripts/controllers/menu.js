'use strict';

/**
 * @ngdoc function
 * @name chatApp.controller:MenuCtrl
 * @description
 * # MenuCtrl for users, list and channels. Deal also with all the modal.
 * Controller of the chatApp
 */
APP.controller('MenuCtrl', function ($rootScope, $scope, $location, $window, DATA, AuthenticationService, UserService, DataProvider, $modal, $log) {
    
  	$scope.allChannels = [];
    $scope.userChannels = [];
  	$scope.users = [];
  	$scope.groups = [];
  	$scope.chat = {};
    $scope.userClicked = false;
    $scope.menuClicked = false;
    $scope.members = [];

    if($window.sessionStorage.token){
      $scope.userLoggedInIndex  = $window.sessionStorage.userIndex;
    }

  	DataProvider.getChat(function(chat){
      $scope.chat = chat;
  		$scope.allChannels = chat.channel;
  		$scope.users = chat.users;
  		$scope.groups = chat.group;
  	});

    DataProvider.getLoggedUserChannel($scope.users[$scope.userLoggedInIndex].name, function(data){
      $scope.userChannels = data;
    });

    $scope.logout = function($event){
      $event.bubbles = false;
      $event.stopPropagation();
      if ($window.sessionStorage.token) {
          delete $window.sessionStorage.token;
          delete $window.sessionStorage.userIndex;
          $location.path("/");
      }
    }

    $scope.showUserList = function($event){
      $event.bubbles = false;
      $event.stopPropagation();
      $scope.userClicked = !$scope.userClicked;
    }

    $scope.addPrivateGroup = function(id, name, desc, memb){
      $scope.groups.push({id:id, name:name,description:desc,members:memb});
    }
    $scope.updateUserChannels = function(channel){
       $scope.userChannels.push(channel);
    }

    $scope.newPrivateGroup = function($event){
      $event.bubbles = false;
      $event.stopPropagation();

      var modalInstance = $modal.open({
        templateUrl: 'views/newPrivateGroup.html',
        controller: 'newPrivateGroupCtrl',
        resolve: {
          users: function () {
            return $scope.users;
          },
          members: function(){
            return $scope.members;
          }
        }
      });

      modalInstance.result.then(function (group) {        
        $scope.addPrivateGroup($scope.groups.length + 1, group.name, group.desc, $scope.members);
      }, function () {
        $log.info('Modal dismissed at: ' + new Date());
      });
    }

    $scope.joinChannel = function($event){
      $event.bubbles = false;
      $event.stopPropagation();

      var modalInstance = $modal.open({
        templateUrl: 'views/joinChannel.html',
        controller: 'joinChannelCtrl',
        resolve: {
          channels: function () {
            return $scope.allChannels;
          },
          userChannels: function(){
            return $scope.userChannels;
          },
          userLoggedIn: function(){
            return $scope.users[$scope.userLoggedInIndex].name;
          }
        }
      });

      modalInstance.result.then(function (channel) {        
        channel.members.push($scope.users[$scope.userLoggedInIndex]);
        $scope.updateUserChannels(channel);
      }, function () {
        $log.info('Modal dismissed at: ' + new Date());
      });
    }

  });
