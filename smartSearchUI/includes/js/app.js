var mindMap = angular.module('mindMap',['ngMaterial','ui.router']);

mindMap.config(function($stateProvider,$urlRouterProvider){
  $stateProvider
    .state('defaultPage',{
      url: '',
      templateUrl:'includes/views/defaultSearchPage.html'
    })
    .state('searchResults',{
      templateUrl:'includes/views/searchResults.html'
    })
    .state('graphDisplay',{
      templateUrl:'includes/views/graph.html'
    })
});

mindMap.directive('searchResultCard',function(){
  return {
    templateUrl : "includes/views/searchResultCard.html",
    controller : "searchResultCard"
  }
});

mindMap.directive('mainDir',function(){
  return {
    templateUrl : "includes/views/mainDir.html",
    controller : "mainCtrl"
  }
});

mindMap.directive('inDepthFilters',function(){
  return {
    templateUrl : "includes/views/inDepthFilters.html",
    controller : "inDepthFilters"
  }
});

mindMap.directive('queryDisplay',function(){
  return {
    templateUrl : "includes/views/queryDisplay.html",
    controller : "queryDisplayCtrl"
  }
});


mindMap.directive('filterResultCard',function(){
  return {
    templateUrl : "includes/views/filterResultCard.html",
    controller : "filterResultCard"
  }
});

mindMap.directive('filterAdd',function(){
  return {
    templateUrl : "includes/views/filterAdd.html",
    controller : "addFilter"
  }
});


mindMap.controller('mainCtrl',['$scope','$rootScope','$http',function($scope,$rootScope,$http){

  $http({
    method: 'GET',
    url: 'http://localhost:3000/profiles'
  }).then(function successCallback(response) {
      $rootScope.profilesParent = response.data;
      $rootScope.profiles = $scope.profilesParent;
      }, function errorCallback(response) {

  });



}]);
