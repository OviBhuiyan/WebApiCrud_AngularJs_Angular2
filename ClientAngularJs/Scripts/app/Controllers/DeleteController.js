EmpApp.controller("DeleteController", ['$scope', '$http', '$location', '$routeParams', '$config', function ($scope, $http, $location, $routeParams, $config, $timeout, cfpLoadingBar) {

        $scope.id = $routeParams.id;

        $http({
            method: 'GET',
            url: $config.baseApiUrl + '/Employee/' + $routeParams.id

        }).then(function (success) {
            debugger;


            $scope.firstname = success.data.FirstName;
            $scope.lastname = success.data.LastName;
            $scope.country = success.data.Country;
            $scope.state = success.data.State;
            $scope.salary = success.data.Salary;
            $scope.active = success.data.IsActive;
            $scope.description = success.data.Description;
            $scope.dob = success.data.DateofBirth;
           
        }, function (error) {
            alert("save Problem !");
        });




        //$http.get('/api/employee/' + $routeParams.id).success(function (data) {
        //    $scope.firstname = data.FirstName;
        //    $scope.lastname = data.LastName;
        //    $scope.country = data.Country;
        //    $scope.state = data.State;
        //    $scope.salary = data.Salary;
        //    $scope.active = data.IsActive;
        //    $scope.dob = data.DateofBirth;
        //    $scope.description = data.Description;
        //});
        $scope.delete = function () {
            $http({
                method: 'DELETE',
                url: $config.baseApiUrl + '/Employee/' + $scope.id 
               
            }).then(function (success) {
                $location.path('/list');
            }, function (error) {
                alert("Delete Problem !");
            });



        };
    }
]);