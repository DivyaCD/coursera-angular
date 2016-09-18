(function(){
var app=angular.module("LunchCheck",[]);
app.controller("LunchCheckController",LunchCheckController)

LunchCheckController.inject=['$scope'];
function LunchCheckController($scope){
  $scope.items="";
  $scope.msg="";
  $scope.arrOfItems="";
  $scope.colorStatus="";

  $scope.displayMsg=function(){
    var noOfItems=checkNoOfItems($scope.items);
    if(noOfItems==0){
      $scope.msg="Please enter data first";
      $scope.colorStatus="red";
    }
    else if(noOfItems<=3){
      $scope.msg="Enjoy!";
      $scope.colorStatus="green";
    }
    else{
      $scope.msg="Too much!";
      $scope.colorStatus="green";
    }
  }

  function checkNoOfItems(string){
    $scope.arrOfItems=string.split(",");
    if($scope.arrOfItems.length==0 && $scope.arrOfItems[0]=="")
      return 0;
    noOfItems=0;
  //  console.log("noOfItems:"+noOfItems);
    for(var i=0;i<$scope.arrOfItems.length;i++)
        if($scope.arrOfItems[i].trim()!=""){
          noOfItems++;
          console.log($scope.arrOfItems[i]+"hi")

        }
    console.log(noOfItems);
    return noOfItems;
  }
}
})();
