angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  $scope.data = {};
  $scope.getLinks = function(){
    Links.getLinks()
      .then(function(results){
        $scope.data.links = results.data;
      })
  };
  $scope.getLinks();
});
