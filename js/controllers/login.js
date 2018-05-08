
aop.controller("loginController", loginController);

loginController.$inject = ["$scope", "$rootScope", "$http", "$window", "Service","$state","$stateParams"];

function loginController($scope, $rootScope, $http, $window, Service,$state,$stateParams) {
    $scope.login=true;
    $scope.signup=false;
    $scope.error=false;
    console.log($stateParams)
    $scope.payload={
        referral:$stateParams.authUrl
    }
    
    $scope.display=function(form){
        if(form=='login'){
            $scope.signup=false;
            $scope.login=true;
        }
        else{
            $scope.signup=true;
            $scope.login=false;
        }
    }

    $scope.submit=function(form){
        console.log(form)
        
        if(form=='signup'){
            console.log($scope.payload)
            payload={data:$scope.payload}
            Service.signup(payload).then(function success(response){
                console.log(response)
                $window.localStorage['userData']=JSON.stringify(response.data);
                
                $state.go('login');
            },function error(err){
                $scope.error=true;
                $scope.msg="Something is Wrong"
                $state.go('login');
            })
        }
        else{
            payload={data:$scope.payload}
            console.log(payload)
            Service.login(payload).then(function success(resp){
                $rootScope.isLogin=true;
                resp.data[0]['isLogin']=true;
                $window.localStorage['userData']=JSON.stringify(resp.data[0]);
                $state.go('dashboard');
            },function error(err){
                console.log(err)
                $scope.error=true;
                $scope.msg="Please check your login Details"
                // $state.go('login');

            })
        }
    }


    }