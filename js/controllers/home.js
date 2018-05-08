aop.controller('homeController', homeController)

homeController.$inject = ["$scope", "$rootScope", "$http", "$window", "Service","$state","$location"];

    function homeController($scope, $rootScope, $http, $window, Service,$state)  {
      $scope.userData=JSON.parse($window.localStorage['userData']);
      console.log($rootScope.userData)
      $scope.referralLink=$window.location.origin+"/#/login/"+$rootScope.userData.uniqueid;
      
    }
