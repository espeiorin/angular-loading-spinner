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
});
