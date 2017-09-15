EmpApp.controller("ListController", ['$scope', '$http', '$location', '$routeParams', '$config', function ($scope, $http, $location, $routeParams, $config, $timeout, cfpLoadingBar) {


    debugger;
    $http({
        method: 'GET',
        url: $config.baseApiUrl +'/Employee'
    }).then(function (success) {
        debugger;
       
        $scope.employees = success.data;
        }, function (error) {
            alert("fail");
    });

}
]);