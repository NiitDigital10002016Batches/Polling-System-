// Angular service module for connecting to JSON APIs
angular.module('pollServices', ['ngResource']).
	factory('Poll', function($resource) {
		return $resource('polls/:pollId', {}, {
			// Use this method for getting a list of polls
			query: { method: 'GET', params: { pollId: 'polls' }, isArray: true }
		})
	}).
factory('Reg', function($http) {
			var register={
				regname:regname
			}
		return register;
		function regname(name,callback){
			$http.post('/registers', name).success(callback);
		}
			}).
factory("UserService",function($http){
	var service = {
			loginUser : loginUser
		}
		return service;
		function loginUser(user,callback){
			console.log(user);
			$http.post('polls/login',user).success(callback);
		}
}).
//
	
	factory('socket', function($rootScope) {
		var socket = io.connect();
		return {
			on: function (eventName, callback) {
	      socket.on(eventName, function () {  
	        var args = arguments;
	        $rootScope.$apply(function () {
	          callback.apply(socket, args);
	        });
	      });
	    },
	    emit: function (eventName, data, callback) {
	      socket.emit(eventName, data, function () {
	        var args = arguments;
	        $rootScope.$apply(function () {
	          if (callback) {
	            callback.apply(socket, args);
	          }
	        });
	      })
	    }
		};
	});

