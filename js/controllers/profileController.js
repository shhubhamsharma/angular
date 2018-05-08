
aop.controller('profileController', profileController)

profileController.$inject = ["$scope", "$rootScope", "$http", "$window", "Service","$state","$location"];

    function profileController($scope, $rootScope, $http, $window, Service,$state)  {
        $scope.error=false;
        $scope.success=false;
      $scope.payload=JSON.parse($window.localStorage['userData']);
      console.log($rootScope.userData);
      $scope.disabled=false;
      $scope.referralLink=$window.location.origin+"/"+$rootScope.userData.uniqueid;
      $scope.submit=function(){
          console.log($scope.payload)
          Service.update($scope.payload).then(function success(resp){
              $scope.success=true;
              $scope.error=false;
              $scope.msg="Modifield"
            console.log(resp);
          },function error(err){
            console.log(err);
            $scope.success=false;
              $scope.error=true;
              $scope.msg="Not Modifield"
          })
      }
    }
