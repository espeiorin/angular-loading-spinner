angular.module('loading-spinner', []).directive('loadingSpinner', function(){
	return {
		restrict: 'A',
        scope: true,
        replace : false,
		link : function(scope, element, attributes)
		{
			var loader = $('<span class="request-spin"><i class="fa fa-circle-o-notch fa-spin"></i></span>');
			scope.$watch(attributes['loadingSpinner'], function(newValue, oldValue){
				if (newValue) {
					element.append(loader);
				} else {
					$(loader).remove();
				}
			}, true);
		}
	};
}).directive('overlaySpinner', function(){
	return {
		restrict: 'A',
        scope: true,
        replace : false,
        link : function(scope, element, attributes)
        {
        	var overlay = $('<div class="overlay-spinner"><span class="request-spin"><i class="fa fa-circle-o-notch fa-spin"></i><span></div>');
			scope.$watch(attributes['overlaySpinner'], function(newValue, oldValue){
				if (newValue) {
					element.append(overlay);
				} else {
					$(overlay).remove();
				}
			}, true);
        }
	}
});
