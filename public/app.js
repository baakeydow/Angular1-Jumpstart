var app = angular.module('LinksNews', ['ngRoute'])

app.config(function($routeProvider){
  $routeProvider.when('/', {
    controller: 'PageCtrl',
    templateUrl: 'html/linksPosted.html'
  })
  .otherwise('/');
})

app.factory('postedLinks', [function(){
	var o = {
		posted: [],
		incUpVotes: function(link){
			link.upvotes += 1;
		}
	};
	return o;
}]);

app.controller('PageCtrl', ['$scope', 'postedLinks',
	function($scope, postedLinks) {
		$scope.linksData = postedLinks.posted;
		$scope.incrementUpvotes = postedLinks.incUpVotes;
		$scope.addLink = function(){
			if(!$scope.title || $scope.title === '') { return; }
			$scope.linksData.push({
				title: $scope.title,
				link: $scope.link,
				upvotes: 0
			});
		$scope.title = '';
		$scope.link = '';
		};
}]);

app.run(function ($templateCache){
 $templateCache.put('html/linksPosted.html');
});
