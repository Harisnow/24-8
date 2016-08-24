mindMap.controller("queryDisplayCtrl",function($scope,$rootScope){
  $scope.display = "Welcome. Your Query will be generated here.";
  $scope.default = "Welcome. Your Query will be generated here.";
  $scope.starting = "I'm looking for people whose ";
  $scope.search = function (){
    $rootScope.profiles = $scope.shuffle($rootScope.profiles);
  };
  $scope.shuffle =   function(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  };



  $scope.$on("passingDefault",function(evt,args){
    $scope.display = $scope.default;
  });


  $scope.$on("passingCriteria",function(evt,args){
    $scope.criteriaCondition = args.value.criteria;
    if(args.index==0){
        $scope.temp = $scope.starting + $scope.criteriaCondition;
        $scope.display = $scope.temp;
    } else {
      $scope.display = $scope.display + " " + $scope.criteriaCondition;
    }
  });

  $scope.$on("passingRelation",function(evt,args){
    $scope.relationCondition = args.value.relation;
    if(args.index==0){
      $scope.temp = $scope.starting + $scope.criteriaCondition + " " + $scope.relationCondition;
      $scope.display = $scope.temp;
    } else {
      $scope.display = $scope.display +  " " + $scope.relationCondition;
    }
  });

  $scope.$on("passingValue",function(evt,args){
    $scope.valueCondition = args.value;
    if(args.index==0){
      $scope.temp = $scope.starting + $scope.criteriaCondition + " " + $scope.relationCondition + " " + $scope.valueCondition;
      $scope.display = $scope.temp;
    } else {
      $scope.display = $scope.display + " " + $scope.valueCondition;
    }

  });

  $scope.$on("passingAndOrValue",function(evt,args){
    $scope.display = $scope.display + " " + args;
  });
});
