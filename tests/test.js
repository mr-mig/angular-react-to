describe('reactTo', function () {
	var scope, someService;

	beforeEach(module('reactTo'));

	beforeEach(inject(function ($rootScope) {
		scope = $rootScope.$new();
		someService = {
			someValue: 'init'
		};
		scope.testValue = 'init';
	}));

	it('should have reactTo function', inject(function (reactTo) {
		expect(typeof reactTo).toBe('function');
	}));

	it('should bind watcher to the value in the scope', inject(function (reactTo) {
		var updateValue = 'updateValue';
		var result = '';
		reactTo(scope)('testValue', function (newValue) {
			result = newValue;
		});
		scope.$apply();

		scope.testValue = updateValue;
		scope.$apply();
		expect(result).toBe(updateValue);
	}));

	it('should watch to the service value', inject(function (reactTo) {
		var updateValue = 'updateValue';
		var result = '';
		reactTo(scope)(someService, 'someValue', function (newValue) {
			result = newValue;
		});
		scope.$apply();

		someService.someValue = updateValue;
		scope.$apply();
		expect(result).toBe(updateValue);
	}));

});
