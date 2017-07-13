(function(angular){
	var app = angular.module('app',[]);
	app.controller('sliderController',['$scope','$compile',function($scope,$compile){
		$scope.slideIndex = 1;
		var slides = $('.slide');
		total_slide = slides.length;
		alert(slides.length);
		//add bullets for each slide
		var bulletList = document.createElement('ul');
		for(i = 1; i<= total_slide; i++){
			var listItem = document.createElement('li');
			listItem.id="bullet_"+i;
			listItem.setAttribute('ng-click','show('+i+')')
			listItem.setAttribute('class','bullet')
			bulletList.appendChild(listItem);
		}
		var tempEL = $compile(bulletList)($scope);
	    angular.element(document.getElementById('bullets')).append(tempEL);
		// end add bullets
		$scope.showSlide = function(slideIndex){
			$scope.slideIndex = slideIndex;
			$(".slide").removeClass( "active" );
			$(".bullet").removeClass( "active" );
			$('#slide_'+ $scope.slideIndex).addClass('active');
			$('#bullet_'+ $scope.slideIndex).addClass('active');
			$scope.slideIndex += 1
		}
		$scope.show = function(slide){
			$scope.showSlide(slide);
		}
		$scope.show(1);
		setInterval(function(){
			if($scope.slideIndex>3){
				$scope.slideIndex = 1;
			};
			$scope.showSlide($scope.slideIndex);
		},5000);
	}]);
}(window.angular))