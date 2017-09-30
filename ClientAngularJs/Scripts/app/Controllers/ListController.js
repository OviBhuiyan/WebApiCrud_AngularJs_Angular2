EmpApp.controller("ListController", ['$scope', '$http', '$location', '$routeParams', 'constantValue', function ($scope, $http, $location, $routeParams, constantValue, $timeout, cfpLoadingBar) {


    debugger;
    $http({
        method: 'GET',
        url: constantValue.baseApiUrl +'/Employee/GetEmployeeList'
    }).then(function (success) {
        debugger;
       
        $scope.employees = success.data;
        }, function (error) {
            alert("Get to Employee list fail, Try Again !");
    });

}
]);