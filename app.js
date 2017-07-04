(function(angular){
	var app = angular.module('app',[]);
	app.controller('sliderController',['$scope',function($scope){
		$scope.slideIndex = 1;
		setInterval(function(){
			if($scope.slideIndex>=3){
				$scope.slideIndex = 0;
			};
			$scope.slideIndex += 1
			$(".slide").removeClass( "active" );
			$('#slide_'+ $scope.slideIndex).addClass('active');
		},5000)
	}]);
}(window.angular))