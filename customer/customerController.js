/**
 * Created by mac-intern on 10/5/16.
 */
app.controller('customerController', ['$scope', '$stateParams','customerFactory', function($scope, $stateParams, customerFactory){

    var vm = this;

    vm.createCustomer = createCustomer;
    vm.deleteCustomer = deleteCustomer;

    $scope.customers = customerFactory;

    if($scope.customers.length < 1){
        vm.anyCustomer = true;
        vm.customerMessage = "There are no current users!"
    }else{
        vm.anyCustomer = false;
    }

    function createCustomer(){

        customerFactory.addCustomer(vm.firstname, vm.lastname, vm.email, vm.phone);
        vm.created = true;
        vm.success = vm.firstname+" created successfully!";
    }

    function deleteCustomer(id) {
        customerFactory.deleteCustomer(id);
    }


}]);

app.controller('updateCustomerController', ['$scope', '$stateParams','customerFactory', function($scope, $stateParams, customerFactory){

    var vm = this;

    vm.updateCustomer = updateCustomer;

    $scope.customerID = $stateParams.customerID;

    var x = customerFactory.getCustomer($stateParams.customerID);

    vm.firstname = x['firstname'];
    vm.lastname  = x['lastname'];
    vm.email = x['email'];
    vm.phone = x['phone'];

    function updateCustomer(){
        customerFactory.updateCustomer(x, vm.firstname, vm.lastname, vm.email, vm.phone);
        vm.updated = true;
        vm.success = vm.firstname+" has been successfully updated!";
    }
}]);


app.controller('viewCustomerController', ['$scope','$stateParams', 'customerFactory', 'ordersFactory', function($scope, $stateParams, customerFactory, ordersFactory){

    var vm = this;

    $scope.customerID = $stateParams.customerID;

    $scope.individualCustomer = customerFactory.getCustomer($scope.customerID);

    $scope.customerOrders = ordersFactory.getCustomerOrder($scope.customerID);

    $scope.noOfOrders = $scope.customerOrders.length;

    if($scope.noOfOrders < 1){
        vm.orders = true;
        vm.orderMessage = "This user has no orders!";
    }else{
        vm.orders = false;
    }

}]);


app.filter('totalSumQuantity',[function(){
    return function(data, quantity, price){
        var sum = 0;
        angular.forEach(data,function(value){
            sum = sum + (parseInt(value[quantity]) * parseInt(value[price]));
        });
        return sum;
    }
}]);
