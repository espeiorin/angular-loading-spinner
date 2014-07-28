angular.module('loading-spinner', []).directive('loadingSpinner', function(){
	return {
		scope : {
			loadingSpinner : "="
		},
		compile : function(element, attributes) {
			var loader = $('<span class="request-spin"><i class="fa fa-circle-o-notch fa-spin"></i></span>');
			return function(scope, element, attributes)
			{
				scope.$watch('loadingSpinner', function(newValue, oldValue){
					if (newValue) {
						element.append(loader);
					} else {
						$(loader).remove();
					}
				}, true);
			};
		},
		restricted : 'AE',
		replace : false
	};
}).directive('overlaySpinner', function(){
	return {
		scope : {
			overlaySpinner : '='
		},
		compile : function(element, attributes) {
			var overlay = $('<div class="overlay-spinner"><span class="request-spin"><i class="fa fa-circle-o-notch fa-spin"></i><span></div>');
			return function(scope, element, attributes){
				scope.$watch('overlaySpinner', function(newValue, oldValue){
					if (newValue) {
						element.append(overlay);
					} else {
						$(overlay).remove();
					}
				}, true);
			};
		},
		restricted : 'A',
		replace : false
	}
});
