app.controller('ordersController', ['$scope', 'ordersFactory','customerFactory', function($scope, ordersFactory, customerFactory){

    var vm = this;

    vm.createOrder = createOrder;

    $scope.customers = customerFactory;
    $scope.orders = ordersFactory;

    if($scope.customers.length < 1){
        vm.anyCustomer = true;
        vm.customersInfo = "No customers in the system! Please add customers first.";
    }else{
        vm.anyCustomer = false;
    }

    if($scope.orders.length < 1){
        vm.anyOrders = true;
        vm.ordersMessage = "There are no current orders!";
    }else{
        vm.anyOrders = false;
        $scope.orders = ordersFactory;
    }


    function createOrder(){
        ordersFactory.addOrder(vm.customer, vm.item, vm.quantity, vm.status, vm.price);
        vm.created = true;
        vm.success = vm.item+" created successfully!";
    }
}]);

//
//app.controller('updateOrdersController', ['$scope', '$stateParams', 'ordersFactory', 'customerFactory', function($scope, $stateParams, ordersFactory, customerFactory){
//
//    var vm = this;
//
//    $scope.orderID = $stateParams.orderID;
//
//    var order = ordersFactory.getCustomerOrder($scope.orderID);
//
//    var customer = customerFactory.getCustomer(order['customerId']);
//
//    vm.customer = customer['firstname']+" "+customer['lastname'];
//    vm.item = order['item'];
//    vm.quantity  = order['quantity'];
//    vm.status = order['status'];
//    vm.price = order['price'];
//
//    function updateCustomer(){
//        customerFactory.updateCustomer(x, vm.firstname, vm.lastname, vm.email, vm.phone);
//        vm.updated = true;
//        vm.success = vm.firstname+" has been successfully updated!";
//    }
//}]);

//app.filter('getCustomerName',['customerFactory', function(customerFactory){
//    return function(data, id){
//        var name = '';
//        var customers = customerFactory;
//        angular.forEach(customers,function(value){
//            if(value[id] = data){
//                name = value['firstname']+" "+value['lastname'];
//            }
//        });
//        return name;
//    }
//}]);

