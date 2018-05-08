var aop = angular.module('aop', ['ui.router']);

aop.config(function ($stateProvider, $urlRouterProvider, $locationProvider, $qProvider) {

	$locationProvider.html5Mode(false).hashPrefix('');
	$qProvider.errorOnUnhandledRejections(false);
    
	// For any unmatched url, redirect to /state1
	$urlRouterProvider.otherwise("/");

	// Now set up the states
	$stateProvider
		.state('blank', {
			url: '/',
			templateUrl: 'views/login.html',
			controller: ''
		})
		.state('login', {
			url: '/login/:authUrl',
			templateUrl: '/views/login.html',
		}).state('profile', {
            url: "/profile",
            templateUrl: "/views/profile.html",
        })
		.state('dashboard', {
			url: '/dashboard',
			templateUrl: '/views/home.html',
        })
        

    // nested states 
    // each of these sections will have their own view
    // url will be nested (/form/profile)
    // .state('transfer.ou', {
    //     url: '/ou',
    //     templateUrl: 'views/transfer_ou.html'
    // })
    

});