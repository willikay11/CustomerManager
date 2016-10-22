/**
 * Created by mac-intern on 10/4/16.
 */
    var app = angular.module('app', ['ui.router', 'ngMessages', 'ngStorage', 'ngMockE2E']);

    app.config(config);
    app.run(run);

    function config($stateProvider, $urlRouterProvider) {
        // default route
        $urlRouterProvider.otherwise("/");

        // app routes
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'home/index.html',
                controller: 'Home.IndexController',
                controllerAs: 'vm'
            })
            .state('login', {
                url: '/login',
                templateUrl: 'login/index.html',
                controller: 'Login.IndexController',
                controllerAs: 'vm'
            })
            .state('register',{
                url: '/register',
                templateUrl: 'register/index.html',
                controller: 'Register.IndexController',
                controllerAs: 'vm'
            })
            .state('createcustomer', {
                url: '/createcustomer',
                templateUrl: 'customer/createCustomer.html',
                controller: 'customerController',
                controllerAs: 'vm'
            })
            .state('viewcustomers', {
                url: '/viewcustomers',
                templateUrl: 'customer/viewCustomer.html',
                controller: 'customerController',
                controllerAs: 'vm'
            })
            .state('editcustomer', {
                url:'/editcustomer/:customerID',
                templateUrl: 'customer/editCustomer.html',
                controller: 'updateCustomerController',
                controllerAs: 'vm'
            })
            .state('viewcustomer', {
                url: '/viewcustomer/:customerID',
                templateUrl: 'customer/individualCustomer.html',
                controller: 'viewCustomerController',
                controllerAs: 'vm'
            })
            .state('createorder',{
                url: '/createorder',
                templateUrl: 'order/createOrder.html',
                controller: 'ordersController',
                controllerAs: 'vm'
            })
            .state('vieworders', {
                url: '/vieworders',
                templateUrl: 'order/viewOrders.html',
                controller: 'ordersController',
                controllerAs: 'vm'
            })
            .state('editorders', {
                url: '/editorders/:orderID',
                templateUrl: 'order/editOrders.html',
                controller: 'updateOrdersController',
                controllerAs: 'vm'
            });

    }

    function run($rootScope, $http, $location, $localStorage) {
        // keep user logged in after page refresh
        if ($localStorage.currentUser) {
            $http.defaults.headers.common.Authorization = 'Bearer ' + $localStorage.currentUser.token;
        }

        // redirect to login page if not logged in and trying to access a restricted page
        $rootScope.$on('$locationChangeStart', function (event, next, current) {
            var publicPages = ['/login', '/register'];
            var restrictedPage = publicPages.indexOf($location.path()) === -1;
            if (restrictedPage && !$localStorage.currentUser) {
                $location.path('/login');
            }
        });
    }