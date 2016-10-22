/**
 * Created by mac-intern on 10/4/16.
 */


app.controller('Login.IndexController', ['$scope', '$location', 'AuthenticationService', function($scope, $location, AuthenticationService){

    var vm = this;

    vm.login = login;

    AuthenticationService.Logout();

    function login() {
        vm.loading = true;
        AuthenticationService.Login(vm.username, vm.password, function (result) {
            if (result === true) {
                $location.path('/');
                vm.loggedIn = true;
            } else {
                vm.error = 'Username or password is incorrect';
                vm.loading = false;
                vm.loggedIn = false;
            }
        });
    };

}]);

