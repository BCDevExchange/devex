'use strict';

/* eslint comma-dangle:[0, "only-multiline"] */

module.exports = {
	client: {
		lib: {
			css: [
				// bower:css
				'public/lib/ng-img-crop/compile/unminified/ng-img-crop.css',
				'public/lib/angular-ui-notification/dist/angular-ui-notification.css',
				'public/lib/simple-line-icons/css/simple-line-icons.css',
				'public/device-mockups/device-mockups.min.css'
				// endbower
			],
			js: [
				// bower:js
				'public/lib/angular/angular.js',
				'public/lib/angular-animate/angular-animate.js',
				'public/lib/ui-bootstrap4/dist/ui-bootstrap-tpls.js',
				'public/lib/ng-file-upload/ng-file-upload.js',
				'public/lib/ng-img-crop/compile/unminified/ng-img-crop.js',
				'public/lib/angular-messages/angular-messages.js',
				'public/lib/angular-mocks/angular-mocks.js',
				'public/lib/angular-resource/angular-resource.js',
				'public/lib/angular-ui-notification/dist/angular-ui-notification.js',
				'public/lib/angular-ui-router/release/angular-ui-router.js',
				'public/lib/angular-breadcrumb/dist/angular-breadcrumb.js',
				'public/lib/angular-sanitize/angular-sanitize.min.js',
				'public/lib/lodash/dist/lodash.min.js',
				'public/lib/tinymce/tinymce.js',
				'public/lib/angular-ui-tinymce/src/tinymce.js',
				'public/lib/owasp-password-strength-test/owasp-password-strength-test.js',
				'public/lib/font-awesome/svg-with-js/js/fontawesome-all.min.js',
				'public/jquery/jquery.min.js',
				'public/lib/angular-drag-and-drop-lists/angular-drag-and-drop-lists.min.js',
				'public/lib/ng-idle/angular-idle.min.js',
				'public/lib/angular-touch/angular-touch.js'
				// endbower
			],
			tests: ['public/lib/angular-mocks/angular-mocks.js']
		},
		theme: {
			less: {
				// includes bootstrap
				entry: 'public/less/theme.less',
				watch: ['public/less/include/*.less']
			},
			sass: {
				entry: 'public/sass/theme.scss',
				watch: ['public/sass/include/*.scss']
			}
		},
		css: ['public/dist/theme.css', 'public/css/*.css', 'modules/*/client/css/*.css'],
		less: ['modules/*/client/less/*.less'],
		sass: ['modules/*/client/scss/*.scss'],
		js: [],
		img: [
			'modules/**/*/img/**/*.jpg',
			'modules/**/*/img/**/*.png',
			'modules/**/*/img/**/*.gif',
			'modules/**/*/img/**/*.svg'
		],
		views: ['modules/*/client/views/**/*.html'],
		templates: ['build/templates.js']
	},
	server: {
		gulpConfig: ['gulpfile.js'],
		allJS: ['server.js', 'config/**/*.js', 'modules/*/server/**/*.js'],
		models: 'modules/*/server/models/**/*.js',
		routes: ['modules/!(core)/server/routes/**/*.js', 'modules/core/server/routes/**/*.js'],
		sockets: 'modules/*/server/sockets/**/*.js',
		config: ['modules/*/server/config/*.js'],
		policies: 'modules/*/server/policies/*.js',
		views: ['modules/*/server/views/*.html']
	}
};
