(function() {
    'use strict';
aop.factory('Service', Service);
    Service.$inject = ["$http","$rootScope"];
    function Service($http,$rootScope) {
        var API="http://localhost:3100/"
        var service = {
            exposedFn:exposedFn
        };
        service.signup=function(payload) {
            console.log("here")
            return $http({
                url:API+"signup",
                method:"POST",
                data:payload
            });
        }

        service.login=function(payload) {
            console.log("here")
            return $http({
                url:API+"login",
                method:"POST",
                data:payload
            });
        }
        
        service.getData=function(payload) {
            console.log("here")
            return $http({
                url:API+"getData",
                method:"POST",
                data:payload
                        });
        }

        service.update=function(payload) {
            console.log("here")
            return $http({
                url:API+"update",
                method:"POST",
                data:payload
                        });
        }
        return service;

        function exposedFn() { }
    }
})();
