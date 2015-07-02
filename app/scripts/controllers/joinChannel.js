'use strict';

/**
 * @ngdoc function
 * @name chatApp.controller:joinChannelCtrl
 * @description
 * # joinChannelCtrl manage the join channel modal
 * Controller of the chatApp
 */
APP.controller('joinChannelCtrl', function ($scope, $modal, $log, $modalInstance, channels, userChannels, userLoggedIn) {

	$scope.channels = channels;
	$scope.userChannels = userChannels;
	$scope.userName = userLoggedIn;

	

	for(var i=0; i<$scope.channels.length;i++){
		var members = $scope.channels[i].members;
		for(var j=0; j<members.length;j++){
			if($scope.userName === members[j].name){
				$scope.channels[i].isIn = true;
				break;
			}else{
				$scope.channels[i].isIn = false;
			}

		}
	}

	$scope.ok = function (channel) {
		$modalInstance.close(channel);
	};

	$scope.cancel = function () {
	   $modalInstance.dismiss('cancel');
	};

    $scope.newChannel = function(){

      $modalInstance.dismiss('cancel');

      var modalInstance = $modal.open({
        templateUrl: 'views/newChannel.html',
        controller: 'newChannelCtrl',
        resolve: {
          user: function () {
            return $scope.userName;
          },
          channels: function(){
          	return $scope.channels;
          }
        }
      });

      modalInstance.result.then(function (newChannel) {        
        $scope.channels.push(newChannel);
       	$scope.userChannels.push(newChannel);

      }, function () {
        $log.info('Modal dismissed at: ' + new Date());
      });
    }

});
