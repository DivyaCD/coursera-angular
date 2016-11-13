(function(){
var app=angular.module("Myapp",[])
app.controller('calcCtrl',function($scope)
{
  $scope.val=0;
  $scope.displayVal=function(){
    $scope.val=calculate($scope.name);
  };

  function calculate(string){
    var sum=0;
    for(var i=0;i<string.length;i++)
      sum=sum+string.charCodeAt(i)
    return sum;
  }
}

)


})();
