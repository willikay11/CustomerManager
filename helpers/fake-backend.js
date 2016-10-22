/**
 * Created by mac-intern on 10/4/16.
 */

app.run(setupFakeBackend);

    // setup fake backend for backend-less development
    function setupFakeBackend($httpBackend) {
        var user = {};

        // fake authenticate api end point
        $httpBackend.whenPOST('/api/authenticate').respond(function (method, url, data) {
            // get parameters from post request
            var params = angular.fromJson(data);

            // check user credentials and return fake jwt token if valid
            if (params.username === user.username && params.password === user.password) {

                return [200, { token: 'fake-jwt-token' }, {}];
            } else {
                return [200, {}, {}];
            }
        });

        $httpBackend.whenPOST('/api/register').respond(function (method, url, data){
            var params = angular.fromJson(data);

            user = {username: params.username, password: params.password, firstName: 'Test', lastName: 'User' , email: params.email};

            return [200, { registered: 'true' }, {}];
        });
        // pass through any urls not handled above so static files are served correctly
        $httpBackend.whenGET(/^\w+.*/).passThrough();
    }