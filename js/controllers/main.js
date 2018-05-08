
aop.controller('mainController',function($window, $state,$scope,$rootScope){


    $rootScope.isLogin=false;
    console.log($rootScope.uri)
    $scope.logout=function(){
        var userData=$window.localStorage.getItem('userData');
        $rootScope.isLogin=false;
        localStorage.removeItem("userData");
        $state.go('login')
        }    

    $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
        console.log("state change")
        if($window.localStorage['userData']!='' && $window.localStorage['userData']!=undefined && $window.localStorage['userData']!=null){
            $rootScope.userData=JSON.parse($window.localStorage['userData']);
            $rootScope.isLogin=$rootScope.userData.isLogin;
            $state.go(toState.name);
        }
        else{
            $state.go("login");
        }
    });

});


    $("#alert-target").click(function (msg) {
        toastr["info"](msg)
    });
