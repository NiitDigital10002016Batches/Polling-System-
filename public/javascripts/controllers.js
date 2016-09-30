// Controller for the poll list
function PollListCtrl($scope, Poll) {
	$scope.polls = Poll.query();
}

// Controller for an individual poll
function PollItemCtrl($scope, $routeParams, socket, Poll) {	
	$scope.poll = Poll.get({pollId: $routeParams.pollId});
	
	socket.on('myvote', function(data) {
		console.dir(data);
		if(data._id === $routeParams.pollId) {
			$scope.poll = data;
		}
	});
	
	socket.on('vote', function(data) {
		console.dir(data);
		if(data._id === $routeParams.pollId) {
			$scope.poll.choices = data.choices;
			$scope.poll.totalVotes = data.totalVotes;
		}		
	});
	
	$scope.vote = function() {
		var pollId = $scope.poll._id,
				choiceId = $scope.poll.userVote;
		
		if(choiceId) {
			var voteObj = { poll_id: pollId, choice: choiceId };
			socket.emit('send:vote', voteObj);
		} else {
			sweetAlert('You must select an option to vote for');
		}
	};
}

// Controller for creating a new poll
function PollNewCtrl($scope, $location, Poll,$window) {
	// Define an empty poll model object
	$scope.poll = {
		question: '',
		choices: [ { text: '' }, { text: '' }]
	};
	
	// Method to add an additional choice option
	$scope.addChoice = function() {
		$scope.poll.choices.push({ text: '' });
	};
	
	// Validate and save the new poll to the database
	$scope.createPoll = function() {
		var poll = $scope.poll;
		
		// Check that a question was provided
		if(poll.question.length > 0) {
			var choiceCount = 0;
			
			// Loop through the choices, make sure at least two provided
			for(var i = 0, ln = poll.choices.length; i < ln; i++) {
				var choice = poll.choices[i];
				
				if(choice.text.length > 0) {
					choiceCount++
				}
			}
		
			if(choiceCount > 1) {
				// Create a new poll from the model
				var newPoll = new Poll(poll);
				
				// Call API to save poll to the database
				newPoll.$save(function(p, resp) {
					if(!p.error) {
						// If there is no error, redirect to the main view
						$location.path('polls');
					} else {
						sweetAlert('Could not create poll');
					}
				});
			} 
			else {
				sweetAlert("Enter atleast two options");
			}
		} else {
			sweetAlert("You must enter a question");
			
		}
	};
}

function RegisterCtrl($scope, $location,Reg) {
	$scope.reg = {
		name: '',
		email:'',
		password:''
	};
	$scope.createuser = function() {
		var reg = $scope.reg;
		if(reg.name.length > 0) {
			Reg.regname(reg,function(response){
				
				$location.path('polls');
			}
			)}

		 else {
			sweetAlert("Enter Username");
		}
	};
}

function LoginCtrl(UserService,$location,$rootScope,$scope) {
	$scope.user = {
		username: '',
		password: ''
	};
	$scope.LogIn = function()
	{
		user=$scope.user;
		UserService.loginUser(user,function(response){
			
			if(response == null)
			{
				sweetAlert("Invalid Credentials!!");
			}
			else
			{
				$rootScope.currentUser = response;
				$location.url("/polls");
				sweetAlert("Successful Login");
			}
		})
	}
}

function LoginPageCtrl($location) {
	$location.url("/login");	
}