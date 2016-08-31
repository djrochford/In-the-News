var newsApp = angular.module('newsApp', ['searchApp', 'linksApp', 'ngRoute'])
.config(['$routeProvider', function config($routeProvider) {
  $routeProvider
  .when('/search', {
    templateUrl: 'app/search/searchTemplate.html',
    controller: 'searchController' 
  })
  .when('/links', {
    templateUrl: 'app/links/linksTemplate.html',
    controller: 'linksController'
  })
  .otherwise('/search')
}])


