mindMap.controller("filterResultCard",function($scope,$rootScope,$mdToast,$http,$compile,GetCriteria){

  $scope.expand = false;
  $scope.expandBox = function (x){
    $scope.expand = !$scope.expand;
    var elementId = '#expandBox' + x;
    var expEl = angular.element( document.querySelector(elementId) );
    var btnId = '#expandBtn' + x;
    var expBtnEl = angular.element( document.querySelector(btnId) );
    if($scope.expand == true){
      expBtnEl.html('&#x25B2;');
      expEl.removeClass("ng-hide");
    } else {
      expBtnEl.html('&#x25BC;');
      expEl.addClass("ng-hide");
    }
  }

  $scope.filterArray = [];

  $scope.addFilter = function(x){
      var elementId = '#addBtn' + x;
      var expEl = angular.element( document.querySelector(elementId) );
      expEl.addClass('ng-hide');
      $scope.filterArray.push({'g':x});
  }

  $scope.removeFilter = function (x){
    var elementId = '#filterBox' + x;
    var delEl = angular.element( document.querySelector(elementId) );
    delEl.remove();

    var idInd = $scope.filterArray.length;
    if (idInd == 1){
      var addBtn = angular.element( document.querySelector('#addBtn99999') );
      addBtn.removeClass("ng-hide");
      $scope.$emit("passingDefault",true);
    } else if((x+1) == idInd) {
      var temp = (x-1);
      var btnId = '#addBtn' + temp;
      var addBtn = angular.element( document.querySelector(btnId) );
      addBtn.removeClass("ng-hide");
    }
    $scope.filterArray.splice(x,1);
  }
});
