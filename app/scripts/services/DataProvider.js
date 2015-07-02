'use strict';

APP.service('DataProvider', function(DATA){


	function getChatByID(id, type, callback) {
		var rtn = null;
		for(var i=0;i<DATA.CHAT[type].length;i++) {
			var chat = DATA.CHAT[type][i];
			if (chat.id == id) {
				rtn = chat;
				break;
			}
		}
		if (callback) callback(rtn);
	}

	function getLoggedUserChannel(user, callback) {
		var rtn = [];
		for(var i=0;i<DATA.CHAT["channel"].length;i++) {
			var chat = DATA.CHAT["channel"][i];
			for(var j=0;j<chat.members.length;j++){
				if(chat.members[j].name === user){
					rtn.push(chat);
					break;
				}
			}
		}
		if (callback) callback(rtn);
	}

	return {
		getChat : function(callback) {
			if(callback) callback( DATA.CHAT );
		},
		getChatByID : function(id, type, callback) {
			getChatByID(id, type, callback);
		}
		,
		getLoggedUserChannel : function(user, callback) {
			getLoggedUserChannel(user, callback);
		}
	}

});