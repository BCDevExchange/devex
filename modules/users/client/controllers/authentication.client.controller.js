(function() {
	'use strict';

	angular.module('users').controller('AuthenticationController', AuthenticationController);

	AuthenticationController.$inject = [
		'$scope',
		'$rootScope',
		'$state',
		'UsersService',
		'$location',
		'$window',
		'Authentication',
		'PasswordValidator',
		'Notification',
		'Idle'
	];

	function AuthenticationController(
		$scope,
		$rootScope,
		$state,
		UsersService,
		$location,
		$window,
		Authentication,
		PasswordValidator,
		Notification
	) {
		var vm = this;
		vm.authentication = Authentication;
		vm.getPopoverMsg = PasswordValidator.getPopoverMsg;
		vm.non_gov = non_gov;
		vm.signup = signup;
		vm.gov = gov;
		vm.signin = signin;
		vm.callOauthProvider = callOauthProvider;
		vm.governmentSelected = governmentSelected;
		// Get an eventual error defined in the URL query string:
		if ($location.search().err) {
			Notification.error({ message: $location.search().err });
		}

		// If user is signed in then redirect back home
		if (vm.authentication.user) {
			$location.path('/');
		}

		function governmentSelected() {
			return $location.search().role === 'non_gov';
		}

		function non_gov() {
			$window.location.href = '/authentication/government?role=non_gov';
		}

		function gov() {
			$window.location.href = '/authentication/government?role=gov';
		}

		function signup(isValid) {
			if (!isValid) {
				$scope.$broadcast('show-errors-check-validity', 'vm.userForm');

				return false;
			}

			UsersService.userSignup(vm.credentials)
				.then(onUserSignupSuccess)
				.catch(onUserSignupError);
		}

		function signin(isValid) {
			if (!isValid) {
				$scope.$broadcast('show-errors-check-validity', 'vm.userForm');

				return false;
			}

			UsersService.userSignin(vm.credentials)
				.then(onUserSigninSuccess)
				.catch(onUserSigninError);
		}

		// OAuth provider request
		function callOauthProvider(url) {
			if ($state.previous && $state.previous.href) {
				sessionStorage.setItem('prevState', $state.previous.state.name);
				sessionStorage.setItem('prevParams', JSON.stringify($state.previous.params));
			}
			$rootScope.authRole = $location.search().role;
			// Effectively call OAuth authentication route:
			$window.location.href = url;
		}

		// Authentication Callbacks
		function onUserSignupSuccess(response) {
			// If successful we assign the response to the global user model
			vm.authentication.user = response;
			Notification.success({
				message: '<i class="fas fa-check-circle"></i> Signup successful!'
			});
			// And redirect to the previous or home page
			if ($state.previous && $state.previous.state) {
				$state.go($state.previous.state.name);
			} else {
				$state.go('home', $state.params);
			}
		}

		function onUserSignupError(response) {
			Notification.error({
				message: response.data.message,
				title: '<i class="fas fa-exclamation-triangle"></i> Signup Error!',
				delay: 6000
			});
		}

		function onUserSigninSuccess(response) {
			vm.authentication.user = response;

			// Emit an event up communicating a user has signed in so application updates appropriately
			$rootScope.$broadcast('userSignedIn', response);

			if ($state.previous && $state.previous.state) {
				$state.go($state.previous.state.name, $state.previous.state.params);
			} else {
				$state.go('home', $state.params);
			}
		}

		function onUserSigninError(response) {
			Notification.error({
				message: response.message,
				title: '<i class="fas fa-exclamation-triangle"></i> Signin Error!',
				delay: 6000
			});
		}
	}
}());
