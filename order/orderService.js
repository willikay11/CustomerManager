/**
 * Created by mac-intern on 10/22/16.
 */
app.factory('ordersFactory', function (){
    var orders = {}

    orders = [];

    orders.addOrder = function(customerId, item, quantity, status, price){
        var id = (orders.length)+1;
        orders.push({
            id: id,
            customerId: customerId,
            item: item,
            quantity: quantity,
            status: status,
            price: price
        });
    }

    orders.getCustomerOrder = function(customerId){
        var customerOrder = {};

        customerOrder = [];

        angular.forEach(orders, function (value, key)
        {
            if (value['customerId'] == customerId)
            {
                customerOrder.push(value);
            }
        });
        return customerOrder;
    }

    return orders;
})