/**
 * Created by mac-intern on 10/21/16.
 */
app.factory('customerFactory', function () {

    var customers = {};

    customers = [];

    customers.addCustomer = function(firstname, lastname, email, phone){
        var id = (customers.length)+1;
        customers.push({
            id: id,
            firstname: firstname,
            lastname: lastname,
            email: email,
            phone: phone
        });
    }

    customers.deleteCustomer = function(customerData){
        angular.forEach(customers, function (value, key)
        {
            if (value == customerData)
            {
                var index = customers.indexOf(customerData);
                customers.splice(index, 1);
            }
        });
    }

    customers.getCustomer = function(id){
        var editCustomer = {};

        editCustomer = [];

        angular.forEach(customers, function (value, key)
        {
            if (value['id'] == id)
            {
                editCustomer = value;
            }
        });
        return editCustomer;
    }


    customers.updateCustomer = function(customerData, firstname, lastname, email, phone)
    {
        angular.forEach(customers, function (value, key)
        {
            if (value == customerData)
            {
                var index = customers.indexOf(customerData);
                customers.splice(index, 1);

                customers.push({
                    id: customerData['id'],
                    firstname: firstname,
                    lastname: lastname,
                    email: email,
                    phone: phone
                });
            }
        });
    }

    return customers;
});