var linksApp = angular.module('linksApp', []);

linksApp.controller('linksController', ['$rootScope', '$scope', '$http', function($rootScope, $scope, $http) {
  $scope.data = $rootScope.data;
  $scope.selection = {};
  $scope.submit = function() {
    var toArchive = $scope.data.filter(function(doc, index) {
      return $scope.selection[index];
    });
    toArchive = toArchive.map(function(doc) {
      return {
        headline: doc.headline.main,
        source: doc.source,
        byline: doc.byline.original,
        snippet: doc.snippet,
        url: doc.web_url
      }
    });
    $http({
      method: 'POST',
      url: '/archive',
      data: toArchive
    }).then(function successCallback(response) {
      console.log('All is well')
     },
    function errorCallback(response) {
      console.log('error!')
    });
  }
}]);
