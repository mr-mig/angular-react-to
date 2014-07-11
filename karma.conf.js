module.exports = function (config) {
	config.set({
		basePath: '',
		frameworks: ['jasmine'],
		plugins: [
			'karma-jasmine',
			'karma-phantomjs-launcher'
		],
		autoWatch: true,

		files: [
			'bower_components/angular/angular.js',
			'bower_components/angular-mocks/angular-mocks.js',
			'reactTo.js',
			'tests/test.js'
		],

		browsers: ['PhantomJS']
	});
};
