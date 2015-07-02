'use strict';

APP.service('AuthenticationService', function() {
    var auth = {
        isLogged: false
    }
 
    return auth;
});

APP.service('UserService', function($http) {
    return {
        logIn: function(username, password) {
            return $http.post('http://localhost:8080/login', {username: username, password: password});
        },
 
        logOut: function() {
 
        }
    }
});