var app = angular.module('myApplicationModule', ['uiGmapgoogle-maps']);
	
app.controller('myCtrl', function($scope) {
	$scope.map = { center: { latitude: 49.8558443, longitude: 24.0242727 }, zoom: 17 };
});

app.directive('testing', function() {
		return {
		restrict: 'AE',
		template: '<p>just for test!</p>',
		replace: false,
		link: function($scope, elem, attr) { 
			elem.bind('click', function() {
				console.log('click');
				console.log($scope);
				console.log(elem);
				console.log(attr);
				elem.css('color', 'red');
			});
		}
	}
});


//http://angular-ui.github.io/angular-google-maps/#!/
//http://angular-ui.github.io/angular-google-maps/#!/use
//
