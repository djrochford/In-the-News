var searchApp = angular.module('searchApp', []);

searchApp.controller('searchController', ['$rootScope', '$scope', '$location', '$http', '$httpParamSerializerJQLike', function($rootScope, $scope, $location, $http, $httpParamSerializerJQLike) {
  $scope.submitNew =  function() {
    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    var params = {'api-key': NYT_API_KEY, 'q': $scope.searchTerm, 'sort': 'newest'};
    $http({
      method: 'GET',
      url: url,
      params: params,
      paramsSerializer: '$httpParamSerializerJQLike',
    }).then(function successCallback(response) {
      $rootScope.data = response.data.response.docs;
      $location.path('/links');
      }, 
      function errorCallback(response) {
      console.log('Error, yo');
    });
  };

  $scope.query = {};

  $scope.submitArchive = function() {
    $http({
      method: 'Post',
      url: '/retrieve',
      data: $scope.query
    }).then(function successCallback(response) {
      $rootScope.data = response.data;
      $location.path('/links');
      }, 
      function errorCallback(response) {
      console.log('Error, yo');
    });
  };
}]);