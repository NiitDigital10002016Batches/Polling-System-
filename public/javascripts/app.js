// Angular module, defining routes for the app
angular.module('polls', ['pollServices']).
	config(['$routeProvider', function($routeProvider) {
		$routeProvider.
		    when('/login', { templateUrl: 'partials/login.html', controller: LoginCtrl }).
			when('/polls', { templateUrl: 'partials/list.html', controller: PollListCtrl }).
			when('/Register', { templateUrl: 'partials/Register.html', controller: RegisterCtrl }).
			when('/poll/:pollId', { templateUrl: 'partials/item.html', controller: PollItemCtrl }).
			when('/new', { templateUrl: 'partials/new.html', controller: PollNewCtrl }).
			// If invalid route, just redirect to the main list view
			otherwise({ redirectTo: '/login.html' });
	}]);
	