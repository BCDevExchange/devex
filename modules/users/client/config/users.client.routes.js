(function() {
	'use strict';

	// Setting up route
	angular.module('users.routes').config(routeConfig);

	routeConfig.$inject = ['$stateProvider'];

	function routeConfig($stateProvider) {
		// Users state routing
		$stateProvider
			.state('settings', {
				abstract: true,
				url: '/settings',
				templateUrl: '/modules/users/client/views/settings/settings.client.view.html',
				controller: 'SettingsController',
				controllerAs: 'vm',
				data: {
					roles: ['user', 'admin', 'gov-request', 'gov']
				},
				resolve: {
					capabilities: [
						'CapabilitiesService',
						function(CapabilitiesService) {
							return CapabilitiesService.query().$promise;
						}
					]
				}
			})
			.state('settings.skills', {
				url: '/skills',
				templateUrl: '/modules/users/client/views/settings/profile-skills.html',
				controller: 'ProfileSkillsController',
				controllerAs: 'vm',
				data: {
					pageTitle: 'Skills'
				},
				resolve: {
					capabilities: [
						'CapabilitiesService',
						function(CapabilitiesService) {
							return CapabilitiesService.query().$promise;
						}
					]
				}
			})
			.state('settings.privacy', {
				url: '/privacy',
				templateUrl: '/modules/users/client/views/settings/profile-privacy.html',
				controller: 'ProfilePrivacyController',
				controllerAs: 'vm',
				data: {
					pageTitle: 'Privacy'
				}
			})
			.state('settings.messages', {
				url: '/messages',
				templateUrl: '/modules/users/client/views/settings/profile-messages.html',
				controller: 'ProfileMessagesController',
				controllerAs: 'vm',
				data: {
					pageTitle: 'Messages'
				}
			})
			.state('settings.affiliations', {
				url: '/affiliations',
				templateUrl: '/modules/users/client/views/settings/profile-affiliations.html',
				controller: 'ProfileAffiliationsController',
				controllerAs: 'vm',
				data: {
					pageTitle: 'Affiliations'
				}
			})
			.state('settings.profile', {
				url: '/profile',
				templateUrl: '/modules/users/client/views/settings/profile-main.html',
				controller: 'EditProfileController',
				controllerAs: 'vm',
				data: {
					pageTitle: 'Settings'
				}
			})
			.state('authentication', {
				url: '/authentication',
				templateUrl: '/modules/users/client/views/authentication/authentication.client.view.html',
				controller: 'AuthenticationController',
				controllerAs: 'vm'
			})
			.state('authentication.signinadmin', {
				url: '/signinadmin?err',
				templateUrl: '/modules/users/client/views/authentication/signin.admin.client.view.html',
				controller: 'AuthenticationController',
				controllerAs: 'vm',
				data: {
					pageTitle: 'Signin'
				}
			})
			.state('password', {
				abstract: true,
				url: '/password',
				template: '<ui-view autoscroll="true"/>'
			})
			.state('password.forgot', {
				url: '/forgot',
				templateUrl: '/modules/users/client/views/password/forgot-password.client.view.html',
				controller: 'PasswordController',
				controllerAs: 'vm',
				data: {
					pageTitle: 'Password forgot'
				}
			})
			.state('password.reset', {
				abstract: true,
				url: '/reset',
				template: '<ui-view autoscroll="true"/>'
			})
			.state('password.reset.invalid', {
				url: '/invalid',
				templateUrl: '/modules/users/client/views/password/reset-password-invalid.client.view.html',
				data: {
					pageTitle: 'Password reset invalid'
				}
			})
			.state('password.reset.success', {
				url: '/success',
				templateUrl: '/modules/users/client/views/password/reset-password-success.client.view.html',
				data: {
					pageTitle: 'Password reset success'
				}
			})
			.state('password.reset.form', {
				url: '/:token',
				templateUrl: '/modules/users/client/views/password/reset-password.client.view.html',
				controller: 'PasswordController',
				controllerAs: 'vm',
				data: {
					pageTitle: 'Password reset form'
				}
			});
	}
}());
