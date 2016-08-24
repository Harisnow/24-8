mindMap.factory('GetCriteria', function ($http,$q) {
      return {
          getCriteria: function(str) {
      var url = "http://localhost:3000/filters?criteria_like="+str;
              return $http.get(url)
                  .then(function(response) {
                      if (typeof response.data === 'object') {
                          return response.data;
                      } else {
                          return $q.reject(response.data);
                      }

                  }, function(response) {
                      return $q.reject(response.data);
                  });
          },
          getRelation: function(str) {
      var url = "http://localhost:3000/number?relation_like="+str;
              return $http.get(url)
                  .then(function(response) {
                      if (typeof response.data === 'object') {
                          return response.data;
                      } else {
                          return $q.reject(response.data);
                      }

                  }, function(response) {
                      return $q.reject(response.data);
                  });
          }
      };
  });

mindMap.controller("addFilter",function($scope,$rootScope,GetCriteria){
  $scope.criteriaText = "";
  $scope.criteria = [];
  $scope.selectedCriteria = [];
  $scope.isDisabled = false;
  $scope.noCache = false;

  $scope.searchText = "";
  $scope.Person = [];
  $scope.selectedRelation = [];
  $scope.isDisabled = false;
  $scope.noCache = false;

  $scope.searchCriteriafn = function (str) {
    return GetCriteria.getCriteria(str);
  }

  $scope.searchRelationfn = function (str) {
    return GetCriteria.getRelation(str);
  }


  $rootScope.valueTrigger = function (x) {
    $scope.$emit("passingValue", {
      index : x,
      value : $scope.valueQuery
    });
  }

  $rootScope.criteriaTrigger = function (x){
      if($scope.selectedCriteria != null){
        $scope.$emit("passingCriteria", {
          index : x,
          value : $scope.selectedCriteria
        });
      }
  }

  $rootScope.relationTrigger = function (x){
    if($scope.selectedRelation != null){
      $scope.$emit("passingRelation", {
        index : x,
        value : $scope.selectedRelation
      });
    }
  }

  $scope.andOrFn = function (x) {
    $scope.$emit("passingAndOrValue",x);
  }

  $scope.uncheck = function (event) {
        if ($scope.checked == event.target.value) $scope.checked = false
    }

});
