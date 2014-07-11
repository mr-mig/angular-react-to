angular-react-to
================
[![Build Status](https://travis-ci.org/mr-mig/angular-react-to.svg?branch=master)](https://travis-ci.org/mr-mig/angular-react-to)

A helper for watching **any value change** related to the specified scope.

Planned to be used instead of `scope.$watch`.

Put in other words:
`reactTo` will call a handler when object's field is changed and the change is related to the specified scope.

## Why I need this?
`scope.$watch` allows you react to value changes in the scope.

But there are only 2 usecases:

1. The value must be assigned to the scope
  ```javascript
  scope.myVal = 5
  scope.$watch('myVal', fn); // fn is called when myVal is changed
  ```
2. A custom function wrapper should be created:
 ```javascript
 var watchCondition = function(){
   return someService.someField;
 }

 scope.$watch(watchCondition, fn)
 ```

`reactTo` unites those two approaches, allowing you the next usages:

  * `reactTo(scope)('scopeValue', fn)`      - call `fn` when `scope.scopeValue` changes
  * `reactTo(scope)('prefix','value', fn)`  - call `fn` when `scope.prefix.value` changes
  * `reactTo(scope)(object, 'field', fn)`   - call `fn` when `object.field` value changes (object **must not be** in scope)

## Limitations

You can use `reactTo` as a drop-in replacement for `scope.$watch`.

You should keep an eye on scope change propagation when you do something exotic, e.g. using `scope.$digest` instead of `scope.$apply`.

## Installation

You can install reactTo either as a bower component:
`bower install --save mr-mig/angular-react-to`
or as a CommonJS module:
`npm install -S angular-react-to`

All you need to do afterwards is to inject `reactTo` in your component, e.g.:
```javascript
angular.module('myModule', ['reactTo'])
  .controller('MyCtrl', function($scope, reactTo, myService){
    var react = reactTo($scope);

    react(myService, 'someField', function(n){
      console.log('MyService.someField value is', n);
    });
  });
```

## Tests
```
npm install
bower install
npm test
```

You can run `gulp` to run a test watcher.