EmpApp.controller("ListController", ['$scope', '$http', '$location', '$routeParams', function ($scope, $http, $location, $routeParams) {
    //var BaseUrl = 'http://localhost:55572';

    $http({
        method: 'GET',
        url: '/api/employee'
    }).then(function (success) {
        debugger;
        alert(success.data);
        $scope.employees = success.data;
    }, function (error) {

    });

}
]);