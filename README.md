Angular loading-spinner directive
=================================

Angular directive that allows you to add a loading state (Font Awesome spinner) to a html element.

## Install

### Bower
```js
"loading-spinner" : "*"
```

## Import
```js
angular.module('moduleName', [
	...
	'loading-spinner',
	...
]);
```

## Use

### On controller
Create a bool variable to indicate whether animation spinner should be visible or not.
```js
$scope.loadingVisible = false;
```

Before start the desired request, set value to true
```js
$scope.loadingVisible = true;
```

After perform request, set value back to false
```js
$scope.loadingVisible = false;
```

### On HTML
Select the element thal will contains spinner and apply the directive, passing the bool value through attribute loading-spinner:
```html
<div loading-spinner="loadingVisible"> any kind of content </div>
```

Done, watching the loadingVisible variable, loading-spinner will automatically control its visibility.