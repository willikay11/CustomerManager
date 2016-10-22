/**
 * Created by mac-intern on 10/5/16.
 */

app.controller('Register.IndexController', ['$scope', '$location', 'AuthenticationService', function($scope, $location, AuthenticationService){

    var vm = this;

    vm.register = register;

    function register() {
        vm.loading = true;

        AuthenticationService.Register(vm.username, vm.email, vm.password, function (result) {
            if (result === true) {
                $location.path('/');
            } else {
                vm.error = 'Unable to create account';
                vm.loading = false;
            }
        });
    };

}]);